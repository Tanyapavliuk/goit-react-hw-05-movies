import { TextError } from './Error.styled';

const Error = ({ children, ...props }) => {
  return <TextError {...props}>{children}</TextError>;
};

export default Error;
