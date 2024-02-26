import React from "react";
import { useState } from "react";
import data from "./data";
import "./style.css";

const Accordion = () => {
  const [select, setSelect] = useState(null);
  const [multiSelection, setMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);
  const handleSingleSelection = (id) => {
    setSelect(id === select ? null : id);
    let copyMultiple = [...multiple];
    const findIndexOfId = copyMultiple.indexOf(id);
    // console.log(findIndexOfId);
    if (findIndexOfId === -1) {
      copyMultiple.push(id);
    } else {
      copyMultiple.splice(findIndexOfId, 1);
    }
    setMultiple(copyMultiple);
  };
  return (
    // Single Selection
    <div className="wrapper">
      <button onClick={() => setMultiSelection(!multiSelection)}>
        Enable Multiple Selection
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div
              onClick={() => handleSingleSelection(dataItem.id)}
              className="item"
            >
              <div className="title">
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {multiSelection
                ? multiple.indexOf(dataItem.id) !== -1 && (
                    <div className="content">{dataItem.answer}</div>
                  )
                : select === dataItem.id && (
                    <div className="content">{dataItem.answer}</div>
                  )}
              {/* {select === dataItem.id ? (
                <div className="content">{dataItem.answer}</div>
              ) : null} */}
            </div>
          ))
        ) : (
          <div>No Data Found</div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
