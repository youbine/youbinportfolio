import { useContext } from "react";
import "../styles/scss/Nav.scss";
import { Context } from "../Context";

function Nav() {
  const { clickMenu } = useContext(Context);
  return (
    <nav>
      <div className="nav__wrap">
        <div className="home">
          <a href="https://youbine.github.io/youbinportfolio/">
            youbin
            <br />
            portfolio
          </a>
        </div>
        <div className="menu">
          <ul
            onClick={(e) => {
              clickMenu(e.target.outerText);
            }}
          >
            <li>
              <span id="about">
                about
              </span>
            </li>
            <li>
              <span id="work">work</span>
            </li>
            <li>
              <span id="contact">contact</span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
