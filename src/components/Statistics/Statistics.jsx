import PropTypes from 'prop-types';
import { List } from "./List";
import css from './statistics.module.css'


const Statistics = ({ data, title }) => {

    return <section className={css.statistics}>
        {title? <h2 className={css.title}>Upload stats</h2> : null}

        <ul className={css.statList}>
            <List info={data} />
        </ul>
    </section>
}
Statistics.propTypes = {
    data: PropTypes.array,
    title: PropTypes.string.isRequired,
};

export default Statistics;