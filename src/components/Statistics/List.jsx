import PropTypes from 'prop-types';
import css from './List.module.css'
import { getRandomHexColor } from './color';
export const List = ({ info }) => {
      
    return info.map(info =>
        <li className={css.item} key={info.id} style={{
        backgroundColor: getRandomHexColor(),
      }}>
      <span className={css.label}>{info.label}</span>
      <span className={css.percentage}>{info.percentage}%</span>
    </li>
    );
}
List.propTypes = {
    info: PropTypes.array,
};