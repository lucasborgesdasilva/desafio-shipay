
export const ProductsList = ({ data }) => {
  const border = {
    border: '1px solid #DDD', 
    textAlign: "left", 
    padding: '8px',
  }
  
  return (
    <table style={{width: '100%', borderCollapse: "collapse"}}>
      <thead>
        <tr>
          <th style={border}>Id</th> 
          <th style={border}>Name</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => {
          return (
            <tr key={item.id}>
              <td style={border}>{item.id}</td>
              <td style={border}>{item.name}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
};

