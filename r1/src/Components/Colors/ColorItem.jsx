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
            <i>({color.scooters_count})</i>
          </div>
          <div className="item-buttons">
            <button className="btn red-button" style={{display: color.scooters_count ? 'none' : 'inline-block'}} onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      </li>
    </>
  );
}
export default Item;
