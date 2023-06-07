// styles
import "../css/Blogs.css";

export default function Blogs() {
  // classes
  const blogsContainerClass = "blogs__container";
  const blogsTitlesClass = "blogs__titles";
  const blogsTitleClass = "blogs__title";
  const blogsSubtitleClass = "blogs__subtitle";
  const blogsPrimaryNewClass = "blogs__primary-new primary-new";
  const primaryNewImgClass = "primary-new__img";
  const primaryNewContentClass = "primary-new__content";
  const primaryNewAutorClass = "primary-new__autor";
  const primaryNewTitelClass = "primary-new__title";
  const primaryNewLinkClass = "primary-new__link link";

  const blogsCardsClass = "blogs__cards";
  const blogsCardClass = "blogs__card";
  const blogsCardTitleClass = "blogs__card-title";
  const blogsCardTextClass = "blogs__card-text";
  const blogsCardLinkClass = "blogs__card-link link";

  // texts
  const blogsTitleText = "Our Best Blogs Ever";
  const blogsSubtitleText =
    "“Try our blog to find the best tips and tricks to select your gift”";
  const primaryNewAutorText = "Mr. John Doe";
  const primaryNewTitelText = "The best way to wish your wife";
  const linkText = "Read More";

  const cards = [
    {
      id: "primary",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...",
      title: "Database to find the gifts for your girlfriend",
    },
    {
      id: "secondary",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...",
      title: "How Artificial Intelligence read your mind to find the best gift",
    },
  ];

  // id
  const blogsId = "blogs";

  // link
  const rel = "noopener noreferrer nofollow";
  const target = "_blank";
  const linksHref = "https://example.com/";

  return (
    <>
      <section className={blogsContainerClass} id={blogsId}>
        <div className={blogsTitlesClass}>
          <h2 className={blogsTitleClass}>{blogsTitleText}</h2>
          <p className={blogsSubtitleClass}>{blogsSubtitleText}</p>
        </div>
        <div className={blogsPrimaryNewClass}>
          <div className={primaryNewImgClass}></div>
          <div className={primaryNewContentClass}>
            <p className={primaryNewAutorClass}>{primaryNewAutorText}</p>
            <h3 className={primaryNewTitelClass}>{primaryNewTitelText}</h3>
            <a
              className={primaryNewLinkClass}
              href={linksHref}
              target={target}
              rel={rel}>
              {linkText}
            </a>
          </div>
        </div>
        <ul className={blogsCardsClass}>
          {cards.map((card) => (
            <li className={blogsCardClass} key={card.id} tabIndex="0">
              <h3 className={blogsCardTitleClass}>{card.title}</h3>
              <p className={blogsCardTextClass}>{card.text}</p>
              <a
                className={blogsCardLinkClass}
                href={linksHref}
                target={target}
                rel={rel}>
                {linkText}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
