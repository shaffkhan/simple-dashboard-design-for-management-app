import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";



const Tables = () => {
 
  const [data, setData] = useState([
    {
      id: 1,
      first_name: "Laney",
      last_name: "Heinig",
      email: "lheinig0@mozilla.com",
      gender: "Male",
      ip_address: "3.188.190.108",
    },
    {
      id: 2,
      first_name: "Royall",
      last_name: "Callaway",
      email: "rcallaway1@java.com",
      gender: "Male",
      ip_address: "209.108.192.68",
    },
    {
      id: 3,
      first_name: "Hebert",
      last_name: "Burde",
      email: "hburde2@twitter.com",
      gender: "Male",
      ip_address: "247.244.43.48",
    },
    // {
    //   id: 4,
    //   first_name: "Bartolemo",
    //   last_name: "Beneze",
    //   email: "bbeneze3@blogtalkradio.com",
    //   gender: "Male",
    //   ip_address: "28.129.179.31",
    // },
    // {
    //   id: 5,
    //   first_name: "Dale",
    //   last_name: "Gaskin",
    //   email: "dgaskin4@booking.com",
    //   gender: "Male",
    //   ip_address: "18.53.58.145",
    // },
  ]);
  return (
    <div className="flex gap-5">
      <div className="grow-[2] shadow-2xl rounded-lg  bg-white px-[30px] pb-[40px]">
      <div className="px-[50px] pt-[50px]  font-bold text-[25px]"><h1>Stock Alert</h1></div>
      <hr className="border-t-4 border-black my-[10px]"></hr>
        <TableContainer>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow >
                <TableCell>id</TableCell>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Gender</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((element) => {
                return (
                  <TableRow key={element.id}>
                    <TableCell>{element.id}</TableCell>
                    <TableCell>{element.first_name}</TableCell>
                    <TableCell>{element.last_name}</TableCell>
                    <TableCell>{element.email}</TableCell>
                    <TableCell>{element.gender}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      {/* second table */}

      <div className="grow shadow-2xl rounded-lg bg-white px-[30px] pb-[40px]">
      <div className="px-[50px] pt-[50px] font-bold text-[25px]"><h1>Top Selling Products</h1></div>
      <hr className="border-t-4 border-black my-[10px]"></hr>
      <TableContainer className="">
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>id</TableCell>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                {/* <TableCell>Email</TableCell>
                <TableCell>Gender</TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((element) => {
                return (
                  <TableRow key={element.id}>
                    <TableCell>{element.id}</TableCell>
                    <TableCell>{element.first_name}</TableCell>
                    <TableCell>{element.last_name}</TableCell>
                    {/* <TableCell>{element.email}</TableCell>
                    <TableCell>{element.gender}</TableCell> */}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>



    </div>
  );
};

export default Tables;
