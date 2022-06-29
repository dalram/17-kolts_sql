import { useContext } from "react";
import { useState } from "react";
import FrontContext from "../../Contexts/FrontContext";
function ScooterItem({ scooter }) {
  const { setCreateComment, setIsBusy } = useContext(FrontContext);
  const [comment, setComment] = useState("");
  const [notBusy, setNotBusy] = useState(0);
  const handleComment = () => {
    console.log(scooter);
    setCreateComment({ comment, koltId: scooter.id });
    setComment("");
  };
  const handleBooking = () => {
    if (notBusy) {
      setIsBusy({...scooter, isBusy: 1});
    } else {
      return;
    }
  };
  return (
    <>
      <li>
        <div className="item-scooter">
          <div className="item-front">
            <p>{scooter.regCode}</p>
            <i>({scooter.color})</i>
            {scooter.isBusy ? (
              <p style={{ color: "crimson" }}>Scooter is booked!</p>
            ) : (
              <p style={{ color: "green" }}>
                Scooter is free, you can book it!
              </p>
            )}
          </div> {
            scooter.isBusy ? null :
            <div className="item-front">
                <span>Check and click for booking!</span>
                <input
                  type="checkbox"
                  checked={notBusy}
                  onChange={(e) => setNotBusy(notBusy ? 0 : 1)}
                />
                <button className="btn orange-button" onClick={handleBooking}>Book scooter!</button>
              </div>
          }
          
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
