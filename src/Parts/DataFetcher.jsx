// import React, { useState, useEffect } from 'react';

// const DataFetcher = () => {

//   const [data, setData] = useState([]);
  
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => 
//     {
//       try 
//       {
//         const result = await fetch('https://jsonplaceholder.typicode.com/posts');
//         const Data = await result.json();
//         setData(Data);
//       } 
//       catch (error) 
//       {
//         setError(error);
//       }
//     }

//     fetchData();
//   }, []);

  

//   if (error) 
//   {
//     return (
//     <p>Error: {error.message}</p>
//     )
//   }

//   return (
//     <>

//       <h2>Data</h2>

//       <ul>

//         {data.map(item => (
//           <li key={item.id}> {item.title} </li>
//         ))}

//       </ul>

//     </>
//   )
// }

// export default DataFetcher;
