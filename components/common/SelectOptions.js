const SelectOptions = ({ type = "dropdown", options = [], selectedVal, setSelectedVal }) => {

    const selectOptHandler = (e) => {
        setSelectedVal(e.target.value);
    }

    return (
        <>
            {type === "dropdown" &&
                <select className="select-container" >
                    {options.map((option) =>
                        <option key={option.id} value={option.value} selected={selectedVal === option.value}>{option.name}</option>
                    )}
                </select>}
            {type === "range" &&
                <div className="select-container range">
                    {options.map((option) =>
                        <>
                            <button key={option.id} onClick={selectOptHandler} value={option.value} className={option.value === selectedVal && "active"} >{option.name}</button>
                            <div className="separator"></div>
                        </>
                    )}
                </div>
            }
        </>
    );
}

export default SelectOptions;