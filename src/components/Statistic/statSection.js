import propTypes from 'prop-types';
import s from './Statistic.module.css';

function StatisticalSection({ title, children }) {
  return (
    <section className={s.section}>
      {title && <h2 className={s.title}>{title}</h2>}
      {children}
    </section>
  );
}

StatisticalSection.propTypes = {
  title: propTypes.string,
  children: propTypes.node,
};

export default StatisticalSection;
