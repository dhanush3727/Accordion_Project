import "./App.css";
import Accordion from "./components/accordian/Accordion";
import RandomColor from "./components/Random Color Generated/RandomColor";
import StarRating from "./components/Star Rating/Rating";
import ImageSlider from "./components/Image Slider/ImageSlider";
import LoadMoreButton from "./components/load more button/LoadMoreButton";

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

      {/* Load More Button */}
      <LoadMoreButton />
    </div>
  );
}

export default App;
