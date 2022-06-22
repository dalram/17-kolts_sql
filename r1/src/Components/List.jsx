import Item from "./Item";
// import ScootersData from "./ScootersData";

function List({ scooters, setDeleteData, setModalData, sortType }) {
  return (
    <>
      <div className="items">
        {/* <ScootersData scooters={scooters}></ScootersData> */}
        <div className="list-header">
          <h2>Scooters List</h2>
        </div>
        <div className="item-body">
          <ul className="items-group">
            {sortType === "1"
              ? scooters === null
                ? null
                : [...scooters]
                    .sort((a, b) => a.id - b.id)
                    .map((scooter) => (
                      <Item
                        scooter={scooter}
                        key={scooter.id}
                        setDeleteData={setDeleteData}
                        setModalData={setModalData}
                      ></Item>
                    ))
              : null}
            {sortType === "2"
              ? scooters === null
                ? null
                : [...scooters]
                    .sort(
                      (a, b) => a.totalRideKilometres - b.totalRideKilometres
                    )
                    .map((scooter) => (
                      <Item
                        scooter={scooter}
                        key={scooter.id}
                        setDeleteData={setDeleteData}
                        setModalData={setModalData}
                      ></Item>
                    ))
              : null}
            {sortType === "3"
              ? scooters === null
                ? null
                : [...scooters]
                    .sort((a, b) => {
                      if (a.lastUseTime > b.lastUseTime) return 1;
                      if (a.lastUseTime < b.lastUseTime) return -1;
                      return 0;
                    })
                    .map((scooter) => (
                      <Item
                        scooter={scooter}
                        key={scooter.id}
                        setDeleteData={setDeleteData}
                        setModalData={setModalData}
                      ></Item>
                    ))
              : null}
              
          </ul>
        </div>
      </div>
    </>
  );
}
export default List;
