/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

export const Section9 = () => {

  const titleRef = useRef()
  const formBox1 = useRef()
  const formBox2 = useRef()
  const formBox3 = useRef()
  const formBox4 = useRef()
  const formBox5 = useRef()
  const formButton = useRef()

  const leftRef1 = useRef()
  const leftRef2 = useRef()
  const leftRef3 = useRef()

  // GSAP ANIMATIONS
  useEffect(() => {
    const titleSplitText = new SplitText(titleRef.current, { type: 'words' });
    gsap.fromTo(titleSplitText.words, { opacity: 0 }, { opacity: 1, stagger: 0.05, duration: 1, scrollTrigger: { trigger: titleRef.current, start: "top 95%" } })

    gsap.fromTo(formBox1.current, { opacity: 0, filter: 'blur(10px)' }, { opacity: 1, filter: 'blur(0px)', duration: 0.5, scrollTrigger: { trigger: formBox1.current, start: "top 95%" } })
    gsap.fromTo(formBox2.current, { opacity: 0, filter: 'blur(10px)' }, { delay: 0, filter: 'blur(0px)', opacity: 1, duration: 0.5, scrollTrigger: { trigger: formBox2.current, start: "top 95%" } })
    gsap.fromTo(formBox3.current, { opacity: 0, filter: 'blur(10px)' }, { delay: 0, filter: 'blur(0px)', opacity: 1, duration: 0.5, scrollTrigger: { trigger: formBox3.current, start: "top 95%" } })
    gsap.fromTo(formBox4.current, { opacity: 0, filter: 'blur(10px)' }, { delay: 0, filter: 'blur(0px)', opacity: 1, duration: 0.5, scrollTrigger: { trigger: formBox4.current, start: "top 95%" } })
    gsap.fromTo(formBox5.current, { opacity: 0, filter: 'blur(10px)' }, { delay: 0, filter: 'blur(0px)', opacity: 1, duration: 0.5, scrollTrigger: { trigger: formBox5.current, start: "top 95%" } })
    gsap.fromTo(formButton.current, { opacity: 0, filter: 'blur(10px)' }, { delay: 0, filter: 'blur(0px)', opacity: 1, duration: 0.5, scrollTrigger: { trigger: formButton.current, start: "top 95%" } })

    gsap.fromTo(leftRef1.current, { opacity: 0, filter: 'blur(10px)' }, { delay: 0.5, filter: 'blur(0px)', opacity: 1, duration: 1, scrollTrigger: { trigger: leftRef1.current, start: "top 95%" } })
    gsap.fromTo(leftRef2.current, { opacity: 0, filter: 'blur(10px)' }, { delay: 0.5, filter: 'blur(0px)', opacity: 1, duration: 1, scrollTrigger: { trigger: leftRef2.current, start: "top 95%" } })
    gsap.fromTo(leftRef3.current, { opacity: 0, filter: 'blur(10px)' }, { delay: 0.5, filter: 'blur(0px)', opacity: 1, duration: 1, scrollTrigger: { trigger: leftRef3.current, start: "top 95%" } })
  }, [])

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
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, phone, company, position, message } = formData;
    const mailtoLink = `mailto:hello@heavecorp.com?subject=Contact from ${name}&body=Name: ${name}%0D%0APhone: ${phone}%0D%0ACompany: ${company}%0D%0APosition: ${position}%0D%0AMessage: ${message}`;

    window.location.href = mailtoLink;
  };

  return (
    <section className="section nine">
      <div className="section-border" />
      <div className="nine-content">
        <div className="nine-content-left">
          <p ref={leftRef1} className="description white" >If you want to contact us, feel free to drop us a line or your pitch deck...</p>
          <div className="nine-content-left-bottom">
            <div ref={leftRef2} className="nine-content-left-item">
              <p className="description white">Socials:</p>
              <div className="nine-content-left-item-column">
                <a className="nine-content-left-item-column-text" href="https://www.instagram.com/heave" target="_blank" >
                  <p className="description grey hover-text-grey">Instagram</p>
                </a>
                <a className="nine-content-left-item-column-text" href="https://www.linkedin.com/company/heavecorp/" target="_blank" >
                  <p className="description grey hover-text-grey">LinkedIn</p>
                </a>
                <a className="nine-content-left-item-column-text" href="https://x.com/heaveads" target="_blank" >
                  <p className="description grey hover-text-grey">Twitter</p>
                </a>
              </div>
            </div>
            <div ref={leftRef3} className="nine-content-left-item">
              <p className="description white">Email:</p>
              <div className="nine-content-left-item-column">
                <a className="nine-content-left-item-column-text" href="mailto:hello@heavecorp.com" >
                  <p className="description grey hover-text-grey">hello@heavecorp.com</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="nine-content-right">
          <h1 className="subheadline white" ref={titleRef} >Let’s create the <span className="blue" >future together!</span></h1>
          <form className="nine-contactbox" onSubmit={handleSubmit}>
            <input ref={formBox1} type="text" name="name" placeholder="Name..." required value={formData.name} onChange={handleChange} />
            <input ref={formBox2} type="tel" name="phone" placeholder="Phone number..." required value={formData.phone} onChange={handleChange} />
            <input ref={formBox3} type="text" name="company" placeholder="Company..." required value={formData.company} onChange={handleChange} />
            <input ref={formBox4} type="text" name="position" placeholder="Position..." required value={formData.position} onChange={handleChange} />
            <input ref={formBox5} type="text" name="message" placeholder="Anything else to add?" required value={formData.message} onChange={handleChange} />
            <button data-hover ref={formButton} className="form-button" type="submit">
              <p className="description">Submit</p>
              <div data-hover-bounds></div>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};