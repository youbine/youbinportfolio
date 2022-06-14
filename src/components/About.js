import { useContext, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/all";
import { SplitText } from "gsap/src/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/scss/About.scss";
import { bgChange } from "../helper";
import { Context } from "../Context";
import Loading from "./Loading";

const WEEK_DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const thingsILove = [
  "reading books",
  "simple",
  "coffee",
  "learning new things",
  "chocolate",
];
const thingsIam = [
  "a responsible person",
  "eager to learn",
  "Focused",
  "a good listener",
  "intj",
];
function About() {
  gsap.registerPlugin(TextPlugin, ScrollTrigger, SplitText);
  const { loading } = useContext(Context);
  const aboutRef = useRef(null);
  const thingsRef = useRef();
  const iamRef = useRef();
  const [koreaTime] = useState(
    new Date(
      new Date().getTime() +
        new Date().getTimezoneOffset() * 60 * 1000 +
        9 * 60 * 60 * 1000
    )
  );

  useEffect(() => {
    if (!loading) return;
    bgChange(aboutRef.current);
    const splitTexts = (el) => {
      let texts = new SplitText(el, { type: "words" });
      const tl = gsap.timeline();
      tl.from(texts.words, {
        duration: 1.5,
        ease: "power4",
        yPercent: 100,
        stagger: 0.01,
      });
      return tl;
    };

    const splitSpans = (el) => {
      let texts = new SplitText(el, { type: "words" });
      const tl = gsap.timeline();
      tl.from(texts.words, {
        duration: 1.5,
        ease: "power4",
        opacity: 0,
        stagger: 0.2,
      });
      return tl;
    };

    const opacityTexts = (el) => {
      const tl = gsap.timeline();
      tl.to(el, {
        opacity: 1,
      });
      return tl;
    };

    const masterTL = gsap.timeline({
      paused: false,
      delay: 1,
    });

    masterTL
      .to(".aboutWrap", {
        opacity: 1,
      })
      .from(".mouse", { opacity: 0, duration: 2 })
      .from(".name", { opacity: 0, duration: 1 })
      .add(splitTexts(".develop p, .develop h1"))
      .add(opacityTexts(".home a"))
      .add(splitTexts(".menu li span"))
      .add(splitSpans(".text"))
      .to("svg", {
        display: "block",
        duration: 1,
        strokeDashoffset: 0,
      });

    let masterTl = gsap.timeline({
      repeat: -1,
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "-10% top",
        toggleActions: "restart pause resume none",
      },
    });
    thingsILove.forEach((thing) => {
      const tl = gsap.timeline({
        delay: 5,
        repeat: 1,
        yoyo: true,
        repeatDelay: 3,
      });
      tl.to(thingsRef.current, {
        duration: 3,
        text: thing,
      });
      masterTl.add(tl);
    });

    let masterTliam = gsap.timeline({
      repeat: -1,
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "-10% top",
        toggleActions: "restart pause resume none",
      },
    });
    thingsIam.forEach((thing) => {
      const tlim = gsap.timeline({
        delay: 5,
        repeat: 1,
        yoyo: true,
        repeatDelay: 4,
      });
      tlim.to(iamRef.current, {
        duration: 3,
        text: thing,
      });
      masterTliam.add(tlim);
    });
  }, [loading, koreaTime]);

  return (
    <>
      {!loading ? (
        <Loading />
      ) : (
        <section className="about" ref={aboutRef}>
          <div className="aboutWrap">
            <div className="name">
              <p className="im">I'm&nbsp;</p>
              <span className="name__text">
                Youbin,
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 152.9 43.4"
                >
                  <path d="M151.9,13.6c0,0,3.3-9.5-85-8.3c-97,1.3-58.3,29-58.3,29s9.7,8.1,69.7,8.1c68.3,0,69.3-23.1,69.3-23.1 s1.7-10.5-14.7-18.4" />
                </svg>
              </span>
            </div>
            <div className="develop">
              <p>junior web developer</p>
              <p>thank you for visiting my</p>
              <h1>portfolio</h1>
            </div>
            <div className="text">
              <p>I live</p>
              <p>in korea</p>
              <span className="weeks"></span>
              <span className="clock">
                {WEEK_DAYS[koreaTime.getDay()]} &nbsp;
                {koreaTime.getHours() > 12
                  ? "0" + (koreaTime.getHours() - 12)
                  : koreaTime.getHours() === 0
                  ? 12
                  : koreaTime.getHours()}
                :
                {koreaTime.getMinutes() < 10
                  ? "0" + koreaTime.getMinutes()
                  : koreaTime.getMinutes()}
                {koreaTime.getHours() >= 12
                  ? "pm"
                  : koreaTime.getHours() === 0
                  ? "am"
                  : "am"}
              </span>
              <div className="doing__wrap">
                <span className="doing">
                  {koreaTime.getHours() >= 9
                    ? "I'm working now"
                    : koreaTime.getHours() >= 19
                    ? "I'm chilling now"
                    : "I'm sleeping now"}
                </span>
              </div>

              <div className="love__wrap">
                <span>I love&nbsp;</span>
                <span ref={thingsRef} className="typing__love"></span>
                <span className="cursor">&nbsp;</span>
              </div>

              <div className="iam__wrap">
                <span>I'm&nbsp;</span>
                <span ref={iamRef} className="typing__iam"></span>
                <span className="cursor">&nbsp;</span>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default About;
