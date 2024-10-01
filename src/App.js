import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
// import Button from './count/component/Button';
// Pages
import Index from "./pages/index/Index"
import Count from "./pages/count/component/Count";
import Object from "./pages/addingObject/component/Object";


function App() {
  return (
    // <Button count={count} setCount={setCount}/>
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/count" element={<Count />} />
        <Route exact path="/object" element={<Object />} />
      </Routes>
    </Router>
      {/* <button onClick={() => setCount( count + 1)}>Count is {count}</button> */}
      {/* <Count /> */}
      <br />
      {/* {count} */}
    </>
  );
}

export default App;
