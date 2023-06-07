// styles
import "../css/Hero.css";

export default function Hero() {
  // classes
  const containerClass = "hero__container";
  const heroContentBoxClass = "hero__content";
  const heroBgBoxClass = "hero__bg";
  const heroTitleClass = "hero__title";
  const heroSubtitleClass = "hero__subtitle";
  const heroBtnClass = "hero__bnt orange-btn";

  // texts
  const heroTitleText = "Find a gift for your wife or girlfriend";
  const heroSubtitleText =
    "Struggling to find a gift for your wife or girlfriend? No problem!";
  const heroBtnText = "Find gift now";

  // link
  const linkHref = "https://example.com/";
  const rel = "noopener noreferrer nofollow";
  const target = "_blank";

  return (
    <>
      <section className={containerClass}>
        <div className={heroContentBoxClass}>
          <h1 className={heroTitleClass}>{heroTitleText}</h1>
          <p className={heroSubtitleClass}>{heroSubtitleText}</p>
          <a className={heroBtnClass} href={linkHref} target={target} rel={rel}>
            {heroBtnText}
          </a>
        </div>
        <div className={heroBgBoxClass}></div>
      </section>
    </>
  );
}
