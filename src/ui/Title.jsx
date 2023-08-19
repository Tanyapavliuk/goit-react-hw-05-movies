import { TitleStyle } from './Title.style';

const Title = ({ children, ...props }) => {
  return <TitleStyle {...props}>{children}</TitleStyle>;
};

export default Title;
