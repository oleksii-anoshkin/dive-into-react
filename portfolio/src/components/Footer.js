import "../css/Footer.css";

export default function Footer() {
  // classes
  const containerClass = "max-container footer";
  const sectionTitleClass = "footer__title title-text";
  const sectionItemsClass = "footer__items";
  const sectionItemClass = "footer__item";
  const sectionItemLinkClass = "footer__link link-text";
  const sectionArrowBoxClass = "footer__arrow";
  const sectionArrowClass = "material-symbols-outlined link-text";

  // id
  const sectionId = "contact";
  const headerId = "header";

  // attributes
  const rel = "noopener noreferrer nofollow";
  const targetBlank = "_blank";
  const targetSelf = "_self";
  const mailKey = "mail";
  const telKey = "tel";

  // texts
  const sectionTitleText = "Get in Touch";
  const arrowText = "expand_less";

  // links
  const footerItems = [
    {
      id: "services",
      links: [
        { id: "dribbble", href: "https://dribbble.com/", text: "Dribbble" },
        { id: "behance", href: "https://www.behance.net/", text: "Behance" },
        { id: "codePen", href: "https://codepen.io/", text: "CodePen" },
        { id: "gitHub", href: "https://github.com/", text: "GitHub" },
        { id: "medium", href: "https://medium.com/", text: "Medium" },
      ],
    },
    {
      id: "social",
      links: [
        { id: "LinkedIn", href: "https://linkedin.com/", text: "LinkedIn" },
        {
          id: "Facebook",
          href: "https://facebook.com/",
          text: "Facebook",
        },
        {
          id: "Instagram",
          href: "https://www.instagram.com/",
          text: "Instagram",
        },
        { id: "Twitter", href: "https://twitter.com/", text: "Twitter" },
      ],
    },
    {
      id: "contacts",
      links: [
        {
          id: "mail",
          href: "mailto:seyrig@mailme.com",
          text: "seyrig@mailme.com",
        },
        { id: "tel", href: "tel:+556645665544", text: "+ 55 6645 665544" },
      ],
    },
  ];

  return (
    <>
      <footer className={containerClass} id={sectionId}>
        <h2 className={sectionTitleClass}>{sectionTitleText}</h2>
        <nav>
          <ul className={sectionItemsClass}>
            {footerItems.map((item) => (
              <li className={sectionItemClass} key={item.id}>
                {item.links.map((link) => (
                  <a
                    className={sectionItemLinkClass}
                    key={link.id}
                    href={link.href}
                    rel={rel}
                    target={
                      link.id === mailKey || link.id === telKey
                        ? targetSelf
                        : targetBlank
                    }>
                    {link.text}
                  </a>
                ))}
              </li>
            ))}
          </ul>
        </nav>
        <div className={sectionArrowBoxClass}>
          <a className={sectionArrowClass} href={`#${headerId}`}>
            {arrowText}
          </a>
        </div>
      </footer>
    </>
  );
}
