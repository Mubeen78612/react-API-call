import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Clicky from "./Clicky";

function Efect() {
  const [data, setData] = useState();
  const [loader, setLoader] = useState(false);
  console.log(data);
  useEffect(() => {
    setLoader(true);
    axios
      .get("https://dummyjson.com/products?limit=100")
      .then((response) => {
        setData(response.data.products);
      })
      .catch((err) => {
        setLoader(false);
        console.log(err);
      })
      .finally(() => {
        setLoader(false);
      });
  }, []);
  return (
    <>
    <div className="flex flex-col">
      {data?.map((item,index) => {
       
        return (<Clicky key={index} product={{image: item?.thumbnail,name: item?.title,price: item?.price}}/>)
        
      })}
      
      
    </div>
      <div className="container p-5">
        {loader ? (
          "loading data ..."
        ) : (
          <table className="table-auto border-2 border-slate-700">
            <thead>
              <tr>
                <th className="border-2 border-slate-700">ID</th>
                <th className="border-2 border-slate-700">Title</th>
                <th className="border-2 border-slate-700">Brand</th>
                <th className="border-2 border-slate-700">Price</th>
                <th className="border-2 border-slate-700">Category</th>
                <th className="border-2 border-slate-700 whitespace-nowrap">Discount Percentage</th>
                <th className="border-2 border-slate-700">Description</th>
                <th className="border-2 border-slate-700">Rating</th>
                <th className="border-2 border-slate-700">Stock</th>
                <th className="border-2 border-slate-700">Image</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item, index) => {
                return (
                  <tr className="border-2 border-slate-700 p-3" key={index}>
                    <td className="border-2 border-slate-700 p-3">
                      {item?.id}
                    </td>
                    <td className="border-2 border-slate-700 p-3">
                      {item?.title}
                    </td>
                    <td className="border-2 border-slate-700 p-3">
                      {item?.brand}
                    </td>
                    <td className="border-2 border-slate-700 p-3">
                      {item?.price}
                    </td>
                    <td className="border-2 border-slate-700 p-3">
                      {item?.category}
                    </td>
                    <td className="border-2 border-slate-700 p-3">
                      {item?.discountPercentage}
                    </td>
                    <td className="border-2 border-slate-700 p-3">
                      {item?.description}
                    </td>
                    <td className="border-2 border-slate-700 p-3">
                      {item?.rating}
                    </td>
                    <td className="border-2 border-slate-700 p-3">
                      {item?.stock}
                    </td>
                    <td className="border-2 border-slate-700 p-3">
                      <img src={item?.thumbnail} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}

export default Efect;
