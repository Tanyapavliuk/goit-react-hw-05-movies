import PropTypes from 'prop-types';
import css from './FriendList.module.css'

const FriendListItem = ({ friends }) => {
    
    return friends.map(({id, avatar , isOnline, name })=> 
    <li className={css.item} key={id}>
        <span className={isOnline? css.statusGrean:css.statusRed} statys={isOnline}></span>
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
    </li>
    )
}
FriendListItem.PropTypes = {
    id: PropTypes.string.isRequired,
    avatar:PropTypes.string.isRequired,
    isOnline:PropTypes.bool.isRequired,
    name:PropTypes.string.isRequired,
}
export default FriendListItem;
