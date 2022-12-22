import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React, { useState } from "react";
import Layout from "../../Source/Layout";
import { NavLink } from "react-router-dom/dist";

const Purchase = () => {
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
    {
      id: 4,
      first_name: "Bartolemo",
      last_name: "Beneze",
      email: "bbeneze3@blogtalkradio.com",
      gender: "Male",
      ip_address: "28.129.179.31",
    },
    {
      id: 5,
      first_name: "Dale",
      last_name: "Gaskin",
      email: "dgaskin4@booking.com",
      gender: "Male",
      ip_address: "18.53.58.145",
    },
  ]);
  return (
    <Layout>
      <div className="p-[50px] ml-[96px] mt-[60px]">
        <div className="flex justify-between items-center">
          <h1 className="px-[50px] font-bold text-[25px]">Purchase Invoice</h1>

          <NavLink to="/PurchaseInvoice">
            <Button
              size={"small"}
              sx={{ m: 0, p: 2, minWidth: 0, backgroundColor: "#101540" }}
              variant="contained"
              endIcon={<AddIcon />}
            >
              Create Invoice
            </Button>
          </NavLink>
        </div>
        <hr className="border-t-4 border-black my-[10px]"></hr>

        <div className="p-[50px]">
          <div className="shadow-2xl rounded-lg bg-white p-[100px] border-black">
            <TableContainer className="">
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>id</TableCell>
                    <TableCell>First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Gender</TableCell>
                    <TableCell>ip Address</TableCell>
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
                        <TableCell>{element.ip_address}</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Purchase;
