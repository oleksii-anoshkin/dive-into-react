// styles
import "../css/Footer.css";

export default function Footer() {
  // classes
  const footerContainerClass = "footer__container";
  const footerNavClass = "footer__nav";
  const footerNavLinksClass = "footer__nav-links nav-links";
  const footerNavLinkClass = "nav-links__link";
  const footerNavLinkTextClass = "nav-links__link-text link";
  const footerBotTextClass = "footer__text";
  const footerSocialLinksClass = "footer__nav-links social-links";
  const footerSocialLinkClass = "social-links__link";
  const footerSocialLinkImgClass = "social-links__link-img";

  // texts
  const footerText = "© 2010 — 2020";
  const footerSpanText = "Privacy — Terms";
  const linkText = "";

  // links
  const navLinks = [
    {
      id: "home",
      href: "#home",
      text: "Home",
    },
    {
      id: "#about",
      href: "#about",
      text: "About",
    },
    {
      id: "logo",
      href: "#home",
      text: "",
    },
    {
      id: "services",
      href: "#services",
      text: "Services",
    },
    {
      id: "blogs",
      href: "#blogs",
      text: "Blogs",
    },
  ];

  const socialLinks = [
    {
      href: "https://www.facebook.com/",
      class: "facebook",
    },
    {
      href: "https://twitter.com/",
      class: "twitter",
    },
    {
      href: "https://www.instagram.com/",
      class: "instagram",
    },
    {
      href: "https://www.youtube.com/",
      class: "youtube",
    },
    {
      href: "https://pinterest.com/",
      class: "pinterest",
    },
  ];

  const rel = "noopener noreferrer nofollow";
  const target = "_blank";

  return (
    <>
      <footer className={footerContainerClass}>
        <nav className={footerNavClass}>
          <ul className={footerNavLinksClass}>
            {navLinks.map((link) => (
              <li className={footerNavLinkClass} key={link.id}>
                <a className={footerNavLinkTextClass} href={link.href}>
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
          <ul className={footerSocialLinksClass}>
            {socialLinks.map((link) => (
              <li className={footerSocialLinkClass} key={link.class}>
                <a
                  className={`${footerSocialLinkImgClass} ${link.class}`}
                  href={link.href}
                  target={target}
                  rel={rel}>
                  {linkText}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <p className={footerBotTextClass}>
          {footerText}
          <span>{footerSpanText}</span>
        </p>
      </footer>
    </>
  );
}
