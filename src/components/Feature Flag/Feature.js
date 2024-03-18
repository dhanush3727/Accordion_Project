import React, { useContext } from "react";
import Accordion from "../accordian/Accordion";
import RandomColor from "../Random Color Generated/RandomColor";
import Tabs from "../Tabs/Tabs";
import ThemeSwitcher from "../Theme Switcher/ThemeSwitcher";
import Game from "../Tic Tac Toe/Game";
import FeatureContext from "./context/FeatureFlagContext";

const Feaature = () => {
  const { loading, enableFlags } = useContext(FeatureContext);
  const componentsToRender = [
    {
      key: "showThemeSwitcher",
      compontent: <ThemeSwitcher />,
    },
    {
      key: "showGame",
      compontent: <Game />,
    },
    {
      key: "showColorGenerated",
      compontent: <RandomColor />,
    },
  ];

  if (loading) {
    return <h1>Loading Data! Please Wait</h1>;
  }

  const checkComponent = (getComponent) => {
    return enableFlags[getComponent];
  };
  return (
    <div className="Feature-container">
      <h1>Feature Flag</h1>
      {componentsToRender.map((item) =>
        checkComponent(item.key) ? item.compontent : null
      )}
    </div>
  );
};

export default Feaature;
