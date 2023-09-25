import { NextResponse } from 'next/server';

import { html, subject, text } from '@/lib/email-templates/newContactRequest';
import { sendMail } from '@/lib/service/mail';
import { subscribe } from '@/lib/service/subscribe';

const host = process.env.NEXT_PUBLIC_SITE_URL;

export async function POST(request) {
    const body = await request.json();
    try {
        if (!body.email) {
            return NextResponse.json(
                { message: 'No data to send' },
                { status: 400 },
            );
        }
        // Create contact info
        // Brevo listIds must be an array
        let arrayListIds;
        if (!Array.isArray(body.listIds)) {
            arrayListIds = [body.listIds];
        } else {
            // When several checkbox are checked, the value of checkbox is already an array
            arrayListIds = body.listIds;
        }
        await subscribe({
            listIds: arrayListIds,
            email: body.email,
            attributes: body.attributes,
        });
        await sendMail({
            from: process.env.EMAIL_FROM,
            subject: subject(host),
            html: html(host, body),
            text: text(host, body),
            to: process.env.EMAIL_TO,
        });
        return NextResponse.json(
            { message: '👍 Votre message est envoyé !' },
            { status: 200 },
        );
    } catch (err) {
        return NextResponse.json(
            { error: 'Failed to send message.' },
            { status: 500 },
        );
    }
}
