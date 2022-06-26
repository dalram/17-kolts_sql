import { useEffect, useState } from "react";
import "./App.scss";
import Create from "./Components/Create";
import List from "./Components/List";
import Modal from "./Components/Modal";
// import getRegCode from './Functions/getRegCode';
import axios from "axios";
import ScootersContext from "./Contexts/ScootersContext";
import ColorContext from "./Contexts/ColorContext";
import ColorList from './Components/Colors/ColorList'
import ColorCreate from './Components/Colors/ColorCreate'

function App() {
  // Scooters

  const [createData, setCreateData] = useState(null);
  const [scooters, setScooters] = useState(null);
  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [deleteData, setDeleteData] = useState(null);
  const [modalData, setModalData] = useState(null);
  const [editData, setEditData] = useState(null);
  const [sortType, setSortType] = useState("1");

  // Colors
  const [colors, setColors] = useState(null);
  const [createDataColors, setCreateDataColors] = useState(null);
  const [deleteDataColors, setDeleteDataColors] = useState(null);
// Scooters UseEffects
  // Read
  useEffect(() => {
    axios.get("http://localhost:3003/riedziai").then((res) => {
      // setScooters(res.data);
      // console.log(res.data);
      setScooters(
        res.data.map((kolt, i) => ({
          ...kolt,
          lastUseTime:
            kolt.lastUseTime.length === 0 ? "Not Used" : kolt.lastUseTime,
        }))
      );
    });
  }, [lastUpdate]);
  // Create
  useEffect(() => {
    if (null === createData) return;
    axios.post("http://localhost:3003/riedziai", createData).then((res) => {
      // showMessage(res.data.msg);
      setLastUpdate(Date.now());
    });
  }, [createData]);

  //  delete useEffect

  useEffect(() => {
    if (null === deleteData) return;
    axios
      .delete("http://localhost:3003/riedziai/" + deleteData.id)
      .then((res) => {
        // showMessage(res.data.msg);
        setLastUpdate(Date.now());
      });
  }, [deleteData]);

  // Modalo funkcionalumas
  useEffect(() => {
    if (editData === null) {
      return;
    }
    axios
      .put("http://localhost:3003/riedziai/" + editData.id, editData)
      .then((res) => {
        // showMessage(res.data.msg);
        setLastUpdate(Date.now());
      });
  }, [editData]);


  // Colors useEffects

  // Read 

  useEffect(() => {
    axios.get("http://localhost:3003/spalvos").then((res) => {
      setColors(res.data);
    });
  }, [lastUpdate]);


  // Create

  useEffect(() => {
    if (null === createDataColors) return;
    axios.post("http://localhost:3003/spalvos", createDataColors).then((res) => {
      // showMessage(res.data.msg);
      setLastUpdate(Date.now());
    });
  }, [createDataColors]);

// Delete
  useEffect(() => {
    if (null === deleteDataColors) return;
    axios.delete('http://localhost:3003/spalvos/' + deleteDataColors.id)
      .then(res => {
        setLastUpdate(Date.now());
      });
  }, [deleteDataColors]);

  return (
    <ScootersContext.Provider
      value={{
        setCreateData,
        setEditData,
        modalData,
        setModalData,
        scooters,
        setDeleteData,
        sortType,
        setSortType,
        colors
      }}
    >
      <ColorContext.Provider value={{
        colors,
        setCreateDataColors,
        setDeleteDataColors,
      }}>
        <div className="App">
          <h1>Kolt scooters administration app</h1>
          <div className="container">
            <div className="create-box">
              <Create></Create>
              <ColorCreate></ColorCreate>
              <ColorList></ColorList>
            </div>
            <List></List>
          </div>
          {/* Modal langas turi buti atvaizduojamas paspaudus 'Redaguoti' ant paspirtuko. */}
          <Modal></Modal>
        </div>
      </ColorContext.Provider>
    </ScootersContext.Provider>
  );
}

export default App;

// https://docs.google.com/document/d/18UPY3gFN-1xZ0okWMkFs8h2jESfgJDXKQ3-viMXBeS0/edit
