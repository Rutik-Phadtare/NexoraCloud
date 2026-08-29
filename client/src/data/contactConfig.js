/**
 * Contact config
 * --------------
 * The assessment form doesn't call any backend or third-party
 * service. On submit, the visitor picks how they want to send it —
 * Gmail (web), Outlook (web), or their device's default mail app —
 * and we open that with everything pre-filled. Whichever they pick,
 * the email genuinely comes from their own inbox.
 *
 * Set the client's receiving address as an env var so it isn't
 * hardcoded — add this to your .env file (Vite):
 */
export const CONTACT_CONFIG = {
  clientEmail: import.meta.env.VITE_CLIENT_EMAIL || "rutikphadtare1234@gmail.com",
};

/**
 * Builds the shared subject/body content for an assessment request
 * from the raw form field values.
 */
function buildAssessmentContent(fields) {
  const subject = `Infrastructure Assessment Request — ${fields.company || "New Inquiry"}`;

  const body = [
    `Name: ${fields.name || "-"}`,
    `Company: ${fields.company || "-"}`,
    `Email: ${fields.email || "-"}`,
    `Phone: ${fields.phone?.trim() || "Not provided"}`,
    "",
    `Number of servers: ${fields.servers?.trim() || "Not provided"}`,
    `Linux distribution: ${fields.distro || "Not specified"}`,
    `AWS / on-premise: ${fields.environment || "Not specified"}`,
    `Number of locations: ${fields.locations?.trim() || "Not provided"}`,
    `Current monitoring system: ${fields.monitoring?.trim() || "Not provided"}`,
    "",
    "— Sent from the Free Infrastructure Assessment form",
  ].join("\n");

  return { to: CONTACT_CONFIG.clientEmail, subject, body };
}

/**
 * mailto: link — opens whatever the visitor's device has set as the
 * default mail handler (desktop Outlook, Apple Mail, etc).
 */
export function buildMailtoUrl(fields) {
  const { to, subject, body } = buildAssessmentContent(fields);
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/**
 * Gmail web compose — opens gmail.com in a new tab with the message
 * pre-filled, signed in as whichever Google account the visitor is
 * using in their browser.
 */
export function buildGmailComposeUrl(fields) {
  const { to, subject, body } = buildAssessmentContent(fields);
  const params = new URLSearchParams({
    view: "cm",
    fs: "1",
    to,
    su: subject,
    body,
  });
  return `https://mail.google.com/mail/?${params.toString()}`;
}

/**
 * Outlook web compose (outlook.live.com — personal Outlook/Hotmail
 * accounts). For Microsoft 365 work/school accounts the equivalent
 * deep link is https://outlook.office.com/mail/deeplink/compose
 */
export function buildOutlookComposeUrl(fields) {
  const { to, subject, body } = buildAssessmentContent(fields);
  const params = new URLSearchParams({
    to,
    subject,
    body,
  });
  return `https://outlook.live.com/mail/0/deeplink/compose?${params.toString()}`;
}