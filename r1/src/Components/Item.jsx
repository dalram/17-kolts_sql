import { useContext } from "react";
import ScootersContext from "../Contexts/ScootersContext";

function Item({ scooter }) {
  const { setDeleteData, setModalData, setDeleteCom } = useContext(ScootersContext);
  const handleDelete = () => {
    setDeleteData(scooter);
  };

  const handleEdit = () => {
    setModalData(scooter);
  };

  const handleComment = (i) => {
    setDeleteCom(scooter.coms_id.split(',')[i]);
  };
 
  return (
    <>
      <li>
        <div className="item">
          <div className="item-info">
            <p>Reg code: {scooter.regCode}</p>
            <p style={{ color: `${scooter.color}` }}>
              Color: {scooter.color ? scooter.color : null}
            </p>
            <p>Is busy: {scooter.isBusy ? "Busy!" : "Free!"}</p>
            <p>Last use date: {scooter.lastUseTime}</p>
            <p>Total ride distance in km: {scooter.totalRideKilometres}</p>
          </div>
          <div className="item-buttons">
            <button className="btn" onClick={handleEdit}>
              Edit
            </button>
            <button className="btn red-button" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
        <div className="back-comments">
          <h3>Comments about scooter</h3>
            <ul className="back-comments-list">
              {scooter.comments
                ? scooter.comments
                    .slice(0, -5)
                    .split("-^o^-,")
                    .map((com, i) => <li key={i} className="back-comment"><p>{com}</p> <button className="btn red-button" onClick={() => handleComment(i)}>
                    Delete comment
                  </button></li>)
                : null}
            </ul>
          </div>
      </li>
    </>
  );
}
export default Item;
