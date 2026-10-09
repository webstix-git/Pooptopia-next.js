import Link from "next/link";
import { serviceAreas } from "@/lib/site";

export function ServiceArea({ showFullLink = false }: { showFullLink?: boolean }) {
  return (
    <section id="area" className="area" data-screen-label="Service Area">
      <div className="wrap area-layout band-pad">
        <div className="area-copy">
          <span className="eyebrow">Service Area</span>
          <h2 className="titan">
            Local
            <br />
            coverage
            <br />
            across
            <br />
            <em className="em">Kenosha.</em>
          </h2>
          <p>
            Based in Kenosha, WI, our routes cover Kenosha County, Racine County, and Walworth
            County in Wisconsin, plus Lake County in Illinois.
          </p>
          <p>
            Don&apos;t see your town? Ask. We reconfigure routes regularly and may already be on
            your street.
          </p>
          {showFullLink ? (
            <div className="btn-row">
              <Link className="section-btn" href="/about/service-area">
                See every town in our service area
              </Link>
            </div>
          ) : null}
        </div>
        <div className="area-side">
          <ul className="area-counties">
            {serviceAreas.map((area) => (
              <li key={area.county}>
                <strong>{area.county}</strong>
                <span>{area.state}</span>
              </li>
            ))}
          </ul>
          <ul className="area-pills">
            {serviceAreas.flatMap((area) =>
              area.towns.map((town) => <li key={town}>{town}</li>),
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}
