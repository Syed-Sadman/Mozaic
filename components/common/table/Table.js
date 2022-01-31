import Separator from '../Separator';
import ProgressBar from '../ProgressBar';
import useWindowDimensions from '../../../hooks/useWindowDimension';


const Table = ({ titles, items }) => {

    const { height, width } = useWindowDimensions();
    const strategy = ["/assets/icons/tokens/strategy/ico.strategy.none.svg", "/assets/icons/tokens/strategy/ico.strategy.lending.svg", "/assets/icons/tokens/strategy/ico.strategy.staking.svg"]

    return (<>
        <Separator />
        <table>
            <colgroup>
                <col span="1" style={{ width: 30 + "%" }}></col>
                <col span="1" style={{ width: 25 + "%" }}></col>
                <col span="1" style={{ width: 15 + "%" }}></col>
                <col span="1" style={{ width: 15 + "%" }}></col>
                <col span="1" style={{ width: 15 + "%" }}></col>
            </colgroup>

            <tr>
                {titles.map((title) =>
                    <th key={title.id}>
                        <div>
                            <p className="table-header table-title tc-s">{title.name}</p>
                        </div>
                    </th>
                )}

            </tr>
            {items.map((item) =>
                <>
                    <tr key={item.id}>
                        <td>
                            <div className="table-body token-name">
                                <img src={item.icoSrc} alt="" />
                                <p>{item.name}</p>
                            </div>
                        </td>
                        <td>
                            <div className="table-body">
                                <p>{item.allocation}%</p>
                                {width > 620 && <ProgressBar />}
                            </div>
                        </td>
                        <td>
                            <div className="table-body">
                                <p>${item.price}</p>
                            </div>
                        </td>
                        <td>
                            <div className="table-body">
                                <p>{item.apy}</p>
                            </div>
                        </td>
                        <td>
                            <div className="table-body">
                                <img src={strategy[item.strategy]} alt="" />
                            </div>
                        </td>
                    </tr>
                    <Separator />

                </>

            )}

        </table>
        <Separator />
        <style jsx>
            {`
                table {
                    width: 100%;
                    border-collapse: collapse;
                }

                .table-body .token-name {
                    flex-direction: ${width < 620 ? "column" : "row"};
                    flex-direction: row;
                }

                td, th {
                    text-align: left;
                }

                .table-header {
                    padding-left: 30px;
                    height: 70px;
                    display: flex;
                    align-items: center;
                }
                
                 .table-body {
                    padding-left: 30px;
                    height: 80px;
                    display: flex;
                    align-items: center;
                }

                .table-body :first-child {
                    margin-right: 16px;
                }

                th {
                    height: 77px;
                }

                tr {
                    width: 100%;
                }

                td {
                    background-color: rgba(255, 255, 255, 0.068);
                    border: none;
                }

                tr:hover {
                    background-color: rgba(255, 255, 255, 0.096);
                }

                .token-name {
                    font-weight: bold;
                }

                .table-title {
                    font-size: smaller;
                }

            `}
        </style>
    </>);
}

export default Table;