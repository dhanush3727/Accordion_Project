import "./App.css";
import Accordion from "./components/accordian/Accordion";
import RandomColor from "./components/Random Color Generated/RandomColor";
import StarRating from "./components/Star Rating/Rating";
import ImageSlider from "./components/Image Slider/ImageSlider";

function App() {
  return (
    <div className="App">
      {/* Accordion Project*/}
      <Accordion />
      {/* Random Color Generated Project */}
      <RandomColor />
      {/* Star Rating Project */}
      <StarRating />
      {/* Image Slider */}
      <ImageSlider />
    </div>
  );
}

export default App;
