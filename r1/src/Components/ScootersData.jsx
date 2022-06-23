import { useContext } from "react";
import ScootersContext from "../Contexts/ScootersContext";

function ScootersData() {
  const { scooters } = useContext(ScootersContext);
  return (
    <>
      <div>
        <h2 className="data-header">Basic scooters data</h2>
        <ul>
          <li>
            <div className="item">
              <div className="item-info">
                <p>
                  Count of scooters:{" "}
                  {scooters === null ? null : scooters.length}
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="item">
              <div className="item-info">
                <p>
                  Count of kilometres traveled:{" "}
                  {scooters === null
                    ? null
                    : scooters
                        .reduce(
                          (total, item) => total + +item.totalRideKilometres,
                          0
                        )
                        .toFixed(2)}
                </p>
                {/* veikia po recuderio toFixed(2) */}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default ScootersData;

// scooters === null ? null : (scooters.reduce((total, item) => (total + +(+item.totalRideKilometres).toPrecision(4)), 0)).toFixed(2) // veikia geriau
