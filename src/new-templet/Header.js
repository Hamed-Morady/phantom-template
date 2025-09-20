import {useState} from "react";
import "../templet.css";

export default function Header(){
    const [openMenu, setOpenMenu] = useState(false);
    return(
        <div className="section-one">
        <a href="#" className="inners">
          <span className="icon-logo">
            <img src="./assest/images/logo.svg" alt="logo" />
          </span>
          <span className="title">PHANTOM</span>
        </a>
        <button
          type="button"
          className="btn-icon-menu"
          onClick={() => setOpenMenu(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 20 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-menu-icon lucide-menu"
          >
            <path d="M4 12h16" />
            <path d="M4 18h16" />
            <path d="M4 6h16" />
          </svg>
        </button>
        <div
          className={`menu-box ${openMenu === true ? "openMenu" : "menu-box"} `}
        >
          <button
            className="close-icon-menu"
            onClick={() => setOpenMenu(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-x-icon lucide-x"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
          <nav>
            <span className="title-menu">Menu</span>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/generic.html">Ipsum veroeros</a>
              </li>
              <li>
                <a href="/generic.html">Tempus etiam</a>
              </li>
              <li>
                <a href="/generic.html">Consequat dolor</a>
              </li>
              {/* <li className="opacity">
                <a>hi</a>
              </li> */}
            </ul>
          </nav>
        </div>
      </div>
    )
}