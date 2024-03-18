import { useRef } from "react";
import UseFetch from "../useFetch/UseFetch";

const ScrollWindow = () => {
  const bottomRef = useRef(null);
  const { data, error, pending } = UseFetch({
    url: "https://dummyjson.com/products?limit=100",
  });

  if (error) {
    return <h3>Some Error Occured</h3>;
  }

  if (pending) {
    return <h3>Loading Data! Please Wait</h3>;
  }

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleScrollToBottom = () => {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <h1>Scroll to Top and Bottom</h1>
      <button onClick={handleScrollToBottom}>Scroll to Bottom</button>
      <ul style={{ listStyle: "none" }}>
        {data && data.products && data.products.length
          ? data.products.map((item) => <li>{item.title}</li>)
          : null}
      </ul>
      <div ref={bottomRef}></div>
      <button style={{ marginBottom: "30px" }} onClick={handleScrollToTop}>
        Scroll to Top
      </button>
    </div>
  );
};

export default ScrollWindow;
