import { gsap } from "gsap";
import { SplitText } from "gsap/src/all";
import { ScrollTrigger } from "gsap/all";

export const bgChange = (el) => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: el,
      start: "-5% top",
      end: "10%",
      toggleActions: "none restart reverse none",
    },
  });
  tl.to(el, {
    duration: 0.7,
    backgroundColor: "#f2f2f2",
    ease: "Power1.easeIn",
  });
  return () => {
    tl.scrollTrigger.kill(true);
    tl.pause().kill(true);
  };
};

export const revealWork = (details, i) => {
  details.forEach((detail) => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: detail,
        start: "top 55%",
        toggleActions: "restart pause resume reverse",
      },
    });
    let texts = new SplitText(detail, { type: "words" });

    tl.from(texts.words, {
      duration: 1.5,
      ease: "power4",
      yPercent: 100,
      stagger: 0.01,
    });
    return () => {
      tl.scrollTrigger.kill(true);
      tl.pause().kill(true);
    };
  });
};

export const sidePanel = (panels, workdetail) => {
  panels.forEach((panel, i) => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: workdetail[i],
        start: "top center",
        toggleActions: "restart pause resume reverse",
      },
    });
    tl.fromTo(
      panel,
      {
        xPercent: i % 2 === 0 ? -110 : 110,
      },

      { xPercent: 0, duration: 2, ease: "power4" }
    );
    return () => {
      tl.scrollTrigger.kill(true);
      tl.pause().kill(true);
    };
  });
};

export const NavColor = (sections) => {
  sections.forEach((section) => {
    ScrollTrigger.create({
      trigger: section,
      start: "top 40%",
      end: "bottom 40%",
      toggleClass: {
        targets: `#${section.className}`,
        className: "active",
      },
    });
    ScrollTrigger.create({
      trigger: section[1],
      start: "top top",
      end: () => section[2],
      toggleClass: {
        targets: ".home a",
        className: "black",
        duration: 0.5,
      },
    });
  });
};

export const contactTl = (q, trigger) => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: trigger,
      start: "40% center",
      toggleActions: "restart pause reverse reverse",
    },
  });

  let texts = new SplitText(q(".contact__text h2"), { type: "words" });
  let info = new SplitText(q(".contact__more"), { type: "words" });

  tl.to(".contact", {
    borderRadius: "0%",
    width: "100%",
  })
    .from(texts.words, {
      opacity: 0,
      duration: 1,
      ease: "power4",
      yPercent: -100,
      stagger: 0.01,
    })
    .fromTo(
      ".textpath",
      {
        attr: { startOffset: "100%" },
      },
      {
        attr: { startOffset: "0%" },
        duration: 7,
      }
    )
    .to("#circle", {
      duration: 7,
      rotation: 360,
      transformOrigin: "center center",
      repeat: -1,
    })
    .from(
      info.words,
      {
        opacity: 0,
        duration: 1,
        ease: "power4",
        xPercent: -10,
        stagger: 0.01,
      },
      2
    );
};


export const aboutTl = (q)=> {

  
}