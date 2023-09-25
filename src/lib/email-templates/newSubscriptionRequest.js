// html version

// Subject
const subject = (host) =>
    `${host} | Nouvelle demande d'adhésion à la newsletter `;

const html = (emailToAdd) => `
<body>
    <p>Bonjour! une nouvelle demande d'adhésion à la newsletters vient dêtre envoyée.</p>
    <p>Voila l'adresse à ajouter: ${emailToAdd}</p>
    <p>Cet e-mail est envoyé automatiquement depuis votre site web (via l'adresse ${process.env.EMAIL_FROM})</p>
</body>
`;
// text version
const text = (emailToAdd) => `
Bonjour! une nouvelle demande d'adhésion à la newsletters vient dêtre envoyée.
Voila l'adresse à ajouter: ${emailToAdd}
Cet e-mail est envoyé automatiquement depuis votre site web (via l'adresse ${process.env.EMAIL_FROM})
`;

export { html, text, subject };
