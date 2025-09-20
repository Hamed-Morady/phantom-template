import { useState } from "react";
import "../templet.css";
import Tiles from "./Tils";
import Footer from "./Footer";
import Header from "./Header";

export default function Home() {
  return (
    <div className="container">
      <div className="warper">
        <div className="inner">
          <Header />
        </div>
        <div className="inner">
          <div className="main">
            <h1>
              This is Phantom, a free, fully responsive site template designed
              by
              <a href="#" className="brand">
               Hamed Morady
              </a>
              .
            </h1>
            <p className="pragraph">
              Etiam quis viverra lorem, in semper lorem. Sed nisl arcu euismod
              sit amet nisi euismod sed cursus arcu elementum ipsum arcu vivamus
              quis venenatis orci lorem ipsum et magna feugiat veroeros aliquam.
              Lorem ipsum dolor sit amet nullam dolore.
            </p>
          </div>
        </div>
        <div className="inner">
          <section className="tils">
            <Tiles />
          </section>
        </div>
        <footer>
          <Footer />
          <ul class="copyright">
            <li>&copy; Untitled. All rights reserved</li>
            <li>
              Design: <a href="http://html5up.net">Hamed Morady</a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
}
