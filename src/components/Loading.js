import "../styles/scss/Loading.scss";
import { gsap } from "gsap";
import { Context } from "../Context";
import { useContext, useEffect, useRef, useState } from "react";

function Loading() {
  const [count, setCount] = useState(0);
  const { setLoading } = useContext(Context);
  const time = useRef();
  const ref = useRef();
  useEffect(() => {
    const q = gsap.utils.selector(ref);
    time.current = setInterval(() => {
      if (count < 100) {
        setCount((prev) => prev + 1);
      }
      if (count === 100) {
        loadTl.play();
        setLoading(true);
      }
    }, 80);

    gsap.to(q("#progress"), {
      duration: 0.2,
      width: `${count}%`,
    });

    let loadTl = gsap.timeline({
      paused: true,
      delay: 0.5,
    });

    loadTl
      .to(
        q("#percent"),
        {
          duration: 1,
          ease: "power4",
          y: -100,
          opacity: 0,
        },
        "+=1"
      )
      .to(".loader", { display: "none" });

    return () => clearInterval(time.current);
  }, [count, time, setLoading]);

  return (
    <div ref={ref} className="loader">
      <div id="progress"></div>
      <h1 id="percent">{count}%</h1>
    </div>
  );
}
export default Loading;
