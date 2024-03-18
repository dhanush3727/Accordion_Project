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
import ScrollIndicator from "./components/Scroll Indicator/ScrollIndicator";
import TabsText from "./components/Tabs/TabsText";
import ModalPopUp from "./components/Modal Popups/ModalPopUp";
import Profile from "./components/Github Profile/Profile";
import Game from "./components/Tic Tac Toe/Game";
import { FeatureFlag } from "./components/Feature Flag/context/FeatureFlagContext";
import Feature from "./components/Feature Flag/Feature";
import Test from "./components/useFetch/Test";
import UseOnClickOutSideTest from "./components/UseOutside Click/test";
import UseWindowResizeTest from "./components/Use Windows Resize/test";
import ScrollWindow from "./components/scroll to top and bottom/ScrollWindow";
import ScrollParticularSection from "./components/Scroll particular section/ScrollParticularSection";

function App() {
  return (
    <div className="App">
      {/* Scroll Indicator */}
      {/* <ScrollIndicator /> */}

      {/* Accordion Project*/}
      <Accordion />

      {/* Random Color Generated Project */}
      <RandomColor />

      {/* Star Rating Project */}
      <StarRating noOfStar={10} />

      {/* Image Slider */}
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />

      {/* Load More Data */}
      <LoadMoreData />

      {/* Tree View UI Project */}
      <TreeView menus={menus} />

      {/* QR Code Generaated Project */}
      <QRCodeGenerated />

      {/* Theme Switcher */}
      <ThemeSwitcher />

      {/* Custom Tabs Project */}
      <TabsText />

      {/* Modal Popups */}
      <ModalPopUp />

      {/* Profile Finder */}
      <Profile />

      {/* Tic Tac Toe Project*/}
      <Game />

      {/* Feature Flag Implement */}
      <FeatureFlag>
        <Feature />
      </FeatureFlag>

      {/* useFetch Custom Hook */}
      <Test />

      {/* use onclick outside hook */}
      <UseOnClickOutSideTest />

      {/* Windows Size */}
      <UseWindowResizeTest />

      {/* Scroll Window */}
      <ScrollWindow />

      {/* Scroll Particular Section */}
      <ScrollParticularSection />
    </div>
  );
}

export default App;
