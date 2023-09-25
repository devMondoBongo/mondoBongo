/**
 * @typedef {import("@prismicio/client").Content.HeroParallaxSlice} HeroParallaxSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroParallaxSlice>} HeroParallaxProps
 * @param {HeroParallaxProps}
 */
const HeroParallax = ({ slice }) => {
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
        >
            Placeholder component for hero_parallax (variation:{' '}
            {slice.variation}) Slices
        </section>
    );
};

export default HeroParallax;
