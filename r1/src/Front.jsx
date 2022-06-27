import { useEffect, useState } from "react";
import axios from "axios";
import FrontContext from "./Contexts/FrontContext";
import List from "./Components/Front/List";
function Front() {
  const [colors, setColors] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3003/front/spalvos").then((res) => {
      console.log(res.data);
      setColors(res.data);
    });
  }, []);
  return (
    <FrontContext.Provider value={{
        colors,
    }}>
      <div className="App">
        <List></List>
      </div>
    </FrontContext.Provider>
  );
}

export default Front;
