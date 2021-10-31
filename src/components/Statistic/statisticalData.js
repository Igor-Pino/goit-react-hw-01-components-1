import propTypes from 'prop-types';
import s from './Statistic.module.css';

function Satistical(props) {
  const { label, percentage } = props;
  return (
    <>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}%</span>
    </>
  );
}

Satistical.propTypes = {
  label: propTypes.string.isRequired,
  percentage: propTypes.number.isRequired,
};

export default Satistical;
