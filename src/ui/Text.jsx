import { TextStyle } from './Text.styled';

const Text = ({ children, ...props }) => {
  return <TextStyle {...props}>{children}</TextStyle>;
};

export default Text;
