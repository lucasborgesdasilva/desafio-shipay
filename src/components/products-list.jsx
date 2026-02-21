
export const ProductsList = ({ data }) => {
  const td = {
    border: '1px solid #DDD', 
    textAlign: "left", 
    padding: '8px',
  }
  
  return (
    <table style={{width: '100%', borderCollapse: "collapse"}} >
      <tr>
        <th style={td}>Id</th> 
        <th style={td}>Name</th>
      </tr>
      {data.map(item => {
        return (
          <tr key={item.id}>
            <td style={td}>{item.id}</td>
            <td style={td}>{item.name}</td>
          </tr>
        )
      })}
    </table>
  )
};

