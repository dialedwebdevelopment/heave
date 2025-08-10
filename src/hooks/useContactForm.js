import { useState, useCallback } from 'react';

const useContactForm = (initialState = {}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    company: '',
    position: '',
    message: '',
    ...initialState
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setErrorMessage('Please enter your name');
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setShowThankYou(true);
        
        setTimeout(() => {
          setShowThankYou(false);
          setIsSubmitting(false);
          setFormData({
            name: '',
            phone: '',
            company: '',
            position: '',
            message: ''
          });
        }, 3000);
      } else {
        const errorData = await response.json();
        console.error('Form submission error:', errorData);
        setErrorMessage(errorData.error || 'Failed to send message');
        setShowError(true);
        setTimeout(() => setShowError(false), 3000);
        setIsSubmitting(false);
      }
    } catch (error) {
      setErrorMessage('Failed to send message. Please try again.');
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
      setIsSubmitting(false);
    }
  }, [formData]);

  return {
    formData,
    handleChange,
    handleSubmit,
    isSubmitting,
    showThankYou,
    showError,
    errorMessage
  };
};

export default useContactForm;