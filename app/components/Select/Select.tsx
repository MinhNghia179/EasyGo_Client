import React from 'react';
import { View } from 'react-native';
import styles from '../../styles/style-sheet';
import InputText from '../Input/InputText';

interface IProps {}

const Select = (props: IProps) => {
  const {} = props;

  return (
    <View style={[styles.flex]}>
      <InputText />
    </View>
  );
};

export default Select;
