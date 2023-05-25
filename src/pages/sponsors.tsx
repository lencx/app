import React from "react";

import "./sponsors.scss";

function SponsorsItem({ title, description }) {
  return (
    <div className="sponsors-item">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default function Sponsors() {
  return (
    <div className="sponsors-layout">
      <SponsorsItem
        title="ChatGPT-Powered Email Finding & Outreach at Scale"
        description={
          <>
            <a target="_blank" href="https://finalscout.com/?utm_source=github&utm_medium=lencx&utm_campaign=chatgpt">
              FinalScout
            </a>
            : Extract valid email addresses from LinkedIn & craft tailored
            emails based on LinkedIn profile with ChatGPT, guaranteeing up to
            98% email deliverability. Scale your outreach efforts and connect
            with potential customers or clients like never before.{" "}
            <a target="_blank" href="https://finalscout.com/?utm_source=github&utm_medium=lencx&utm_campaign=chatgpt">
              Begin automating your email finding and writing process
            </a>
          </>
        }
      />
    </div>
  );
}
