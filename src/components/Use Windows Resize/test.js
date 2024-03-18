import UseWindowResize from "./UseWindowSize";

const UseWindowResizeTest = () => {
  const windowSize = UseWindowResize();
  const { width, height } = windowSize;
  return (
    <div>
      <h1>Use Window Resize</h1>
      <p>width is {width}</p>
      <p>height is {height}</p>
    </div>
  );
};

export default UseWindowResizeTest;
