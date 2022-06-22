import { useContext } from "react";
import { useState } from "react";
import ScootersContext from "../Contexts/ScootersContext";
import getRegCode from "../Functions/getRegCode";

function Create() {
  const [isBusy, setIsBusy] = useState(0);
  const [lastUseTime, setLastUseTime] = useState("");
  const [distance, setDistance] = useState(0);
  const [regCode, setRegCode] = useState(getRegCode());
  const { setCreateData } = useContext(ScootersContext);
  const addScooter = () => {
    const obj = {
      regCode,
      isBusy: isBusy,
      lastUseTime: lastUseTime,
      totalRideKilometres: distance,
    };
    setCreateData(obj);
    setIsBusy(0);
    setLastUseTime("");
    setRegCode(getRegCode());
    setDistance(0);
  };
  return (
    <>
      <div className="createForm">
        <h2>Create new scooter</h2>
        <div className="formGroup">
          <span>New scooter registration code</span>
          <input
            className="regCodeInput"
            type="text"
            value={regCode}
            onChange={(e) => setRegCode(e.target.value)}
          />
          <div className="formGroup">
            <span>Check if scooter is busy</span>
            <input
              type="checkbox"
              checked={isBusy ? 1 : 0}
              onChange={(e) => setIsBusy(isBusy ? 0 : 1)}
            />
          </div>
          <div className="formGroup">
            <span>Update last used time</span>
            <input
              type="date"
              value={lastUseTime}
              onChange={(e) => setLastUseTime(e.target.value)}
            />
          </div>
          <div className="formGroup">
            <span>Traveled distance today</span>
            <input
              type="number"
              value={distance}
              min={0}
              onChange={(e) =>
                setDistance(e.target.value < 0 ? 0 : e.target.value)
              }
            />
          </div>
          <div>
            <button className="btn addButton" onClick={addScooter}>
              Add scooter
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Create;
