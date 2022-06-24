import { useContext } from "react";


function Item({ color }) {
  // const { setDeleteData} = useContext(ScootersContext);
  const handleDelete = () => {
    // setDeleteData(scooter); // color
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
