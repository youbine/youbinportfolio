import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../styles/scss/Mouse.scss";

function Mouse() {
  const ref = useRef();
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      if (!ref.current) return;
      gsap.to(ref.current, {
        x: e.clientX - 10,
        y: e.clientY,
        delay: 0.03,
        width: "1.5em",
        height: "1.5em",
      });
    });
  });
  return <div ref={ref} className="mouse"></div>;
}

export default Mouse;
