/**
 * @typedef {import("@prismicio/client").Content.FeatureFocusSlice} FeatureFocusSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FeatureFocusSlice>} FeatureFocusProps
 * @param {FeatureFocusProps}
 */
const FeatureFocus = ({ slice }) => {
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
        >
            Placeholder component for feature_focus (variation:{' '}
            {slice.variation}) Slices
        </section>
    );
};

export default FeatureFocus;
