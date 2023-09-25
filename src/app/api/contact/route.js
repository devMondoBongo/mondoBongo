import { NextResponse } from 'next/server';

import { html, subject, text } from '@/lib/email-templates/newContactRequest';
import { sendMail } from '@/lib/service/mail';

const host = process.env.NEXT_PUBLIC_SITE_URL;

export async function POST(request) {
    const body = await request.json();
    console.log('body:', body);
    try {
        console.log('in try catch of route.js');
        if (!body) {
            return NextResponse.json(
                { message: 'No data to send' },
                { status: 400 },
            );
        }
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
