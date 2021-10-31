import propTypes from 'prop-types';
import './trans.css';
import TransactionMarkup from './transactions';

function TransList({ items }) {
  return (
    <>
      {items.map(item => (
        <tr key={item.id}>
          <TransactionMarkup type={item.type} amount={item.amount} currency={item.currency} />
        </tr>
      ))}
    </>
  );
}

TransList.propTypes = {
  items: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
    }),
  ),
};

export default TransList;
