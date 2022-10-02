import { Colors } from '../styles/colors';
import Icon from 'react-native-vector-icons/EvilIcons';

const ICON_NAME = {};

interface IIconProps {
  color?: Colors;
  size?: number;
  name?: string;
}

const IconComponents = (props: IIconProps) => {
  const { color, size, name, ...otherProps } = props;
  return <Icon name={name} color={color} size={size} {...otherProps} />;
};
