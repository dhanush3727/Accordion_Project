import React, { useState } from "react";
import "./Tabs.css";

const Tabs = ({ tabsContent, onChange }) => {
  const [currentTab, setCurrentTab] = useState(0);
  const handleOnClick = (getCurrentIndex) => {
    setCurrentTab(getCurrentIndex);
    onChange(getCurrentIndex);
  };
  return (
    <div className="wrapper">
      <div className="heading">
        {tabsContent.map((tabItem, index) => (
          <div
            className={`tab-item ${
              currentTab === index ? "active" : "inactive"
            }`}
            key={tabItem.label}
            onClick={() => handleOnClick(index)}
          >
            <span className="label">{tabItem.label}</span>
          </div>
        ))}
      </div>
      <div className="content" style={{ color: "red" }}>
        {tabsContent[currentTab] && tabsContent[currentTab].content}
      </div>
    </div>
  );
};

export default Tabs;
