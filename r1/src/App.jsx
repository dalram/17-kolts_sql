import Back from './Back';
import Front from './Front';
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Front/>}></Route>
        <Route path='/admin' element={<Back/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
