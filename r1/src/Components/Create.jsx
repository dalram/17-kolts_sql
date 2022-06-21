import { useContext } from "react";
import { useState } from "react";
import ScootersContext from "../Contexts/ScootersContext";
import getRegCode from "../Functions/getRegCode";


function Create() {
  const [regCode, setRegCode] = useState(getRegCode());
  const {setCreateData} = useContext(ScootersContext);
  const addScooter = () => {
    const obj = {
      regCode,
      isBusy: 0,
      lastUseTime: new Date(),
      totalRideKilometres: 0,
    };
    setCreateData(obj);
    console.log(obj.lastUseTime)
    setRegCode(getRegCode());
  };
  return (
    <>
      <div className="create-form">
        <span>New scooter registration code</span>
        <input
          type="text"
          value={regCode}
          onChange={(e) => setRegCode(e.target.value)}
        />
        <button className="btn addButton" onClick={addScooter}>
          Add scooter
        </button>
      </div>
    </>
  );
}

export default Create;
