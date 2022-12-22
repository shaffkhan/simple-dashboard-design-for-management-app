import React from "react";
import { useState } from "react";
import Layout from "../../Source/Layout";

export default function PurchaseInvoice() {
  const [searchInput, setSearchInput] = useState("");

  const [data,setData] =useState( [
    { name: "Belgium", continent: "Europe" },
    { name: "India", continent: "Asia" },
    { name: "Bolivia", continent: "South America" },
    { name: "Ghana", continent: "Africa" },
    { name: "Japan", continent: "Asia" },
    { name: "Canada", continent: "North America" },
    { name: "New Zealand", continent: "Australasia" },
    { name: "Italy", continent: "Europe" },
    { name: "South Africa", continent: "Africa" },
    { name: "China", continent: "Asia" },
    { name: "Paraguay", continent: "South America" },
    { name: "Usa", continent: "North America" },
    { name: "France", continent: "Europe" },
    { name: "Botswana", continent: "Africa" },
    { name: "Spain", continent: "Europe" },
    { name: "Senegal", continent: "Africa" },
    { name: "Brazil", continent: "South America" },
    { name: "Denmark", continent: "Europe" },
    { name: "Mexico", continent: "South America" },
    { name: "Australia", continent: "Australasia" },
    { name: "Tanzania", continent: "Africa" },
    { name: "Bangladesh", continent: "Asia" },
    { name: "Portugal", continent: "Europe" },
    { name: "Pakistan", continent: "Asia" },
  ]);

  const handleChange = (e) => {
    // e.preventDefault();
    setSearchInput(e.target.value);
    
  };
  console.log(searchInput)
//   function handleForm(e){
// e.preventDefault();
 // setSearchInput(e.target.value);
// console.log(searchInput);
//   }
  
  return (
    <Layout>
      <div className="p-[50px] ml-[96px] mt-[60px]">
        <h1 className="px-[50px]  font-bold text-[25px]">Purchase Invoice</h1>

        <hr className="border-t-4 border-black my-[10px]"></hr>




<label>supplier name : </label>
        <input type="text" list="data" onChange={handleChange} className="border-2 p-[5px]" />
        <datalist id="data">
    {data.map((item) =>
      <option key={item.id} value={item.name} />
    )}

    <textarea name="" id="" cols="30" rows="10">{searchInput}</textarea>


  </datalist>
  
      </div>
    </Layout>
  );
  console.log(searchInput)
}
