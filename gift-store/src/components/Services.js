// stylew
import "../css/Services.css";

export default function Services() {
  // classes
  const sectionContainerClass = "services__container";
  const sectionTitlesClass = "section__titles";
  const sectionTitleClass = "section__title";
  const sectionSubtitleClass = "section__subtitle";
  const sectionCardsClass = "section__cards";
  const sectionCardClass = "section__card";
  const sectionCardImgClass = "section__card-img";
  const sectionCardContentBoxClass = "section__card content-box";
  const sectionCardTitleClass = "content-box__title";
  const sectionCardLinkClass = "content-box__link link";

  // texts
  const sectionTitleText = "Gifts for all Occasions";
  const sectionSubtitleText =
    "“Try our web app to find the best gifts for all occasions”";
  const cardTitlesText = [
    { id: "birthday", text: "Birthday" },
    { id: "anniversary", text: "Anniversary" },
    { id: "valentines", text: "Valentine's Day" },
    { id: "christmas", text: "Christmas" },
  ];
  const cardLinkText = "See More ›";

  // id
  const sectionId = "services";

  // link
  const rel = "noopener noreferrer nofollow";
  const target = "_blank";
  const linksHref = "https://example.com/";

  return (
    <>
      <section className={sectionContainerClass} id={sectionId}>
        <div className={sectionTitlesClass}>
          <h2 className={sectionTitleClass}>{sectionTitleText}</h2>
          <p className={sectionSubtitleClass}>{sectionSubtitleText}</p>
        </div>
        <ul className={sectionCardsClass}>
          {cardTitlesText.map((card) => (
            <li className={sectionCardClass} key={card.id} tabIndex="0">
              <div className={`${sectionCardImgClass} ${card.id}`}></div>
              <div className={sectionCardContentBoxClass}>
                <h3 className={sectionCardTitleClass}>{card.text}</h3>
                <a
                  className={sectionCardLinkClass}
                  href={linksHref}
                  target={target}
                  rel={rel}>
                  {cardLinkText}
                </a>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
