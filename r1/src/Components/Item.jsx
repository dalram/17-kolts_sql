function Item({ scooter, setDeleteData, setModalData }) {
  
  const handleDelete = () => {
    setDeleteData(scooter);
  };

  const handleEdit = () => {
    setModalData(scooter);
  };
  // console.log(scooter.lastUseTime.toString());
  return (
    <>
      <li>
        <div className="item">
          <div className="item-info">
            <p>Reg code: {scooter.regCode}</p>
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
      </li>
    </>
  );
}
export default Item;
