import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import profileImage from "../assets/images/adnan.png";

const TableComponent = ({ onSelectRow }) => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost/crc/getData.php")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  const handleSearch = () => {
    const filtered = data.filter(
      (item) =>
        item.id_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.id_its_id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.id_hof_id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.id_city.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const handleRowClick = (index_id) => {
    onSelectRow(index_id);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        width: "100%",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <input
          type="text"
          placeholder="Search all columns..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: "10px",
            width: "300px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
        <button
          onClick={handleSearch}
          style={{
            padding: "10px 20px",
            borderRadius: "4px",
            border: "none",
            backgroundColor: "#007bff",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Search
        </button>
      </div>
      <table
        className="table table-striped"
        style={{ width: "100%", margin: "20px 0" }}
      >
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">ITS ID</th>
            <th scope="col">HOF ID</th>
            <th scope="col">City</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <tr key={item.id_id} onClick={() => handleRowClick(item.id_id)}>
                <th scope="row">{index + 1}</th>
                <td>
                  <img
                    src={profileImage}
                    alt={`Image for ${item.id_name}`}
                    style={{ maxWidth: "100px" }}
                  />
                </td>
                <td>{item.id_name}</td>
                <td>{item.id_its_id}</td>
                <td>{item.id_hof_id}</td>
                <td>{item.id_city}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" style={{ textAlign: "center" }}>
                No data available. Please enter a search term and press the
                search button.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;

//////////// this code show text heading before and after fetch data //////

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";

// const TableComponent = ({ onSelectRow }) => {
//   const [data, setData] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredData, setFilteredData] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost/crc/getData.php")
//       .then(response => {
//         setData(response.data);
//       })
//       .catch(error => {
//         console.error("There was an error fetching the data!", error);
//       });
//   }, []);

//   const handleSearch = () => {
//     const filtered = data.filter(item =>
//       item.id_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       item.id_its_id.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       item.id_hof_id.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       item.id_city.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setFilteredData(filtered);
//   };

//   const handleRowClick = (index_id) => {
//     onSelectRow(index_id);
//   };

//   return (
//     <div>
//       <div>
//         <input
//           type="text"
//           placeholder="Search all columns..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         <button onClick={handleSearch}>Search</button>
//       </div>
//       <table className="table table-striped">
//         <thead className="thead-dark">
//           <tr>
//             <th scope="col">#</th>
//             <th scope="col">Name</th>
//             <th scope="col">ITS ID</th>
//             <th scope="col">HOF ID</th>
//             <th scope="col">City</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredData.map((item, index) => (
//             <tr key={index} onClick={() => handleRowClick(index)}>
//               <td>{index + 1}</td>
//               <td>{item.id_name}</td>
//               <td>{item.id_its_id}</td>
//               <td>{item.id_hof_id}</td>
//               <td>{item.id_city}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default TableComponent;
