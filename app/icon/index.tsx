import {AntDesign} from '@expo/vector-icons';
import React from 'react';
import {Colors} from '../styles/colors';
import IconSizes from '../styles/icon-size';

const defaultColor: Colors = Colors.Black;
const defaultSize = IconSizes.medium;

interface MailIconParams {
  color?: string | any;
  size?: number | any;
  onPress?: any;
  style?: any;
}

const Icon = ({
  icon: Icon,
  name,
  color = defaultColor,
  size = defaultSize,
  ...props
}) => <Icon name={name} color={color} size={size} {...props} />;

export const UserIcon = (props: MailIconParams) => (
  <Icon icon={AntDesign} name="user" {...props} />
);
