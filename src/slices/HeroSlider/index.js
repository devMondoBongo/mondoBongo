/**
 * @typedef {import("@prismicio/client").Content.HeroSliderSlice} HeroSliderSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSliderSlice>} HeroSliderProps
 * @param {HeroSliderProps}
 */
const HeroSlider = ({ slice }) => {
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
        >
            Placeholder component for hero_slider (variation: {slice.variation})
            Slices
        </section>
    );
};

export default HeroSlider;
