import React from "react";
import Tabs from "./Tabs";

const TabsText = () => {
  const tabs = [
    {
      label: "Tab 1",
      content: <div>This is content for tab one</div>,
    },
    {
      label: "Tab 2",
      content: <div>This is content for tab two</div>,
    },
    {
      label: "Tab 3",
      content: <div>This is content for tab three</div>,
    },
  ];

  const handleChange = (currentTabIndex) => {
    console.log(currentTabIndex);
  };
  return (
    <div>
      <Tabs tabsContent={tabs} onChange={handleChange} />
    </div>
  );
};

export default TabsText;
