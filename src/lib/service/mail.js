import nodemailer from 'nodemailer';

/*
extract the necessary information
*/
export const emailConfig = {
    host: process.env.EMAIL_SERVER_HOST,
    port: process.env.EMAIL_SERVER_PORT,
    auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
    },
};

/*
Create transporter and verify connection configuration
*/
const transporter = nodemailer.createTransport(emailConfig);

transporter.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Server is ready to take our messages');
    }
});

/* send mail */
export const sendMail = async ({ from, html, subject, text, to }) => {
    // Build the data object used to send email
    const data = {
        from: from ?? process.env.EMAIL_FROM,
        to,
        subject,
        text,
        html,
    };
    // Use promise to catch err if promise is rejected
    await new Promise((resolve, reject) => {
        transporter.sendMail(data, (err, info) => {
            if (err) {
                console.log('Promise is rejected', err);
                reject(err);
            } else {
                console.log('SendMail is successfully executed.');
                resolve(info);
            }
        });
    });

    // process.env.NODE_ENV === 'development' && console.log(data)
};

export default transporter;
