import React, { useMemo } from "react";
import { data } from "../../../../../data";
import { CollumnStyle } from "./style";

export const ProductsList = React.memo(({ search }) => {
  const filteredData = useMemo(() => {
    const filteredData = data.filter(product => {
      return product.name.toLowerCase().includes(search.toLowerCase())
    })

    return !filteredData.length 
      ? data
      : filteredData
  }, [search]);
  
  return (
    <table style={{width: '100%', borderCollapse: "collapse"}}>
      <thead>
        <tr>
          <th style={CollumnStyle}>Id</th> 
          <th style={CollumnStyle}>Name</th>
        </tr>
      </thead>
      <tbody>
        {filteredData.map(item => {
          return (
            <tr key={item.id}>
              <td style={CollumnStyle}>{item.id}</td>
              <td style={CollumnStyle}>{item.name}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
});

