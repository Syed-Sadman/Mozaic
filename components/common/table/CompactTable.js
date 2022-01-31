import ProgressBar from '../ProgressBar';
import Separator from '../Separator';
const CompactTable = ({ items }) => {
    return (<>
        <div className="table">
            {items.map((item) =>
                <>
                    <div key={item.id} className="table-item" >
                        <div className="table-body token-name">
                            <img src={item.icoSrc} alt="" />
                            <div>
                                <p className="t-b tc-p">{item.name}</p>
                                <div className="allocation">
                                    <p>{item.allocation}%</p>
                                    <ProgressBar />
                                </div>
                            </div>
                        </div>
                        <div className="table-body token-details">
                            <p className="t-b">${item.price}</p>
                            <p>{item.apy}</p>
                        </div>
                    </div>
                    <Separator />
                </>
            )}
        </div>
        <style jsx>
            {`
            .table {
                box-sizing: border-box;
                width: 100%;
                background-color: rgba(255, 255, 255, 0.103);
            }

            .table-item {
                box-sizing: border-box;
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: 80px;
                width: 100%;
                padding: 24px;
            }

            .table-item:hover {
                background-color: rgba(255, 255, 255, 0.103);

            }

            .token-name {
                display: flex;
                min-width: 60%;
                align-items: center;
            }

            .token-name img {
                height: 56px;
                margin-right: 16px;
            }

            .allocation {
                display: flex;
                flex-direction: row;
                min-width: 120px;
                width: max-content;
                justify-content: start;
                align-items: center;
            }

            .allocation :first-child {
                margin-right: 16px;
            }

            .token-details {
                text-align: right;
                justify-content: end;
                width: 20%;
            }

            `}
        </style>
    </>);
}

export default CompactTable;