import React, { useState } from "react";

function Slider() {
  let [num, setNumber] = useState(2);
  let [img, setImg] = useState(`https://picsum.photos/id/${num}/200/300`);

  function minus(e) {
    e.preventDefault();
    if (num > 1) {
      setNumber(num - 1);
      }
      if (num==1) {
        setNumber(3)
      }
  }

  function plus(e) {
    e.preventDefault();
      setNumber(num + 1);
      if (num>3) {
        setNumber(2)
      }
  }

  React.useEffect(() => {
    setImg(`https://picsum.photos/id/${num}/200/300`);
  }, [num]);

  return (
    <div className="flex ml-[40%]">
      <button className="text-5xl" onClick={minus}>
        -
      </button>
      <img src={img} alt="random" className="mx-4" />
      <button className="text-5xl" onClick={plus}>
        +
      </button>
    </div>
  );
}

export default Slider;
