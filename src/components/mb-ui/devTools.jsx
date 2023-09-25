export function DevTools() {
    return (
        <>
            {process.env.NODE_ENV === 'development' && (
                <div
                    style={{
                        background: '#5163ba',
                        padding: '1rem',
                        textAlign: 'center',
                        fontSize: '0.85rem',
                        color: '#fff',
                    }}
                >
                    <p>
                        <strong>👋 Dev mode.</strong>
                        <span> | </span>
                        <span>CMS: </span>
                        <span className=" font-bold ">prismic</span>
                        <span> | </span>
                        <span>size: </span>
                        <span>
                            <span className="inline font-bold sm:hidden">
                                xs
                            </span>
                            <span className="hidden font-bold sm:inline md:hidden">
                                sm
                            </span>
                            <span className="hidden font-bold md:inline lg:hidden">
                                md
                            </span>
                            <span className="hidden font-bold lg:inline xl:hidden">
                                lg
                            </span>
                            <span className="hidden font-bold xl:inline 2xl:hidden">
                                xl
                            </span>
                            <span className="hidden font-bold 2xl:inline">
                                2xl
                            </span>
                        </span>
                    </p>
                </div>
            )}
        </>
    );
}
