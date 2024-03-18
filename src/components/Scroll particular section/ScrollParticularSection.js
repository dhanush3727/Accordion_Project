import { useRef } from "react";

const ScrollParticularSection = () => {
  const ref = useRef();
  const data = [
    {
      label: "First Card",
      style: {
        width: "100%",
        height: "600px",
        backgroundColor: "red",
      },
    },
    {
      label: "Second Card",
      style: {
        width: "100%",
        height: "600px",
        backgroundColor: "blue",
      },
    },
    {
      label: "Third Card",
      style: {
        width: "100%",
        height: "600px",
        backgroundColor: "orange",
      },
    },
    {
      label: "Fourth Card",
      style: {
        width: "100%",
        height: "600px",
        backgroundColor: "green",
      },
    },
    {
      label: "Fifth Card",
      style: {
        width: "100%",
        height: "600px",
        backgroundColor: "yellow",
      },
    },
  ];

  const handleScrollSection = () => {
    let position = ref.current.getBoundingClientRect().top;
    window.scrollTo({
      top: position,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <h1>Scroll Particular Section</h1>
      <button onClick={handleScrollSection}>Click to Scroll</button>
      {data.map((dataItem, index) => (
        <div ref={index + 1 === 2 ? ref : null} style={dataItem.style}>
          {dataItem.label}
        </div>
      ))}
    </div>
  );
};

export default ScrollParticularSection;
