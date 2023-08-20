import { LinkLook } from './Link.styled';
import { FiPlay } from 'react-icons/fi';

const LinkStyled = ({ children, ...props }) => {
  return (
    <LinkLook {...props}>
      <p>{children}</p>
      <FiPlay style={{ color: '#ffffff' }} />
    </LinkLook>
  );
};

export default LinkStyled;
