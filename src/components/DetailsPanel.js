import React, { useEffect, useState } from "react";
import axios from "axios";
import { useGlobalContext } from "../context";

const DetailsPanel = ({ selectedRowIndex }) => {
  console.log(`row index : ${selectedRowIndex}`);
  const conxData = useGlobalContext(); 
  const [selectedRowData, setSelectedRowData] = useState([]);

  useEffect(() => {
    console.log(`UseEffect-> Selected Row Index = ${selectedRowIndex}`)
    if (selectedRowIndex !== null) {
      async function loadData() {
        var data = await fetchRowData(selectedRowIndex);
        setSelectedRowData(data);
      }
      loadData();
      console.log(`Selected Data: ${selectedRowData}`);
    }
  }, [selectedRowIndex]);

  const fetchRowData = async (index) => {
    console.log(`fetchRowData()`);
  const singleDataAPi =  `http://localhost/crc/getSingleData.php?i_id=${index}`;
    try {
      const response = await axios.get(
       singleDataAPi
      );
      if (response.status === 200){
        console.log(`fetchRowData->${response.data}`);
        return response.data;
      }
      console.log("Selected Row Data data:", selectedRowData);
    } catch (error) {
      console.error("Error fetching row data:", error);
    }
    return [];
  };
  
  
  const renderFields = () => {
    if (!selectedRowData) {
      return <div>Loading...</div>;
    }
    const fields = [
      // <pre>{JSON.stringify(selectedRowData)}</pre>,
      { title: "ITS number", value: selectedRowData.id_its_id },
      { title: "ITS DATA", value: conxData },  // Context data field
      { title: "Index ID", value: selectedRowData.id_id },
      { title: "HOF number", value: selectedRowData.id_hof_id },
      { title: "Date Of Birth", value: selectedRowData.id_dob },
      { title: "Date of Meeting", value: selectedRowData.id_plu },
      { title: "Phone No.", value: selectedRowData.id_contact },
      { title: "Telephone No.", value: selectedRowData.id_telephone },
      { title: "City Name", value: selectedRowData.id_city },
      { title: "Nationality", value: selectedRowData.id_nationality },
      { title: "Address", value: selectedRowData.id_address },
      { title: "Department", value: selectedRowData.id_jamaat },
      { title: "On-site", value: selectedRowData.id_status },
    ];

    return fields.map(({ title, value }, index) => (
      <div key={index}>
        <strong>{title}:</strong> {value}
      </div>
    ));
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "white",
      }}
    >
      <div
        style={{
          width: "85%",
          height: "85vh",
          backgroundColor: "#007bff",
          borderRadius: "20px",
          padding: "20px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          overflowY: "auto",
          color: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            color: "black",
            borderRadius: "10px",
            width: "150px",
            height: "150px",
            margin: "0 auto 20px auto",
          }}
        >
          <span>Image Box</span>
        </div>

        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          {selectedRowData ? selectedRowData.id_name : "Name"}
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "10px 20px",
            textAlign: "left",
          }}
        >
          {renderFields()}
        </div>
      </div>
    </div>
  );
};

export default DetailsPanel;


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useGlobalContxet } from "../context";

// const DetailsPanel = ({ selectedRowIndex }) => {
//   const conxData = useGlobalContxet();
//   const [selectedRowData, setSelectedRowData] = useState(null);

//   useEffect(() => {
//     if (selectedRowIndex !== null) {
//       console.log("Fetching data for index:", selectedRowIndex);
//       fetchRowData(selectedRowIndex);
//     } else {
//       setSelectedRowData(null);
//     }
//   }, [selectedRowIndex]);

//   const fetchRowData = async (index) => {
//     try {
//       const response = await axios.get(
//         `http://localhost/crc/getSingleData.php?i_id=${index}`
//       );
//       console.log("Fetched data:", response.data);
//       setSelectedRowData(response.data);
//     } catch (error) {
//       console.error("Error fetching row data:", error);
//     }
//   };

//   const renderFields = () => {
//     if (!selectedRowData) {
//       return <div>Loading...</div>;
//     }

//     const fields = [
//       { title: "ITS number", value: selectedRowData.id_its_id },
//       { title: "ITS DATA", value: conxData },
//       { title: "Index ID", value: selectedRowData.id_id },
//       { title: "HOF number", value: selectedRowData.id_hof_id },
//       { title: "Date Of Birth", value: selectedRowData.id_dob },
//       { title: "Date of Meeting", value: selectedRowData.id_plu },
//       { title: "Phone No.", value: selectedRowData.id_contact },
//       { title: "Telephone No.", value: selectedRowData.id_telephone },
//       { title: "City Name", value: selectedRowData.id_city },
//       { title: "Nationality", value: selectedRowData.id_nationality },
//       { title: "Address", value: selectedRowData.id_address },
//       { title: "Department", value: selectedRowData.id_jamaat },
//       { title: "On-site", value: selectedRowData.id_status },
//     ];

//     return fields.map(({ title, value }, index) => (
//       <div key={index}>
//         <strong>{title}:</strong>{" "}
//         {value !== undefined && value !== null ? value : "N/A"}
//       </div>
//     ));
//   };

//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         minHeight: "100vh",
//         backgroundColor: "white",
//       }}
//     >
//       <div
//         style={{
//           width: "85%",
//           height: "85vh",
//           backgroundColor: "#007bff",
//           borderRadius: "20px",
//           padding: "20px",
//           boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
//           overflowY: "auto",
//           color: "white",
//         }}
//       >
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             backgroundColor: "white",
//             color: "black",
//             borderRadius: "10px",
//             width: "150px",
//             height: "150px",
//             margin: "0 auto 20px auto",
//           }}
//         >
//           <span>Image Box</span>
//         </div>

//         <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
//           {selectedRowData ? selectedRowData.id_name : "Name"}
//         </h2>

//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "1fr 1fr",
//             gap: "10px 20px",
//             textAlign: "left",
//           }}
//         >
//           {renderFields()}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DetailsPanel;
