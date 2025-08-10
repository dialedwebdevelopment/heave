import React from 'react';

const ContactInfo = ({ socialLinks, refs }) => {
  return (
    <div className="nine-content-left">
      <div className="nine-content-left-item opacityanimation" ref={refs[0]}>
        <div className="nine-content-left-item-column">
          <p className="description grey">Social</p>
          {socialLinks.map((link, index) => (
            <a 
              key={index} 
              className="nine-content-left-item-column-text" 
              href={link.href} 
              target="_blank" 
              rel="noreferrer"
            >
              <p className="description grey hover-text-grey">{link.text}</p>
            </a>
          ))}
        </div>
      </div>
      <div className="nine-content-left-item opacityanimation" ref={refs[1]}>
        <div className="nine-content-left-item-column">
          <p className="description grey">Email</p>
          <a 
            className="nine-content-left-item-column-text" 
            href="mailto:hello@heavecorp.com"
          >
            <p className="description grey hover-text-grey">hello@heavecorp.com</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;