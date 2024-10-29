/* eslint-disable react/no-unescaped-entities */
import React, { Suspense, useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(SplitText, ScrollTrigger);

export const Section9 = () => {

  return (
    <section className="section nine">
      <div className="section-border" />
      <div className="nine-content">
        <div className="nine-content-left">
          <p className="description white" >If you want to contact us, feel free to drop us line or your pitchdeck....</p>
          <div className="nine-content-left-bottom">
            <div className="nine-content-left-item">
              <p className="description white" >Address:</p>
              <div className="nine-content-left-item-column">
                <p className="description grey" >Whangai B.V.</p>
                <p className="description grey" >Van Eeghenstraat 110B</p>
                <p className="description grey" >1071 GM Amsterdam</p>
              </div>
            </div>
            <div className="nine-content-left-item">
              <p className="description white" >Email:</p>
              <div className="nine-content-left-item-column">
                <p className="description grey" >Info@whangai.nl</p>
              </div>
            </div>
          </div>
        </div>
        <div className="nine-content-right">
          <h1 className="subheadline white" >Let’s create the future together!</h1>
          <form className="nine-contactbox" >
            <div class="form-group">
              <input type="text" name="name" placeholder="Name..." required />
            </div>
            <div className="form-divider" />
            <div class="form-group">
              <input type="tel" name="phone" placeholder="Phone number..." required />
            </div>
            <div className="form-divider" />
            <div class="form-group">
              <input type="text" name="company" placeholder="Company..." required />
            </div>
            <div className="form-divider" />
            <div class="form-group">
              <input type="text" name="position" placeholder="Position..." required />
            </div>
            <div className="form-divider" />
            <div class="form-group">
              <input type="text" name="position" placeholder="Anything else to add?" required />
            </div>
            <button className="form-button" type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};