import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp, Firestore } from "firebase/firestore";

// Helper to safely access environment variables in a browser context
const getEnv = (key: string): string | undefined => {
  try {
    return (typeof process !== 'undefined' && process.env) ? (process.env as any)[key] : undefined;
  } catch {
    return undefined;
  }
};

const firebaseConfig = {
  apiKey: getEnv('REACT_APP_FIREBASE_API_KEY'),
  authDomain: getEnv('REACT_APP_FIREBASE_AUTH_DOMAIN'),
  projectId: getEnv('REACT_APP_FIREBASE_PROJECT_ID'),
  storageBucket: getEnv('REACT_APP_FIREBASE_STORAGE_BUCKET'),
  messagingSenderId: getEnv('REACT_APP_FIREBASE_MESSAGING_SENDER_ID'),
  appId: getEnv('REACT_APP_FIREBASE_APP_ID')
};

let db: Firestore | undefined;

// Initialization with validation
if (firebaseConfig.apiKey && firebaseConfig.projectId) {
    try {
        const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
        db = getFirestore(app);
    } catch (error) {
        console.error("Firebase initialization failed:", error);
    }
} else {
    console.warn("Firebase configuration missing or environment variables not populated. Contact form will operate in offline mode.");
}

export const sendMessage = async (name: string, email: string, message: string) => {
  if (!db) {
    return { 
      success: false, 
      error: "Configuration Error: Contact services are currently unavailable." 
    };
  }

  try {
    const docRef = await addDoc(collection(db, "contactMessages"), {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      message: message.trim(),
      timestamp: serverTimestamp()
    });
    
    return { success: true, id: docRef.id };
  } catch (error: any) {
    console.error("Transmission Error:", error);
    return { 
      success: false, 
      error: error.message || "Failed to transmit message to secure server." 
    };
  }
};