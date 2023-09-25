// html version

// Subject
const subject = (host) =>
    `${host} | Nouvelle demande d'adhésion à la newsletter `;

const html = (body) => `
<body>
    <p>Bonjour! une nouvelle demande d'adhésion à la newsletters vient dêtre envoyée.</p>
    <p>Voila le contenu:</p>
    <p>${body.username}</p>
    <p>Cet e-mail est envoyé automatiquement depuis votre site web (via l'adresse ${process.env.EMAIL_FROM})</p>
</body>
`;
// text version
const text = (body) => `
Bonjour! une nouvelle demande d'adhésion à la newsletters vient dêtre envoyée.
Voila le contenu: ${body.username}
Cet e-mail est envoyé automatiquement depuis votre site web (via l'adresse ${process.env.EMAIL_FROM})
`;

export { html, text, subject };
