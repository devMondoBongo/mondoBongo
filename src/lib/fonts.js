import {
    JetBrains_Mono as FontMono,
    Inter as FontSans,
    Lora as FontSerif,
} from 'next/font/google';

export const fontSans = FontSans({
    subsets: ['latin'],
    variable: '--font-sans',
});

export const fontMono = FontMono({
    subsets: ['latin'],
    variable: '--font-mono',
});

export const fontSerif = FontSerif({
    subsets: ['latin'],
    variable: '--font-serif',
});
