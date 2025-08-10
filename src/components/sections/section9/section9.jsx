/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useRef, useMemo } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useContactForm from "@/hooks/useContactForm";
import "./section9.css";

gsap.registerPlugin(SplitText, ScrollTrigger);

const Section9 = () => {
  const titleRef = useRef();
  
  const box1Ref = useRef();
  const box2Ref = useRef();
  const box3Ref = useRef();
  const box4Ref = useRef();
  const box5Ref = useRef();
  const buttonRef = useRef();
  
  const formRefs = useMemo(() => ({
    box1: box1Ref,
    box2: box2Ref,
    box3: box3Ref,
    box4: box4Ref,
    box5: box5Ref,
    button: buttonRef
  }), []);
  
  const leftRef1 = useRef();
  const leftRef2 = useRef();
  const leftRef3 = useRef();
  
  const leftRefs = useMemo(() => [leftRef1, leftRef2, leftRef3], []);

  useEffect(() => {
    const titleSplitText = new SplitText(titleRef.current, { type: 'words' });
    const titleAnimation = gsap.fromTo(
      titleSplitText.words, 
      { opacity: 0 }, 
      { 
        opacity: 1, 
        stagger: 0.05, 
        duration: 1, 
        scrollTrigger: { 
          trigger: titleRef.current, 
          start: "top 95%" 
        } 
      }
    );

    const formAnimations = Object.values(formRefs).map(ref => {
      return gsap.to(ref.current, { 
        opacity: 1, 
        duration: 1.25, 
        ease: "sine", 
        scrollTrigger: { 
          trigger: ref.current, 
          start: "top 95%" 
        } 
      });
    });

    const leftAnimations = leftRefs.map(ref => {
      return gsap.to(ref.current, { 
        delay: 0.5, 
        opacity: 1, 
        duration: 1.25, 
        ease: "sine", 
        scrollTrigger: { 
          trigger: ref.current, 
          start: "top 95%" 
        } 
      });
    });

    return () => {
      titleAnimation.kill();
      formAnimations.forEach(anim => anim.kill());
      leftAnimations.forEach(anim => anim.kill());
      titleSplitText.revert();
    };
  }, [formRefs, leftRefs]);

  const { 
    formData, 
    handleChange, 
    handleSubmit, 
    isSubmitting, 
    showThankYou, 
    showError, 
    errorMessage 
  } = useContactForm();

  const formFields = [
    { ref: formRefs.box1, type: "text", name: "name", placeholder: "Name...", required: true },
    { ref: formRefs.box2, type: "tel", name: "phone", placeholder: "Phone number...", required: true },
    { ref: formRefs.box3, type: "text", name: "company", placeholder: "Company...", required: true },
    { ref: formRefs.box4, type: "text", name: "position", placeholder: "Position...", required: true },
    { ref: formRefs.box5, type: "text", name: "message", placeholder: "Anything else to add?", required: true }
  ];

  const socialLinks = [
    { href: "https://www.instagram.com/heave", text: "Instagram" },
    { href: "https://www.linkedin.com/company/heavecorp/", text: "LinkedIn" },
    { href: "https://x.com/heaveads", text: "Twitter" }
  ];

  return (
    <section id="section9" className="section nine">
      <div className="section-border" />
      <div className="nine-content">
        <div className="nine-content-left">
          <p ref={leftRefs[0]} className="description white opacityanimation">
            If you want to contact us, feel free to drop us a line or your pitch deck...
          </p>
          <div className="nine-content-left-bottom">
            <div ref={leftRefs[1]} className="nine-content-left-item opacityanimation">
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
                    <p className="description grey hover-text-grey">{link.text}</p>
                  </a>
                ))}
              </div>
            </div>
            <div ref={leftRefs[2]} className="nine-content-left-item opacityanimation">
              <p className="description white">Email:</p>
              <div className="nine-content-left-item-column">
                <a className="nine-content-left-item-column-text" href="mailto:david@heavecorp.com">
                  <p className="description grey hover-text-grey">david@heavecorp.com</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="nine-content-right">
          <h1 className="subheadline white" ref={titleRef}>
            Let's create the <span className="blue">future together!</span>
          </h1>
          <form className="nine-contactbox" onSubmit={handleSubmit}>
            <div className={`form-feedback-overlay ${showThankYou ? 'form-feedback-overlay-visible' : ''}`}>
              <div className="form-feedback-content">
                <h2 className="small-subheadline white">Thank you!</h2>
                <p className="description white">We'll get back to you soon.</p>
              </div>
            </div>
            <div className={`form-feedback-overlay ${showError ? 'form-feedback-overlay-visible' : ''}`}>
              <div className="form-feedback-content">
                <h2 className="small-subheadline white">Error</h2>
                <p className="description white">{errorMessage}</p>
              </div>
            </div>
            {formFields.map((field, index) => (
              <input
                key={index}
                className="opacityanimation"
                ref={field.ref}
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                required={field.required}
                value={formData[field.name]}
                onChange={handleChange}
                disabled={isSubmitting}
              />
            ))}
            <button 
              data-hover 
              ref={formRefs.button} 
              className="form-button opacityanimation" 
              type="submit"
              disabled={isSubmitting}
            >
              <p className="description">{isSubmitting ? 'Sending...' : 'Submit'}</p>
              <div data-hover-bounds></div>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Section9;