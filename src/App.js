import "./styles/scss/App.scss";
import "./styles/fonts/fonts.css";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { NavColor } from "./helper";
import { useRef, useEffect, useContext } from "react";
import About from "./components/About";
import Work from "./components/Work";
import Nav from "./components/Nav";
import Contact from "./components/Contact";
import Mouse from "./components/Mouse";
import { Context } from "./Context";

function App() {
  const el = useRef();
  const { menu, loading } = useContext(Context);

  useEffect(() => {
    if (!loading) return;
    let smoother = ScrollSmoother.create({
      smooth: 2,
      effects: true,
    });
    smoother.effects(".panel", { speed: "auto", leg: 1 });
    //navColor
    const sections = gsap.utils.toArray("section");
    NavColor(sections);
    //nav to section
    gsap.to(smoother, {
      scrollTop: smoother.offset(`.${menu}`),
      duration: 1,
    });

    return () => {
      smoother.kill();
    };
  });

  return (
    <>
      {loading && (
        <>
          <Mouse />
          <Nav />
        </>
      )}
      <div ref={el} id="smooth-wrapper">
        <div id="smooth-content">
          <About />
          <Work />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
