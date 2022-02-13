
export default function Transacton(prop) {
  const {type,amount,currency} = prop;
  return (
  <table className="">
  <thead>
    <tr>
          <th>TYPE</th>
          <th>AMOUNT</th>
          <th>CURRENCY</th>
    </tr>
  </thead>
 
      <tbody>
    <tr>
          <td>{type}</td>
          <td>{amount}</td>
          <td>{currency}</td>
    </tr>
  </tbody>
</table>
  )
}