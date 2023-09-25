/**
 * @typedef {import("@prismicio/client").Content.CallToActionSlice} CallToActionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CallToActionSlice>} CallToActionProps
 * @param {CallToActionProps}
 */
const CallToAction = ({ slice }) => {
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
        >
            Placeholder component for call_to_action (variation:{' '}
            {slice.variation}) Slices
        </section>
    );
};

export default CallToAction;
