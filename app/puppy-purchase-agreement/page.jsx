"use client";

import "./page.css";

export default function PuppyPurchaseAgreementPage() {
  return (
    <div className="contract--page">
      <div className="contract--header">
        <h1 className="contract--title">Puppy Purchase Agreement</h1>
        <a
          href="/puppy-purchase-agreement.pdf"
          download="Clarot_Kennel_Puppy_Purchase_Agreement.pdf"
          className="contract--download-btn"
        >
          Download PDF
        </a>
      </div>
      <div className="contract--viewer">
        <iframe
          src="/puppy-purchase-agreement.pdf"
          title="Puppy Purchase Agreement"
          className="contract--iframe"
        />
      </div>
    </div>
  );
}
