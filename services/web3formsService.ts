/**
 * Interface representing the contact form submission data.
 */
export interface ContactSubmission {
  name: string;
  email: string;
  subject: string;
  message: string;
  botcheck?: string;
}

/**
 * Result structure returned by the submission helper.
 */
export interface SubmissionResult {
  success: boolean;
  message?: string;
}

/**
 * Submits the contact form data to Web3Forms.
 * 
 * @param data The contact form values.
 * @returns A promise resolving to the submission result.
 */
export const submitContactForm = async (data: ContactSubmission): Promise<SubmissionResult> => {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    console.error("Web3Forms Configuration Error: VITE_WEB3FORMS_ACCESS_KEY environment variable is missing.");
    return {
      success: false,
      message: "Form transmission is misconfigured. Please set VITE_WEB3FORMS_ACCESS_KEY in your .env file."
    };
  }

  // If honeypot is filled, discard submission silently to discourage bots
  if (data.botcheck && data.botcheck.trim() !== "") {
    console.warn("Honeypot triggered. Silent failure implemented to deflect automated spam.");
    return { success: true };
  }

  try {
    const payload = {
      access_key: accessKey,
      name: data.name.trim(),
      email: data.email.trim().toLowerCase(),
      subject: data.subject.trim(),
      message: data.message.trim(),
      from_name: data.name.trim(),
    };

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (response.ok && result.success) {
      return { success: true };
    } else {
      return {
        success: false,
        message: result.message || "Failed to deliver message. Please try again later."
      };
    }
  } catch (error: any) {
    console.error("Web3Forms Submission Error:", error);
    return {
      success: false,
      message: error.message || "A network error occurred. Please verify your connection."
    };
  }
};
