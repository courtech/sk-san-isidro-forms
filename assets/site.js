// Every downloadable file. key -> {t: title, f: path in files/ without extension, s: preview slug, n: pages, docx: has Word}
const DOCS = {
  checklist:  {t:"Fidelity Bond Checklist", f:"fidelity-bond/Fidelity Bond Checklist (Renewal and New-Expired)", s:"fidelity-bond-checklist-renewal-and-new-expired", n:2, docx:1},
  fbaf:       {t:"FBAF (official BTr form)", f:"fidelity-bond/FBAF - Fidelity Bond Application Form (official BTr, fillable)", s:"fbaf-fidelity-bond-application-form-official-btr-fillable", n:2, docx:0},
  bonded:     {t:"List of Bonded Accountable Public Officers", f:"fidelity-bond/List of Bonded Accountable Public Officers - TEMPLATE", s:"list-of-bonded-accountable-public-officers-template", n:1, docx:1},
  rippe:      {t:"RIPPE / RIDPE (Property & Equipment)", f:"fidelity-bond/RIPPE-RIDPE - Inventory of Property and Equipment - TEMPLATE", s:"rippe-ridpe-inventory-of-property-and-equipment-template", n:1, docx:1},
  ripsm:      {t:"RIPSM / RIDSM (Supplies & Materials)", f:"fidelity-bond/RIPSM-RIDSM - Inventory of Supplies and Materials - TEMPLATE", s:"ripsm-ridsm-inventory-of-supplies-and-materials-template", n:1, docx:1},
  email:      {t:"Sample Email to BTr", f:"fidelity-bond/Sample Email to BTr - Fidelity Bond Renewal", s:"sample-email-to-btr-fidelity-bond-renewal", n:1, docx:1},
  kk:         {t:"KK Assembly Attendance Sheet", f:"planning/KK Assembly Attendance Sheet - CBYDP-ABYIP - TEMPLATE", s:"kk-assembly-attendance-sheet-cbydp-abyip-template", n:2, docx:1},
  cbydp:      {t:"CBYDP 2027–2029", f:"planning/CBYDP 2027-2029 - TEMPLATE", s:"cbydp-2027-2029-template", n:2, docx:1},
  rescbydp:   {t:"Resolution Approving the CBYDP", f:"planning/Resolution - Approving CBYDP 2027-2029 - TEMPLATE", s:"resolution-approving-cbydp-2027-2029-template", n:2, docx:1},
  abyip:      {t:"ABYIP 2027", f:"planning/ABYIP 2027 - TEMPLATE", s:"abyip-2027-template", n:2, docx:1},
  resabyip:   {t:"Resolution Approving the ABYIP", f:"planning/Resolution - Approving ABYIP 2027 - TEMPLATE", s:"resolution-approving-abyip-2027-template", n:2, docx:1},
  budget:     {t:"SK Annual Budget 2027", f:"planning/SK Annual Budget 2027 - TEMPLATE", s:"sk-annual-budget-2027-template", n:2, docx:1},
  plantilla:  {t:"Plantilla of SK Officials", f:"planning/Plantilla of SK Officials 2027 - TEMPLATE", s:"plantilla-of-sk-officials-2027-template", n:1, docx:1},
  resbudget:  {t:"Resolution Approving the SK Annual Budget", f:"planning/Resolution - Approving SK Annual Budget 2027 - TEMPLATE", s:"resolution-approving-sk-annual-budget-2027-template", n:2, docx:1},
  pad:        {t:"PAD – Project Activity Design", f:"planning/PAD - Project Activity Design - TEMPLATE", s:"pad-project-activity-design-template", n:2, docx:1},
  sbcover:    {t:"Cover Page", f:"supplemental/01 Cover Page - TEMPLATE", s:"01-cover-page-template", n:1, docx:1},
  sbletter:   {t:"Letter to the Sangguniang Bayan", f:"supplemental/02 Letter to Sangguniang Bayan - TEMPLATE", s:"02-letter-to-sangguniang-bayan-template", n:1, docx:1},
  sbrev:      {t:"Resolution – Reversion of Funds", f:"supplemental/03 Resolution - Reversion of Funds - TEMPLATE", s:"03-resolution-reversion-of-funds-template", n:2, docx:1},
  sbressbyip: {t:"Resolution – Approving the SBYIP", f:"supplemental/04 Resolution - Approving the SBYIP - TEMPLATE", s:"04-resolution-approving-the-sbyip-template", n:2, docx:1},
  sbressb:    {t:"Resolution – Approving the Supplemental Budget", f:"supplemental/05 Resolution - Approving the Supplemental Budget - TEMPLATE", s:"05-resolution-approving-the-supplemental-budget-template", n:2, docx:1},
  sbyip:      {t:"SBYIP", f:"supplemental/06 SBYIP - Supplemental Barangay Youth Investment Program - TEMPLATE", s:"06-sbyip-supplemental-barangay-youth-investment-program-template", n:1, docx:1},
  sb:         {t:"Supplemental Budget", f:"supplemental/07 Supplemental Budget - TEMPLATE", s:"07-supplemental-budget-template", n:1, docx:1},
  sbcert:     {t:"Treasurer Certification – Funds Available", f:"supplemental/08 Treasurer Certification - Funds Available - TEMPLATE", s:"08-treasurer-certification-funds-available-template", n:1, docx:1},
  skcc:       {t:"SKCC – SK Chairperson Certificate", f:"bank/SKCC - SK Chairperson Certificate - TEMPLATE", s:"skcc-sk-chairperson-certificate-template", n:1, docx:1},
  crf:        {t:"LandBank Customer Request Form (CRF)", f:"bank/LandBank Customer Request Form (CRF) - official", s:"landbank-customer-request-form-crf-official", n:2, docx:0},
  bankreq:    {t:"Request for Bank Statement", f:"bank/Request for Bank Statement - LandBank - TEMPLATE", s:"request-for-bank-statement-landbank-template", n:1, docx:1},
  rcb:        {t:"RCB – Register of Cash in Bank (COA Annex 6)", f:"full-disclosure/RCB - Register of Cash in Bank (COA Annex 6) - TEMPLATE", s:"rcb-register-of-cash-in-bank-coa-annex-6-template", n:1, docx:1},
  prlist:     {t:"Monthly Itemized List of PRs (NYC Annex E)", f:"full-disclosure/Monthly Itemized List of Purchase Requests - official NYC Annex E", s:"monthly-itemized-list-of-purchase-requests-official-nyc-annex-e", n:2, docx:1},
  po:         {t:"PO – Purchase Order (COA Annex 15)", f:"liquidation/PO - Purchase Order (COA Annex 15) - TEMPLATE", s:"po-purchase-order-coa-annex-15-template", n:1, docx:1},
  iar:        {t:"IAR – Inspection and Acceptance Report (COA Annex 16)", f:"liquidation/IAR - Inspection and Acceptance Report (COA Annex 16) - TEMPLATE", s:"iar-inspection-and-acceptance-report-coa-annex-16-template", n:1, docx:1},
  dv:         {t:"DV – Disbursement Voucher (COA Annex 7)", f:"liquidation/DV - Disbursement Voucher (COA Annex 7) - TEMPLATE", s:"dv-disbursement-voucher-coa-annex-7-template", n:1, docx:1},
  lr:         {t:"LR – Liquidation Report (COA Annex 9)", f:"liquidation/LR - Liquidation Report (COA Annex 9) - TEMPLATE", s:"lr-liquidation-report-coa-annex-9-template", n:1, docx:1},
  brs:        {t:"BRS – Bank Reconciliation Statement (COA Annex 30)", f:"liquidation/BRS - Bank Reconciliation Statement (COA Annex 30) - TEMPLATE", s:"brs-bank-reconciliation-statement-coa-annex-30-template", n:1, docx:1},
  qsrp:       {t:"QSRP – Quarterly Statement of Receipts and Payments (COA Annex 31)", f:"liquidation/QSRP - Quarterly Statement of Receipts and Payments (COA Annex 31) - TEMPLATE", s:"qsrp-quarterly-statement-of-receipts-and-payments-coa-annex-31-template", n:2, docx:1},
  kkmc:       {t:"DILG MC 2022-033 – KK Profiling (official memo)", f:"kk-profiling/DILG MC 2022-033 - KK Profiling (official, with annexes)", s:"dilg-mc-2022-033-kk-profiling-official-with-annexes", n:9, docx:0},
  kkletter:   {t:"Annex 1 – Letter to the Punong Barangay", f:"kk-profiling/Annex 1 - Letter to Punong Barangay - TEMPLATE", s:"annex-1-letter-to-punong-barangay-template", n:1, docx:1},
  kkconsent:  {t:"Annex 2 – Informed Consent", f:"kk-profiling/Annex 2 - Informed Consent - TEMPLATE", s:"annex-2-informed-consent-template", n:1, docx:1},
  kksurvey:   {t:"Annex 3 – KK Survey Questionnaire (official)", f:"kk-profiling/Annex 3 - KK Survey Questionnaire (official)", s:"annex-3-kk-survey-questionnaire-official", n:1, docx:0},
  kkprofile:  {t:"Annex 4 – KK Youth Profile (list of all youth)", f:"kk-profiling/Annex 4 - KK Youth Profile - TEMPLATE", s:"annex-4-kk-youth-profile-template", n:1, docx:1, xlsx:1},
  transmittal:{t:"Transmittal Letter to the SB", f:"planning/Transmittal Letter - ABYIP & Annual Budget to SB - TEMPLATE", s:"transmittal-letter-abyip-annual-budget-to-sb-template", n:1, docx:1},
};

