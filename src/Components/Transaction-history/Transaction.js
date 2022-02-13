
export default function Transacton(props) {
  const {type,amount,currency} = props;
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