import React, { useRef } from "react";

function Valid() {
  let nameRef = useRef();
  let emailRef = useRef();
  function save(e) {
    e.preventDefault();
    if (nameRef.current.value.length < 3) {
      alert("bunday ism bolishi munkun emas");
      return;
    }
    let email = emailRef.current.value;
    if (!email.includes("@") || !email.includes(".") || email.length < 5) {
      alert("bunday email bolishi munkun emas");
      return;
    }
    let user = {
      nameRef: nameRef.current.value,
      emailRef: emailRef.current.value,
    };
    console.log(user);
  }
  return (
    <div className="container mx-auto w-full max-w-md p-6 bg-white shadow-md rounded-md mt-10">
      <form className="flex flex-col gap-4">
        <div>
          <input
            type="text"
            placeholder="Ism kiriting"
            ref={nameRef}
            className="w-full px-4 py-2 border rounded-md  "
          />
        </div>

        <div>
          <input
            type="email"
            placeholder="Email kiriting"
            ref={emailRef}
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>

        <button
          onClick={save}
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default Valid;
