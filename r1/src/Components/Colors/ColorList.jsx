import { useContext } from "react";
import ColorContext from "../../Contexts/ColorContext";
import ColorItem from "./ColorItem";

function ColorList() {
  const { colors } = useContext(ColorContext);
  return (
    <>
      <div className="list-box">
        <div className="items">
          <div className="list-header">
            <h2>Scooters color list</h2>
          </div>
          <div className="item-body">
            <ul className="items-group">
              {colors
                ? colors.map((color) => (
                    <ColorItem color={color} key={color.id}></ColorItem>
                  ))
                : null}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default ColorList;
