import React, { useRef } from "react";

function Bar() {
    let progresBar = useRef();
    function add() {
        if (progresBar.current.offsetWidth>=500) {
            return
        }
        let width = progresBar.current.offsetWidth + 50;
        progresBar.current.style.width = width + "px";
    }
    function clear() {
        progresBar.current.style.width = "0px";
    }
  return (
    <div className="mt-20 ml-20 flex flex-col gap-6">
      <div className="w-[500px] relative">
        <hr className="absolute w-[500px] h-[10px] bg-gray-400" />
        <hr ref={progresBar} className="absolute trn h-[10px] bg-blue-500 w-0" />
      </div>
      <div>
        <button
          onClick={add}
          className="border py-2 px-4 bg-blue-400 text-white rounded-lg "
        >
          add
        </button>
        <button onClick={clear} className="border py-2 px-4 bg-blue-400 text-white rounded-xl">
          clear
        </button>
      </div>
    </div>
  );
}

export default Bar;
