import React, { forwardRef } from 'react';

const FormField = forwardRef(({ 
  type = 'text',
  name,
  value,
  onChange,
  placeholder,
  required = false,
  isTextarea = false,
  className = ''
}, ref) => {
  const baseClassName = isTextarea 
    ? 'nine-content-right-form-textarea' 
    : 'nine-content-right-form-input';
    
  const fieldProps = {
    ref,
    name,
    value,
    onChange,
    placeholder,
    required,
    className: `${baseClassName} ${className}`.trim()
  };

  if (isTextarea) {
    return <textarea {...fieldProps} />;
  }

  return <input type={type} {...fieldProps} />;
});

FormField.displayName = 'FormField';

export default FormField;