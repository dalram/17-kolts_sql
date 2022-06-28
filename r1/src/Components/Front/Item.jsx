
function Item({ color }) {
  return (
    <>
      <li>
        <div className="item-colors">
          <div className="list-group">
            <p>{color.title}</p>
          </div>
          <ul className="list-group">
            {color.scooters_regCode
              ? color.scooters_regCode.split(",").map((scooter, i) => (
                  <li key={i} className="list-group-item">
                    {scooter}
                  </li>
                ))
              : null}
          </ul>
        </div>
      </li>
    </>
  );
}
export default Item;
