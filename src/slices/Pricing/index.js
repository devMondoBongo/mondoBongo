/**
 * @typedef {import("@prismicio/client").Content.PricingSlice} PricingSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<PricingSlice>} PricingProps
 * @param {PricingProps}
 */
const Pricing = ({ slice }) => {
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
        >
            Placeholder component for pricing (variation: {slice.variation})
            Slices
        </section>
    );
};

export default Pricing;
