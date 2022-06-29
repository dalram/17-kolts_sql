import { useContext } from "react";
import { useState } from "react";
import FrontContext from "../../Contexts/FrontContext";
function ScooterItem({ scooter }) {
  const { setCreateComment } = useContext(FrontContext);
  const [comment, setComment] = useState("");
  const handleComment = () => {
    console.log(scooter);
    setCreateComment({ comment, koltId: scooter.id });
    setComment("");
  };
  return (
    <>
      <li>
        <div className="item-scooter">
          <div className="item-front">
            <p>{scooter.regCode}</p>
            <i>({scooter.color})</i>
            {scooter.isBusy ? (
              <p style={{ color: "green" }}>
                Scooter is free, you can book it!
              </p>
            ) : (
              <p style={{ color: "crimson" }}>Scooter is booked!</p>
            )}
          </div>
          <div className="item-comment">
            <label>Leave review about scooter</label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
          </div>
          <div className="item-buttons">
            <button className="btn" onClick={handleComment}>
              Add comment
            </button>
          </div>
          <div className="comments">
            <ul>
              {scooter.comments
                ? scooter.comments
                    .slice(0, -5)
                    .split("-^o^-,")
                    .map((com, i) => <li key={i}>{com}</li>)
                : null}
            </ul>
          </div>
        </div>
      </li>
    </>
  );
}
export default ScooterItem;
