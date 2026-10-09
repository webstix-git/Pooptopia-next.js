import Link from "next/link";

export function PageBanner({
  title,
  lede,
  crumb = title,
  image = "/images/team-arrival.webp",
  position = "center 40%",
}: {
  title: string;
  lede?: string;
  crumb?: string;
  image?: string;
  position?: string;
}) {
  return (
    <>
      <section
        className="page-banner"
        data-screen-label={`${title} banner`}
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.72) 32%, rgba(0, 0, 0, 0.28) 68%, rgba(0, 0, 0, 0.12) 100%), url("${image}")`,
          backgroundPosition: `center, ${position}`,
        }}
      >
        <div className="wrap page-banner-copy">
          <h1 className="titan">{title}</h1>
          {lede ? <p>{lede}</p> : null}
        </div>
      </section>
      <nav className="contact-crumb" aria-label="Breadcrumb">
        <div className="wrap">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span>{crumb}</span>
        </div>
      </nav>
    </>
  );
}
