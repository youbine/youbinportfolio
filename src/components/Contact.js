import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { contactTl } from "../helper";
import "../styles/scss/Contact.scss";

function Contact() {
  const contactRef = useRef(null);

  useEffect(() => {
    const q = gsap.utils.selector(contactRef);
    contactTl(q, contactRef.current);
  });

  return (
    <section ref={contactRef} className="contact">
      <div className="contact__wrap">
        <div className="contact__text">
          <h2>
            Let's make amazing things, <br />
            Work with Me <br />
            <strong>Contact Me</strong>
          </h2>
          <svg viewBox="-130 20 500 180" className="contacttag">
            <a href="mailto:youbbiinn@gmail.com&subject=hi&body=say something">
              <path
                d="
        M 100, 100
        m -75, 0
        a 75,75 0 1,0 150,0
        a 75,75 0 1,0 -150,0
    "
                id="circle"
                fill="transparent"
              ></path>
            </a>
            <text width="500">
              <textPath
                alignmentBaseline="top"
                className="textpath"
                xlinkHref="#circle"
              >
                click here to contact me
              </textPath>
            </text>
          </svg>
        </div>
        <div className="contact__more">
          <a href="https://github.com/youbine" className="github">
            Github
          </a>
          <span className="gmail">youbbiinn@gmail.com</span>
        </div>
      </div>
    </section>
  );
}
export default Contact;
