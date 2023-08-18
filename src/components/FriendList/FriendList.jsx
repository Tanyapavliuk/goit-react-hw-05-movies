import PropTypes from 'prop-types';
import css from './FriendList.module.css'

import FriendListItem from './FriendListItem'
const Friends = ({ friends }) => {
    return <ul className={css.friendList}>
        <FriendListItem friends={friends} />
    </ul>
}
Friends.propTypes = {
    friends: PropTypes.array,
};

export default Friends;