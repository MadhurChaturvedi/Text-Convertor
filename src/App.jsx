import React from "react";
import Header from "./components/Header";

export default function App() {
  const header = {
    img: "https://purepng.com/public/uploads/large/purepng.com-orange-orangeorangefruitbitter-orangeorangesclip-art-1701527337098cr1i6.png",
  };
  const [text, setText] = React.useState("");
  function handleText(event) {
    setText(event.target.value);
  }

  function handleUppercase() {
    let newText = text.toUpperCase();
    setText(newText);
  }

  function handleLowerCase() {
    let newText = text.toLocaleLowerCase();
    setText(newText);
  }

  function handleClear() {
    setText("");
  }
  return (
    <div>
      <div className="container">
        <Header img={header.img} />
        <div className="form-group pt-14 ">
          <textarea
            onChange={handleText}
            className="form-control border-2 text-2xl placeholder:text-gray-500 p-3"
            id="exampleFormControlTextarea1"
            rows="7"
            placeholder="You can write the something here..."
            value={text}
          ></textarea>
        </div>
        <div className="flex items-center gap-5">
          <button
            type="button"
            className="btn btn-primary mt-4 p-4"
            onClick={handleUppercase}
          >
            UpperCase
          </button>

          <button
            type="button"
            className="btn btn-primary mt-4 p-4"
            onClick={handleLowerCase}
          >
            LowerCase
          </button>
          <button
            type="button"
            className="btn btn-primary mt-4 p-4"
            onClick={handleClear}
          >
            Clear Text
          </button>
        </div>
      </div>
    </div>
  );
}
