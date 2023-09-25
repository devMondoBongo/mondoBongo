/**
 * @typedef {import("@prismicio/client").Content.CarouselSilderSlice} CarouselSilderSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CarouselSilderSlice>} CarouselSilderProps
 * @param {CarouselSilderProps}
 */
const CarouselSilder = ({ slice }) => {
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
        >
            Placeholder component for carousel_silder (variation:{' '}
            {slice.variation}) Slices
        </section>
    );
};

export default CarouselSilder;
