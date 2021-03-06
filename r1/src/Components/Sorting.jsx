import { useContext } from "react";
import ScootersContext from "../Contexts/ScootersContext";
import { scootersSort } from "../Functions/localStorage";

function Sorting() {
  const { setSortType, sortType } = useContext(ScootersContext);
  return (
    <>
      <div className="sorting-container">
      <div className="sort-header">
        <h2>Sorting Area</h2>
      </div>
      <div className="sort-item">
        <label className="sorting-label">Sort scooters by</label>
        <select
          className="sorting-form"
          onChange={(e) => {
            setSortType(e.target.value);
            scootersSort(e.target.value);
          }}
          value={sortType}
        >
          <option value="1">Without sorting</option>
          <option value="2">Distance traveled</option>
          <option value="3">Used date</option>
        </select>
        </div>
      </div>
    </>
  );
}
export default Sorting;

// <select className="sorting-form" onChange={e => setSortType(e.target.value)} value={sortType}>
