import { useEffect, useState, useCallback } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  useEffect(() => {
    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.7,
      speed: 1.7,
      effects: true,
      autoResize: true,
      ignoreMobileResize: true,
    });

    smoother.scrollTop(0);

    let links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();
          let elem = e.currentTarget as HTMLAnchorElement;
          let section = elem.getAttribute("data-href");
          smoother.scrollTo(section, true, "top top");
        }
      });
    });
    window.addEventListener("resize", () => {
      ScrollSmoother.refresh(true);
    });
  }, []);

  return (
    <>
      <div className={`header ${menuOpen ? "menu-open" : ""}`}>
        <a href="/#" className="navbar-title" data-cursor="disable">
          IE
        </a>
        <button
          className={`hamburger ${menuOpen ? "hamburger-active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={menuOpen ? "nav-visible" : ""}>
          <li>
            <a data-href="#about" href="#about" onClick={closeMenu}>
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work" onClick={closeMenu}>
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#testimonials" href="#testimonials" onClick={closeMenu}>
              <HoverLinks text="TESTIMONIALS" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact" onClick={closeMenu}>
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      {menuOpen && <div className="nav-overlay" onClick={closeMenu}></div>}
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
