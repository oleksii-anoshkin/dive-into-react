// styles
import "../css/About.css";

export default function About() {
  // classes
  const containerClass = "about__container";
  const aboutContentBoxClass = "about__content";
  const aboutBgBoxClass = "about__bg";
  const aboutTitleClass = "about__title";
  const aboutTextClass = "about__text";
  const aboutBtnClass = "about__bnt light-orange-btn";

  // texts
  const aboutTitleText = "How we work";
  const aboutText =
    "We’ve actually already asked hundreds of women what they want, and made a database with the results. All you have to do is take our short survey that only takes seconds, and our proprietary algorithm will match you with a few perfect gift options.";
  const aboutBtnText = "Learn More";

  // link
  const linkHref = "https://example.com/";
  const rel = "noopener noreferrer nofollow";
  const target = "_blank";

  // id
  const sectionId = "about";

  return (
    <>
      <section className={containerClass} id={sectionId}>
        <div className={aboutContentBoxClass}>
          <h2 className={aboutTitleClass}>{aboutTitleText}</h2>
          <p className={aboutTextClass}>{aboutText}</p>
          <a
            className={aboutBtnClass}
            href={linkHref}
            target={target}
            rel={rel}>
            {aboutBtnText}
          </a>
        </div>
        <div className={aboutBgBoxClass}></div>
      </section>
    </>
  );
}
