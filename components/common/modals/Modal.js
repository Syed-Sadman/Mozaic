const Modal = ({ title = "title", closeModal, w = "300px", children }) => {



    const handleModal = (e) => {
        if (e.target.classList.contains("overlay") || e.target.classList.contains("btn-close")) {
            closeModal(false);
            console.log("modal closed");
        }
    }

    const connectWallet = () => {
        console.log("Wallet Connect");
        closeModal(false);
    }

    return (
        <>
            <div className="overlay" onClick={handleModal}>
                <div className="modal-container">
                    <div className="modal-header">
                        <img className="btn-close" onClick={handleModal} src="/assets/icons/ico.close.svg" alt="" />
                        <h3 className="ff-1 fs-xl">{title}</h3>
                    </div>
                    <div className="modal-body">
                        {children}
                    </div>
                </div>
            </div>

            <style jsx>
                {`
                    .overlay {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        top: 0;
                        left: 0;
                        position: fixed;
                        height: 100vh;
                        width: 100vw;
                        background-color: rgba(0, 0, 0, 0.432);
                        z-index: 999995;
                    }

                    .modal-container {
                        position: relative;
                        padding: 24px;
                        width: ${w};
                        background: linear-gradient(261.36deg, #25212b, #25212b) padding-box,
                            linear-gradient(332.19deg, #f8e099 0.94%, rgba(0, 0, 0, 0) 80.79%)
                            border-box;
                        border: 1px solid transparent;
                        border-radius: 15px;
                    }

                    .modal-header {
                        margin-top: 12;
                        margin-bottom: 36px;
                        text-align: center;
                        color: white;
                    }
                `}
            </style>
        </>);
}

export default Modal;