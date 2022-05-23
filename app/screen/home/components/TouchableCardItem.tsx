import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Text} from '../../../components/Text';
import {Colors} from '../../../styles/colors';
import styles from '../../../styles/style-sheet';

interface IProps {
  title: string;
  active?: boolean;
  onPress?: (value: string) => void;
}

const TouchableCardItem = (props: IProps) => {
  const {title, active, onPress} = props;

  return (
    <>
      {active ? (
        <View
          style={[
            styles.centered,
            styles.full_width,
            {
              backgroundColor: Colors.Blue200,
            },
          ]}>
          <TouchableOpacity
            style={[styles.p_medium]}
            onPress={() => onPress(title)}>
            <Text color={Colors.White} bold type="footnote">
              {title}
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity
          style={[styles.p_medium]}
          onPress={() => onPress(title)}>
          <Text color={Colors.Text.GreySecondary} type="caption1">
            {title}
          </Text>
        </TouchableOpacity>
      )}
    </>
  );
};

export default TouchableCardItem;
