/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./section9.css";

gsap.registerPlugin(SplitText, ScrollTrigger);

const Section9Mobile = () => {
  const titleRefMobile = useRef();
  
  // Create refs for form elements using an array
  const formRefs = {
    box1: useRef(),
    box2: useRef(),
    box3: useRef(),
    box4: useRef(),
    box5: useRef(),
    button: useRef()
  };
  
  // Create refs for left section elements
  const leftRefs = [useRef(), useRef()];

  // GSAP ANIMATIONS
  useEffect(() => {
    // Title animation
    const titleSplitTextMobile = new SplitText(titleRefMobile.current, { type: 'words' });
    gsap.fromTo(
      titleSplitTextMobile.words, 
      { opacity: 0 }, 
      { 
        opacity: 1, 
        stagger: 0.05, 
        duration: 1, 
        scrollTrigger: { 
          trigger: titleRefMobile.current, 
          start: "top 95%" 
        } 
      }
    );

    // Form elements animation - using loop instead of repetitive code
    Object.values(formRefs).forEach(ref => {
      gsap.to(ref.current, { 
        opacity: 1, 
        duration: 1.25, 
        ease: "sine", 
        scrollTrigger: { 
          trigger: ref.current, 
          start: "top 75%" 
        } 
      });
    });

    // Left section animation - using loop instead of repetitive code
    leftRefs.forEach(ref => {
      gsap.to(ref.current, { 
        opacity: 1, 
        duration: 1.25, 
        ease: "sine", 
        scrollTrigger: { 
          trigger: ref.current, 
          start: "top 95%" 
        } 
      });
    });
  }, []);

  // CONTACT
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    company: '',
    position: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, phone, company, position, message } = formData;
    const mailtoLink = `mailto:david@heavecorp.com?subject=Contact from ${name}&body=Name: ${name}%0D%0APhone: ${phone}%0D%0ACompany: ${company}%0D%0APosition: ${position}%0D%0AMessage: ${message}`;

    window.location.href = mailtoLink;
  };

  // Form fields data for dynamic rendering
  const formFields = [
    { ref: formRefs.box1, type: "text", name: "name", placeholder: "Name...", required: true },
    { ref: formRefs.box2, type: "tel", name: "phone", placeholder: "Phone number...", required: true },
    { ref: formRefs.box3, type: "text", name: "company", placeholder: "Company...", required: true },
    { ref: formRefs.box4, type: "text", name: "position", placeholder: "Position...", required: true },
    { ref: formRefs.box5, type: "text", name: "message", placeholder: "Anything else to add?", required: true }
  ];

  // Social links data for dynamic rendering
  const socialLinks = [
    { href: "https://www.instagram.com/heave", text: "Instagram" },
    { href: "https://www.linkedin.com/company/heavecorp/", text: "LinkedIn" },
    { href: "https://x.com/heaveads", text: "Twitter" }
  ];

  return (
    <section className="section nine-mobile">
      <div className="nine-content">
        <div className="nine-content-left">
          <h1 className="subheadline white form-mobile-text-center" ref={titleRefMobile}>
            Let's create the <span className="blue">future together!</span>
          </h1>
          <p 
            ref={leftRefs[0]} 
            className="description white form-mobile-text-center opacityanimation"
          >
            If you want to contact us, feel free to drop us a line or your pitch deck...
          </p>
          
          <form className="nine-contactbox" onSubmit={handleSubmit}>
            {formFields.map((field, index) => (
              <div key={index} ref={field.ref} className={index > 0 ? "opacityanimation" : ""}>
                <input
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  required={field.required}
                  value={formData[field.name]}
                  onChange={handleChange}
                />
              </div>
            ))}
            
            <button 
              ref={formRefs.button} 
              className="form-button opacityanimation" 
              type="submit"
            >
              <p className="description">Submit</p>
            </button>
          </form>
          
          <div className="form-contact-box opacityanimation" ref={leftRefs[1]}>
            <div className="form-contact-box-content">
              <p className="description white">Socials:</p>
              <div className="nine-content-left-item-column">
                {socialLinks.map((link, index) => (
                  <a 
                    key={index}
                    className="nine-content-left-item-column-text" 
                    href={link.href} 
                    target="_blank"
                    rel="noreferrer"
                  >
                    <p className="description grey">{link.text}</p>
                  </a>
                ))}
              </div>
            </div>
            
            <div className="form-contact-box-border" />
            
            <div className="form-contact-box-content">
              <p className="description white">Email:</p>
              <div className="nine-content-left-item-column">
                <a 
                  className="nine-content-left-item-column-text" 
                  href="mailto:david@heavecorp.com"
                >
                  <p className="description grey">david@heavecorp.com</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section9Mobile;