import { useContext } from "react";
import { useEffect, useState } from "react";
import ScootersContext from "../Contexts/ScootersContext";

function Modal() {
  const [isBusy, setIsBusy] = useState(0);
  const [lastUseTime, setLastUseTime] = useState("");
  const [distance, setDistance] = useState(0);
  const [color, setColor] = useState(0);
  const { setEditData, modalData, setModalData, colors } = useContext(ScootersContext);
  
  const handleEdit = () => {
    const data = {
      id: modalData.id,
      regCode: modalData.regCode,
      isBusy: isBusy ? 1 : 0,
      lastUseTime,
      totalRideKilometres: (+modalData.totalRideKilometres + +distance).toFixed(
        2
      ),
      color,
    };
    setEditData(data);
    // setIsBusy(0);
    // setLastUseTime('');
    setDistance(0);
    setModalData(null);
  };
  useEffect(() => {
    if (null === modalData) {
      return;
    }
    console.log(modalData);
    setIsBusy(modalData.isBusy);
    setLastUseTime("");
    setDistance("");
    setColor(colors.filter(c => modalData.color === c.title)[0]?.id ?? 0)
  }, [modalData]);
  if (null === modalData) {
    return null;
  }

  return (
    <>
      <div className="modalBackground">
        <div className="modalContainer">
          <div className="titleCloseBtn">
            <button onClick={() => setModalData(null)}>X</button>
          </div>
          <div className="title">
            <h2>Scooters {modalData.regCode} Editor</h2>
          </div>
          <div className="modalForm">
            <form>
              <div className="formGroup">
                <small>Scooter registration code</small>
                <input
                  type="text"
                  value={modalData.regCode}
                  onChange={(e) => modalData.regCode}
                />
              </div>
              <div className="formGroup">
                <small>Check if scooter is busy</small>
                <input
                  type="checkbox"
                  checked={isBusy ? 1 : 0}
                  onChange={(e) => setIsBusy(isBusy ? 0 : 1)}
                />
              </div>
              <div className="formGroup">
            <small>Scooter color</small>
            <select
          className="create-color"
          onChange={(e) => {
            setColor(e.target.value)
          }}
          value={color}
        >
          <option value="0" disabled>Select Color</option>
          {
            colors ? colors.map(color => <option key={color.id} value={color.id}>{color.title}</option>) : null
          }
        </select>
          </div>
              <div className="formGroup">
                <small>Last time used</small>
                <input
                  type="date"
                  value={modalData.lastUseTime}
                  onChange={(e) => modalData.lastUseTime}
                />
              </div>
              <div className="formGroup">
                <small>Update last used time</small>
                <input
                  type="date"
                  value={lastUseTime}
                  onChange={(e) => setLastUseTime(e.target.value)}
                />
              </div>
              <div className="formGroup">
                <small>Total kilometres made</small>
                <input
                  type="number"
                  value={modalData.totalRideKilometres}
                  onChange={(e) => modalData.totalRideKilometres}
                />
              </div>
              <div className="formGroup">
                <small>Traveled distance today</small>
                <input
                  type="number"
                  value={distance}
                  min={0}
                  onChange={(e) =>
                    setDistance(e.target.value < 0 ? 0 : e.target.value)
                  }
                />
              </div>

              {/* visus inputus reik padaryt kontroliuojamus! */}
            </form>
          </div>

          <div className="modalButtons">
            <button onClick={handleEdit}>Save changes</button>
            <button className="red-button" onClick={() => setModalData(null)}>
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
