import React, { useState } from "react";
import './App.css';
import Navbar from './components/NavBar';
import TableComponent from './components/dataTable';
import DetailsPanel from './components/DetailsPanel';
import { BrowserRouter as Router} from "react-router-dom";
import { useGlobalContext } from "./context";


function App() {
  // const conxData = useGlobalContxet();
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);

  const handleRowSelect = (index) => {
    setSelectedRowIndex(index);
  };


  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <Navbar />
        {/* <div>idher jo data wo {conxData} </div> */}
        <div style={{ display: 'flex', flex: 1 }}>
          <div style={{ flex: 1, overflowY: 'auto' }}>
            <TableComponent onSelectRow={handleRowSelect} />
          </div>
          <div style={{ flex: 1, overflowY: 'auto' }}>
            <DetailsPanel selectedRowIndex={selectedRowIndex}/>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
