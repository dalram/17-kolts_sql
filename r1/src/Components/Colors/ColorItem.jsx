import { useContext } from "react";
import ColorContext from "../../Contexts/ColorContext";


function Item({ color }) {
 const { setDeleteDataColors } = useContext(ColorContext);
  const handleDelete = () => {
    setDeleteDataColors(color);
  };
  return (
    <>
      <li>
        <div className="item">
          <div className="item-info">
            <p>{color.title}</p>
          </div>
          <div className="item-buttons">
            <button className="btn red-button" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      </li>
    </>
  );
}
export default Item;
