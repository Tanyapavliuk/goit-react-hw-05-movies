import { LinkLook } from './Link.styled';
import { FiPlay } from 'react-icons/fi';

const Link = ({ children, ...props }) => {
  return (
    <LinkLook {...props}>
      <p>{children}</p>
      <FiPlay style={{ color: '#ffffff' }} />
    </LinkLook>
  );
};

export default Link;
