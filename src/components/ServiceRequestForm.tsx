"use client";

import { useEffect } from "react";

const CONTAINER_ID = "c2c3283b-1fee-4b15-b250-b85c50bb9940-1695918";
const STYLESHEET =
  "https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css";
const SCRIPT =
  "https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js";
const FORM_URL =
  "https://clienthub.getjobber.com/client_hubs/c2c3283b-1fee-4b15-b250-b85c50bb9940/public/work_request/embedded_work_request_form?form_id=1695918";

export function ServiceRequestForm() {
  useEffect(() => {
    const root = document.getElementById(CONTAINER_ID);
    if (!root || root.dataset.loaded === "true") return;
    root.dataset.loaded = "true";

    if (!document.getElementById("jobber-work-request-css")) {
      const link = document.createElement("link");
      link.id = "jobber-work-request-css";
      link.rel = "stylesheet";
      link.href = STYLESHEET;
      link.media = "screen";
      document.head.appendChild(link);
    }

    const script = document.createElement("script");
    script.src = SCRIPT;
    script.setAttribute("clienthub_id", CONTAINER_ID);
    script.setAttribute("form_url", FORM_URL);
    document.body.appendChild(script);
  }, []);

  return <div id={CONTAINER_ID} className="request-form" />;
}
