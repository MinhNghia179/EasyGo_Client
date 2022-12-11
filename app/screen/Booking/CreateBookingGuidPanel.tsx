import React from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps';
import Icon from 'react-native-vector-icons/EvilIcons';
import { Text } from '../../components/Text';
import { SafeAreaContainer } from '../../components/View';
import { Colors } from '../../styles/colors';
import IconSizes from '../../styles/icon-size';
import styles from '../../styles/style-sheet';
import StickyBottomDetailsPanel from './components/StickyBottomDetailsPanel';

interface IProps {}

const CreateBookingGuidPanel = (props: IProps) => {
  const {} = props;

  return (
    <SafeAreaContainer
      contentType="scrollView"
      leftIconName="back"
      headerBordered
      stickyBottom={<StickyBottomDetailsPanel />}
      title={
        <View style={[styles.flex_row, styles.alg_center]}>
          <Icon
            name="location"
            size={IconSizes.x_small}
            color={Colors.Green600}
          />
          <View>
            <Text type="footnote" fontWeight="bold">
              68 Quan Hoa, Cầu Giấy, Hà Nội,...
            </Text>
          </View>
        </View>
      }>
      <MapView style={[styles.flex_1]} />
    </SafeAreaContainer>
  );
};

export default CreateBookingGuidPanel;
