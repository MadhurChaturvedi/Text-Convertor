import React from "react";
import Header from "./components/Header";

export default function App() {
  const header = {
    img: "https://purepng.com/public/uploads/large/purepng.com-orange-orangeorangefruitbitter-orangeorangesclip-art-1701527337098cr1i6.png",
  };
  const [text, setText] = React.useState("");
  const [color, setColor] = React.useState("#ff0000");
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

  function changeColor(event) {
    setColor(event.target.value);
  }

  const PrintFirstLetter = () => {
    text.split(" ");
    for (let i = 0; i < text.length; i++) {
      let firstLetter = text[i][0];
      setText(firstLetter);
    }
  };

  return (
    <div>
      <div className="container">
        <Header img={header.img} />
        <div className="form-group pt-14 ">
          <textarea
            onChange={handleText}
            style={{ color: color }}
            className={`form-control border-2 text-2xl placeholder:text-gray-500 p-3 font-mono`}
            id="exampleFormControlTextarea1"
            rows="7"
            placeholder="You can write the something here..."
            value={text}
          ></textarea>
        </div>
        <div className="flex-row gap-3 md:flex items-center gap-5">
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
          <button
            type="button"
            className="btn btn-warning mt-4 p-4"
            onClick={PrintFirstLetter}
          >
            PrintFirstLetter
          </button>
          <button
            type="button"
            className="btn btn-primary mt-4 p-4 flex items-center flex-col gap-2"
          >
            <input
              type="color"
              id="favcolor"
              name="favcolor"
              // value="#ff0000"
              onChange={changeColor}
              value={color}
            />
            Color Picker
          </button>
        </div>
        <div className="mt-6">
          <h1 className="h1"> {text.split(" ").length}</h1>
          <h1 className="h1"> {0.008 * text.split(" ").length}</h1>
        </div>
      </div>
    </div>
  );
}
