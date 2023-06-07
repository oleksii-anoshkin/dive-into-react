// styles
import "../css/Header.css";

// images
import logo from "../images/logo-icons/logo.svg";

// states
import { useState } from "react";

export default function Header() {
  // texts
  const homeLinkText = "Home";
  const aboutLinkText = "About Us";
  const servicesLinkText = "Services";
  const blogsLinkText = "Blogs";
  const btnLinkText = "Gift Finder";
  const btnMenuType = "button";
  const btnMenuText = "menu";
  const btnCloseText = "close";

  // states
  const [btnLogo, setBtnLogo] = useState("menu");

  // classes
  const sectionClass = "header__container";
  const navClass = "header__nav";
  const navItemsClass = "header__items";
  const navItemClass = "header__item";
  const navLogoClass = "logo";
  const navLogoImgClass = "logo__img";
  const navLogoLinkClass = "logo__link";
  const navLinksClass = "header__links";
  const navLinkClass = "header__link";
  const navLinkTextClass = "header__link-text link";
  const navBtnClass = "btn";
  const navBtnLinkClass = "btn__link light-orange-btn";
  const navMenuClass = "menu";
  const navMenuBtnClass = "menu__btn material-symbols-outlined";
  const visibleClass = "visible";

  // hrefs
  const homeLinkHref = "#home";
  const aboutLinkHref = "#about";
  const servicesLinkHref = "#services";
  const blogsLinkHref = "#blogs";
  const btnHref = "https://example.com/";

  // ids
  const sectionId = "home";

  // other
  const rel = "noopener noreferrer nofollow";
  const target = "_blank";

  function visibleHiddenMenu(e) {
    const navLinks = document.querySelector(`.${navLinksClass}`);
    const navBtn = document.querySelector(`.${navBtnClass}`);

    navLinks.className = `${navLinksClass} ${
      navLinks.className.includes(visibleClass) ? "" : visibleClass
    }`;

    navBtn.className = `${navItemClass} ${navBtnClass} ${
      navBtn.className.includes(visibleClass) ? "" : visibleClass
    }`;

    setBtnLogo(btnLogo === btnMenuText ? btnCloseText : btnMenuText);
  }

  return (
    <>
      <header className={sectionClass} id={sectionId}>
        <nav className={navClass}>
          <ul className={navItemsClass}>
            <li className={`${navItemClass} ${navLogoClass}`}>
              <a className={navLogoLinkClass} href="/">
                <img className={navLogoImgClass} src={logo} alt="..." />
              </a>
            </li>
            <li className={navItemClass}>
              <ul className={navLinksClass}>
                <li className={navLinkClass}>
                  <a
                    className={navLinkTextClass}
                    href={homeLinkHref}
                    onClick={visibleHiddenMenu}>
                    {homeLinkText}
                  </a>
                </li>
                <li className={navLinkClass}>
                  <a
                    className={navLinkTextClass}
                    href={aboutLinkHref}
                    onClick={visibleHiddenMenu}>
                    {aboutLinkText}
                  </a>
                </li>
                <li className={navLinkClass}>
                  <a
                    className={navLinkTextClass}
                    href={servicesLinkHref}
                    onClick={visibleHiddenMenu}>
                    {servicesLinkText}
                  </a>
                </li>
                <li className={navLinkClass}>
                  <a
                    className={navLinkTextClass}
                    href={blogsLinkHref}
                    onClick={visibleHiddenMenu}>
                    {blogsLinkText}
                  </a>
                </li>
              </ul>
            </li>
            <li className={`${navItemClass} ${navBtnClass}`}>
              <a
                className={navBtnLinkClass}
                href={btnHref}
                target={target}
                rel={rel}>
                {btnLinkText}
              </a>
            </li>
            <li className={`${navItemClass} ${navMenuClass}`}>
              <button
                className={navMenuBtnClass}
                type={btnMenuType}
                onClick={visibleHiddenMenu}>
                {btnLogo}
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
