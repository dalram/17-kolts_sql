import { useContext } from "react";
import FrontContext from "../../Contexts/FrontContext";
import Item from "./Item";

function List() {
  const { colors } = useContext(FrontContext);
  return (
    <>
    <div className="list-container">
      <div className="list-box-front">
        {/* <div className="items"> */}
          <div className="list-header">
            <h2>List of scooter colors</h2>
          </div>
          <div className="item-body">
            <ul className="items-group">
              {colors
                ? colors.map((color) => (
                    <Item color={color} key={color.id}></Item>
                  ))
                : null}
            </ul>
          </div>
        {/* </div> */}
      </div>
      </div>
    </>
  );
}
export default List;