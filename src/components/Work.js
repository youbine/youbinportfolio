import "../styles/scss/Work.scss";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useRef, useEffect, useContext } from "react";
import { revealWork, sidePanel } from "../helper";
import { Context } from "../Context";

function Work() {
  gsap.registerPlugin(ScrollSmoother);
  const { loading } = useContext(Context);
  const el = useRef();

  useEffect(() => {
    if (!loading) return;
    const q = gsap.utils.selector(el);
    revealWork(q(".titlewrap"));
    sidePanel(q(".panel"), q(".work__detail"));
  });

  return (
    <section className="work" ref={el}>
      <div className="workWrap">
        <div className="work__detail hite">
          <a
            className="panel hite"
            href="https://youbine.github.io/Webpage_CloneCoding/Hitejinro/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>hite</div>
          </a>
          <div className="titlewrap hite">
            <p className="small">web</p>
            <h2 className="title">hite</h2>
            <p>web site clone coding</p>
            <p className="skills">
              html <br />
              css <br />
              javascript
            </p>
          </div>
        </div>
        <div className="work__detail starbucks">
          <div className="titlewrap starbucks">
            <p className="small">web & tablet & mobile</p>
            <h2 className="title">
              star
              <br />
              bucks
            </h2>
            <p>web site clone coding</p>
            <p className="skills">
              html <br />
              css <br />
              javascript
            </p>
          </div>
          <a
            className="panel starbucks"
            href="https://youbine.github.io/Webpage_CloneCoding/Starbucks/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>starbucks</div>
          </a>
        </div>
        <div className="work__detail netflix">
          <a
            className="panel netflix"
            href="https://youbine.github.io/react_netflix/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>netflix</div>
          </a>
          <div className="titlewrap netflix">
            <p className="small">web</p>
            <h2 className="title">netflix</h2>
            <p>web site clone coding</p>
            <p className="skills">
              reactJs <br />
              styled-components
            </p>
          </div>
        </div>
        <div className="work__detail taco">
          <div className="titlewrap taco">
            <p className="small">web</p>
            <h2 className="title">
              Almighty <br /> Taco
            </h2>
            <p>
              platform for ordering foods <br />
              design, development
            </p>
            <p className="skills">
              reactJs <br />
              styled-components <br />
              react-select
            </p>
          </div>
          <a
            className="panel taco"
            href="https://youbine.github.io/almightyTaco/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>taco</div>
          </a>
        </div>
        <div className="work__detail apple">
          <a
            className="panel apple"
            href="https://youbine.github.io/Webpage_CloneCoding/Apple/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>apple</div>
          </a>
          <div className="titlewrap apple">
            <p className="small">web</p>
            <h2 className="title">
              Scroll <br />
              animation
            </h2>
            <p>web site clone coding</p>
            <p className="skills">
              html <br />
              css <br />
              javascript <br />
              scroll magic
            </p>
          </div>
        </div>
        <div className="work__detail room">
          <div className="titlewrap room">
            <p className="small">web & tablet & mobile</p>
            <h2 className="title">Room</h2>
            <p>development</p>
            <p className="skills">
              html <br />
              css <br />
              javascript
            </p>
          </div>
          <a
            className="panel room"
            href="https://youbine.github.io/Webpage_CloneCoding/RoomHomepage/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>room</div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Work;
