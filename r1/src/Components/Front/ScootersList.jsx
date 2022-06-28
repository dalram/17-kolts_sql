import { useContext } from "react";
import FrontContext from "../../Contexts/FrontContext";
import ScooterItem from "./ScooterItem";


function ScootersList() {
  const { scooters } = useContext(FrontContext);
  return (
    <>
      <div className="list-box">
        <div className="items">
          <div className="list-header">
            <h2>Scooters list</h2>
            <p>Choose your favorite and book now!</p>
          </div>
          <div className="item-body">
            <ul className="items-group">
              {scooters
                ? scooters.map((scooter) => (
                    <ScooterItem scooter={scooter} key={scooter.id}></ScooterItem>
                  ))
                : null}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default ScootersList;