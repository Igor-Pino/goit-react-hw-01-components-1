import propType from 'prop-types';
import './trans.css';

function Transaction(props) {
  const { type, amount, currency } = props;
  return (
    <>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </>
  );
}

Transaction.propType = {
  type: propType.string,
  amount: propType.number,
  currency: propType.string,
};

export default Transaction;
