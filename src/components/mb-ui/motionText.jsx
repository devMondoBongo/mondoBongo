import { motion } from 'framer-motion';

// List of tags allowed
const tagMap = {
    paragraph: 'p',
    span: 'span',
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
};

function Wrapper({ children }) {
    // We'll do this to prevent wrapping of words using CSS
    return <span className="inline-block">{children}</span>;
}

export function MotionText({ text, delay = 0, duration = 0.05, as = 'h1' }) {
    //  Split each word of text into an array
    const splitWords = text.split(' ');

    // Create storage array
    const words = [];

    // Push each word into words array
    Array.from(splitWords).map((splitWord, index) =>
        words.push(splitWord.split('')),
    );
    // Add a space ("\u00A0") to the end of each word
    words.map((word) => word.push('\u00A0'));

    // Define variants for motion
    const sentenceVariant = {
        hidden: {
            opacity: 0,
        },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: duration, delayChildren: i * delay },
        }),
    };

    const letterVariant = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 200,
                bounce: 0.4,
                duration: 0.8,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 200,
                bounce: 0.4,
                duration: 0.8,
            },
        },
    };

    // Get the tag name from tagMap
    const Tag = tagMap[as];

    return (
        <Tag className="ml-6 text-center text-8xl font-bold text-current">
            <motion.span
                variants={sentenceVariant}
                initial="hidden"
                viewport={{ once: true }}
                whileInView="visible"
            >
                {words.map((word, index) => (
                    <Wrapper key={index}>
                        {words[index].flat().map((letter, index) => (
                            <motion.span key={index} variants={letterVariant}>
                                {letter}
                            </motion.span>
                        ))}
                    </Wrapper>
                ))}
            </motion.span>
        </Tag>
    );
}
