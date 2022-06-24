import { useContext } from "react";
import { useState } from "react";
import ColorContext from "../../Contexts/ColorContext";

function ColorCreate() {
  const { setCreateDataGoods } = useContext(ColorContext);
  const [title, setTitle] = useState("");
  const addColor = () => {
    const obj = { title };
    setCreateDataGoods(obj);
    setTitle("");
  };
  return (
    <>
      <div className="createForm">
        <h2>Create scooter color</h2>
        <div className="formGroup">
          <input
            className="regCodeInput"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <small className="color-small">Enter scooter color here</small>
          <div>
            <button className="btn addButton" onClick={addColor}>
              Add scooter color
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ColorCreate;
