import React, { forwardRef } from 'react';
import FormField from '@/components/ui/FormField';

const ContactForm = forwardRef(({ formData, handleChange, handleSubmit, formRefs }, ref) => {
  return (
    <div className="nine-content-right opacityanimation" ref={ref}>
      <form className="nine-content-right-form" onSubmit={handleSubmit}>
        <FormField
          ref={formRefs.name}
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <FormField
          ref={formRefs.phone}
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone (Optional)"
        />
        <FormField
          ref={formRefs.company}
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Company"
          required
        />
        <FormField
          ref={formRefs.position}
          name="position"
          value={formData.position}
          onChange={handleChange}
          placeholder="Position (Optional)"
        />
        <FormField
          ref={formRefs.message}
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          required
          isTextarea
        />
        <button className="nine-content-right-form-button" type="submit">
          <p className="description">Submit Request</p>
        </button>
      </form>
    </div>
  );
});

ContactForm.displayName = 'ContactForm';

export default ContactForm;