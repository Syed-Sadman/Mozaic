const Separator = () => {
    return (
        <>
            <div id="separator"></div>
            <style jsx>
                {`
                #separator {
                    height: 1px;
                    width: 100%;
                    background: linear-gradient(90.04deg, rgba(250, 193, 17, 0.13) -1.13%, rgba(250, 193, 17, 0.530156) 47.87%, rgba(250, 193, 17, 0.03) 100.03%);
                }
            `}
            </style>
        </>
    );
}

export default Separator;