const fileUrl = p => "files/" + p.split("/").map(encodeURIComponent).join("/");
const DL = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12m0 0-5-5m5 5 5-5M4 21h16"/></svg>';
const buttons = d => `${d.docx ? `<a class="btn word" href="${fileUrl(d.f + ".docx")}" download>${DL}<span>Word</span></a>` : ""}${d.xlsx ? `<a class="btn word" href="${fileUrl(d.f + ".xlsx")}" download>${DL}<span>Excel</span></a>` : ""}<a class="btn" href="${fileUrl(d.f + ".pdf")}" download>${DL}<span>PDF</span></a>`;

document.querySelectorAll("[data-doc]").forEach(el => {
  const k = el.dataset.doc, d = DOCS[k];
  el.className = "doc";
  el.innerHTML = `
    <button class="prev" type="button" data-open="${k}" aria-label="Preview ${d.t}">
      <img src="previews/${d.s}-thumb.jpg" alt="" loading="lazy"><span class="hint">Tap to preview${d.n > 1 ? ` · ${d.n} pages` : ""}</span>
    </button>
    <div class="meta"><b>${d.t}</b><div class="dl">${buttons(d)}</div></div>`;
});

// lightbox
const lb = document.createElement("div");
lb.className = "lb";
lb.innerHTML = `<div class="lb-bar"><b></b><span class="lb-btns" style="display:flex;gap:6px"></span><button class="lb-close" type="button" aria-label="Close">×</button></div><div class="lb-pages"></div>`;
document.body.appendChild(lb);
const close = () => { lb.classList.remove("open"); document.body.classList.remove("noscroll"); };
document.addEventListener("click", e => {
  const o = e.target.closest("[data-open]");
  if (o) {
    const d = DOCS[o.dataset.open];
    lb.querySelector("b").textContent = d.t;
    lb.querySelector(".lb-btns").innerHTML = buttons(d);
    lb.querySelector(".lb-pages").innerHTML = Array.from({length: d.n}, (_, i) => `<img src="previews/${d.s}-p${i + 1}.jpg" alt="${d.t}, page ${i + 1}">`).join("");
    lb.querySelector(".lb-pages").scrollTop = 0;
    lb.classList.add("open"); document.body.classList.add("noscroll");
    return;
  }
  const im = e.target.closest("[data-img]");
  if (im) {
    lb.querySelector("b").textContent = im.dataset.cap || "";
    lb.querySelector(".lb-btns").innerHTML = "";
    lb.querySelector(".lb-pages").innerHTML = `<img style="max-width:min(1600px,100%)" src="${im.dataset.img}" alt="${im.dataset.cap || ""}">`;
    lb.querySelector(".lb-pages").scrollTop = 0;
    lb.classList.add("open"); document.body.classList.add("noscroll");
    return;
  }
  if (e.target.closest(".lb-close") || e.target === lb || e.target.classList.contains("lb-pages")) close();
});
document.addEventListener("keydown", e => { if (e.key === "Escape") close(); });
