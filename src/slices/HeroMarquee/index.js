/**
 * @typedef {import("@prismicio/client").Content.HeroMarqueeSlice} HeroMarqueeSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroMarqueeSlice>} HeroMarqueeProps
 * @param {HeroMarqueeProps}
 */
const HeroMarquee = ({ slice }) => {
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
        >
            Placeholder component for hero_marquee (variation: {slice.variation}
            ) Slices
        </section>
    );
};

export default HeroMarquee;
