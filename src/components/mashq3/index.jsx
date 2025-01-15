import React, { useRef } from "react";

function Modal() {
  const modalRef = useRef(null); 
  const bodyRef = useRef(document.body); 

  function toggleModal(e) {
    e.preventDefault();
    if (
      modalRef.current.style.display === "none" ||
      modalRef.current.style.display === ""
    ) {
      modalRef.current.style.display = "block"; 
      bodyRef.current.style.backgroundColor = "rgba(0, 0, 0, 0.5)"; 
    } else {
      modalRef.current.style.display = "none"; 
      bodyRef.current.style.backgroundColor = ""; 
    }
  }

  return (
    <div>
      <button
        onClick={toggleModal}
        className="p-3 bg-blue-900 justify-center flex ml-[50%] mt-[20%] rounded-xl"
      >
        Open Modal
      </button>

      <div
        ref={modalRef}
        className="w-80 h-60 bg-slate-950 ml-[40%] -mt-20 p-5 rounded-xl"
        style={{ display: "none" }} 
      >
        <h2 className="text-white text-5xl ml-20">Modal</h2>
        <button
          onClick={toggleModal}
          className="mt-10 ml-24 p-2 bg-red-500 text-white rounded-md"
        >
          Close Modal
        </button>
      </div>
    </div>
  );
}

export default Modal;
