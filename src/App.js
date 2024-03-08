import "./App.css";
import Accordion from "./components/accordian/Accordion";
import RandomColor from "./components/Random Color Generated/RandomColor";
import StarRating from "./components/Star Rating/Rating";
import ImageSlider from "./components/Image Slider/ImageSlider";
import LoadMoreData from "./components/load more data/LoadMoreData";
import TreeView from "./components/Tree View/TreeView";
import menus from "./components/Tree View/treeViewData";
import QRCodeGenerated from "./components/QR Code Generated/QRCodeGenerated";
import ThemeSwitcher from "./components/Theme Switcher/ThemeSwitcher";

function App() {
  return (
    <div className="App">
      {/* Accordion Project*/}
      {/* <Accordion /> */}

      {/* Random Color Generated Project */}
      {/* <RandomColor /> */}

      {/* Star Rating Project */}
      {/* <StarRating noOfStar={10} /> */}

      {/* Image Slider */}
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      /> */}

      {/* Load More Data */}
      {/* <LoadMoreData /> */}

      {/* Tree View UI Project */}
      {/* <TreeView menus={menus} /> */}

      {/* QR Code Generaated Project */}
      {/* <QRCodeGenerated /> */}

      {/* Theme Switcher */}
      <ThemeSwitcher />
    </div>
  );
}

export default App;
