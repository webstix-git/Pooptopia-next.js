import { InfoPage } from "@/components/InfoPage";

export function AiPolicyPage() {
  return (
    <InfoPage
      title="AI Policy"
      lede="How Pooptopia handles visits, follow-up, and the photographs on this website."
    >
      <article className="policy-sheet">
        <header className="policy-sheet-head">
          <h2>Pooptopia AI Policy</h2>
          <p className="policy-rev">Last updated October 9, 2026</p>
        </header>
        <p>
          This policy explains what is done by our team and what is not handed to an automated
          stand-in. It covers a visit to your yard, a reply to your note, and the photographs on
          pooptopia.dog.
        </p>
        <ol className="policy-sections">
          <li>
            <strong>People do the visit.</strong>
            <p>
              A Pooptopia visit is done by our team. Two people detail the yard, sanitize sticky spots
              as they go, haul the waste away, and send a photo confirming the gate is secured. An
              automated system does not replace that visit, and it does not decide whether we take a
              yard.
            </p>
          </li>
          <li>
            <strong>A person reads your note.</strong>
            <p>
              When you call, email, or submit a New Service Request, a person from Pooptopia follows
              up. We do not send an automated reply in place of that conversation.
            </p>
          </li>
          <li>
            <strong>Photographs are ours.</strong>
            <p>
              Photographs of yards, visits, and the family on this website are Pooptopia photographs.
              We do not present a generated image as a photograph of your yard or of our team.
            </p>
          </li>
          <li>
            <strong>Questions.</strong>
            <p>
              Questions about this policy can be sent to{" "}
              <a href="mailto:admin@pooptopia.dog">admin@pooptopia.dog</a>.
            </p>
          </li>
        </ol>
      </article>
    </InfoPage>
  );
}
