import React, { useState, useEffect } from 'react';
import { SectionId } from '../../types';
import { submitContactForm } from '../web3formsService';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    botcheck: ''
  });
  
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Automatically clear success or error notifications after 5 seconds
  useEffect(() => {
    if (status === 'success' || status === 'error') {
      const timer = setTimeout(() => {
        setStatus('idle');
        setErrorMessage('');
        setSuccessMessage('');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const validateEmail = (email: string) => {
    const trimmed = email.trim();
    if (!trimmed) return { isValid: false, message: 'I need an email address to reply to.' };
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(trimmed)) return { isValid: false, message: "That address doesn't look quite right." };
    return { isValid: true };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset state before validating
    setErrorMessage('');
    setSuccessMessage('');
    
    if (!formData.name.trim()) {
      setStatus('error');
      setErrorMessage('Please let me know who you are.');
      return;
    }
    
    const emailCheck = validateEmail(formData.email);
    if (!emailCheck.isValid) {
      setStatus('error');
      setErrorMessage(emailCheck.message || '');
      return;
    }

    if (!formData.subject.trim()) {
      setStatus('error');
      setErrorMessage('Please let me know what this is about.');
      return;
    }

    if (!formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Tell me a bit about what you have in mind.');
      return;
    }

    setStatus('submitting');
    try {
      const result = await submitContactForm(formData);
      
      if (result.success) {
        setStatus('success');
        setSuccessMessage("Message sent. I'll be in touch.");
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          botcheck: ''
        });
      } else {
        setStatus('error');
        setErrorMessage(result.message || 'Failed to transmit message.');
      }
    } catch (err: any) {
      console.error("Submission failed:", err);
      setStatus('error');
      setErrorMessage('An unexpected error occurred. Please try again.');
    }
  };

  const isSubmitting = status === 'submitting';

  return (
    <section id={SectionId.Contact} className="py-48 bg-surface px-12 md:px-24">
      <div className="max-w-4xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          
          <div className="animate-fade-in">
            <h2 className="text-gold uppercase tracking-[0.4em] text-[10px] font-bold mb-8">Reach Out</h2>
            <h3 className="text-5xl font-serif font-black mb-10 tracking-tight">Let's talk.</h3>
            <p className="text-lg text-text-muted font-light leading-relaxed mb-12">
              I’m always open to hearing about new projects, technical challenges, or architectural questions. 
              <br/><br/>
              Feel free to send a message, and I'll get back to you personally.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {/* Honeypot Spam Protection Field - Hidden from users */}
            <input 
              type="text" 
              name="botcheck" 
              value={formData.botcheck}
              onChange={(e) => setFormData({...formData, botcheck: e.target.value})}
              style={{ display: 'none' }} 
              autoComplete="off"
            />

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-text-muted/60 uppercase tracking-widest ml-1">Name</label>
              <input 
                type="text" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                disabled={isSubmitting}
                className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-gold transition-all font-light disabled:opacity-55"
                placeholder="How should I address you?"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-text-muted/60 uppercase tracking-widest ml-1">Email</label>
              <input 
                type="email" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                disabled={isSubmitting}
                className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-gold transition-all font-light disabled:opacity-55"
                placeholder="Where can I reach you?"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-text-muted/60 uppercase tracking-widest ml-1">Subject</label>
              <input 
                type="text" 
                value={formData.subject}
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
                disabled={isSubmitting}
                className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-gold transition-all font-light disabled:opacity-55"
                placeholder="What is this inquiry about?"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-text-muted/60 uppercase tracking-widest ml-1">Message</label>
              <textarea 
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                disabled={isSubmitting}
                rows={4}
                className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-gold transition-all font-light resize-none disabled:opacity-55"
                placeholder="What's on your mind?"
                required
              />
            </div>

            <div className="pt-6">
              <div className="space-y-6">
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative flex items-center gap-4 text-xs font-bold uppercase tracking-[0.3em] text-gold hover:text-text-primary transition-all disabled:text-text-muted/60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-4 h-4 animate-spin text-gold" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <span className="block h-[1px] bg-gold/40 flex-grow group-hover:bg-text-primary transition-colors group-disabled:bg-text-muted/20"></span>
                </button>

                {/* Status Feedback Banners */}
                {status === 'success' && (
                  <div className="flex items-center gap-4 text-gold animate-fade-in">
                    <CheckCircle className="w-5 h-5" />
                    <p className="text-xs font-bold uppercase tracking-widest">{successMessage}</p>
                  </div>
                )}

                {status === 'error' && (
                  <div className="flex items-center gap-3 text-red-400 text-[10px] font-bold uppercase tracking-widest animate-fade-in">
                    <AlertCircle className="w-4 h-4" />
                    {errorMessage}
                  </div>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;