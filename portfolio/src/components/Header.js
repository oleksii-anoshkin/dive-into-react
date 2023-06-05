import "../css/Header.css";

export default function Header() {
  // texts
  const btnText = "menu";
  const btnType = "button";

  // classes
  const wrapClass = "body";
  const containerClass = "header";
  const sectionLogoClass = "header__logo link-text";
  const sectionItemsClass = "header__items";
  const sectionItemClass = "header__item";
  const sectionItemLinkClass = "header__link link-text";
  const menuBtn = "menu material-symbols-outlined";
  const activeClass = "visible";
  const hiddenClass = "hidden";

  // id
  const headerId = "header";

  // attributes
  const logoHref = "/";

  // texts
  const logoText = "Portofolio";

  const links = [
    { id: "home", href: "#header", text: "Home" },
    { id: "about", href: "#about", text: "About" },
    { id: "skills", href: "#skills", text: "Skills" },
    { id: "portfolio", href: "#portfolio", text: "Portfolio" },
    { id: "contact", href: "#contact", text: "Contact" },
  ];

  function openCloseMenu(e) {
    const body = document.querySelector(`${wrapClass}`);
    const links = document.querySelector(`.${sectionItemsClass}`);
    body.className = `${
      body.className.includes(hiddenClass) ? "" : hiddenClass
    }`;
    links.className = `${sectionItemsClass} ${
      links.className.includes(activeClass) ? "" : activeClass
    }`;
  }

  return (
    <>
      <header className={containerClass} id={headerId}>
        <nav>
          <button className={menuBtn} type={btnType} onClick={openCloseMenu}>
            {btnText}
          </button>
          <a className={sectionLogoClass} href={logoHref}>
            {logoText}
          </a>
          <ul className={sectionItemsClass}>
            {links.map((link) => (
              <li className={sectionItemClass} key={link.id}>
                <a
                  className={sectionItemLinkClass}
                  href={link.href}
                  onClick={openCloseMenu}>
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}
