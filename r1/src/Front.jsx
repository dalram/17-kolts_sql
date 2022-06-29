import { useEffect, useState } from "react";
import axios from "axios";
import FrontContext from "./Contexts/FrontContext";
import List from "./Components/Front/List";
import ScootersList from "./Components/Front/ScootersList";
function Front() {
  const [colors, setColors] = useState(null);
  const [scooters, setScooters] = useState(null);
  const [createComment, setCreateComment] = useState(null)
  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [isBusy, setIsBusy] = useState(null);
  const [message, setMessage] = useState(null);
  useEffect(() => {
    axios.get("http://localhost:3003/front/spalvos").then((res) => {
      // console.log(res.data);
      setColors(res.data);
    });
  }, [lastUpdate]);
  useEffect(() => {
    axios.get("http://localhost:3003/front/scooters").then((res) => {
      // console.log(res.data);
      setScooters(res.data);
    });
  }, [lastUpdate]);
    useEffect(() => {
        if (null === createComment) return;
        axios.post('http://localhost:3003/front/comments', createComment)
          .then(_ => {
            setLastUpdate(Date.now());
          })
      }, [createComment]);


      // book scooter

      useEffect(() => {
        if (isBusy === null) {
          return;
        }
        axios
          .put("http://localhost:3003/front/riedziai/" + isBusy.id, isBusy)
          .then((res) => {
            showMessage(res.data.msg ? res.data.msg : null);
            setLastUpdate(Date.now());
          })
      }, [isBusy]);

      const showMessage = (msg) => {
        setMessage(msg);
        setTimeout(() => setMessage(null), 5000);
      };
  return (
    <FrontContext.Provider
      value={{
        colors,
        scooters,
        setCreateComment,
        setIsBusy,
        message
      }}
    >
      <div className="flex-front">
        <List></List>
        <ScootersList />
      </div>
    </FrontContext.Provider>
  );
}

export default Front;
