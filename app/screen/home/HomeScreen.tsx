import React, {useState} from 'react';
import {Dimensions, View} from 'react-native';
import {Text} from '../../components/Text';
import {APP_NAME} from '../../constants/constant';
import {Colors} from '../../styles/colors';
import styles from '../../styles/style-sheet';
import TouchableCardItem from './components/TouchableCardItem';

enum TitleName {
  START_GAME = 'Start Game',
  ABOUT = 'About',
  HIGHT_SCORE = 'Hight Score',
  FEEDBACK = 'FeedBack',
  PROFILE = 'Profile',
}

const DimensionWidthDevice = Dimensions.get('window').width;
const DimensionHeightDevice = Dimensions.get('window').height;

interface IProps {}

const HomeScreen = (props: IProps) => {
  const {} = props;

  const [activeItem, setActiveItem] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const _onStartGame = () => {};

  const _onNavigateScreen = () => {};

  const _onSubmitButton = (name: string) => {
    setActiveItem(name);

    setLoading(true);

    setLoading(false);
  };

  return (
    <View
      style={[
        styles.mt_medium,
        styles.flex,
        styles.flex_col,
        styles.centered,
        {
          width: DimensionWidthDevice,
          height: DimensionHeightDevice,
        },
      ]}>
      <View style={[styles.mb_x2_large]}>
        <Text type="callout" color={Colors.Black} textAlign={'center'}>
          {APP_NAME}
        </Text>
      </View>

      <View style={[styles.centered, styles.full_width]}>
        <TouchableCardItem
          active={activeItem === TitleName.START_GAME}
          title={TitleName.START_GAME}
          onPress={_onSubmitButton}
        />
        <TouchableCardItem
          active={activeItem === TitleName.ABOUT}
          title={TitleName.ABOUT}
          onPress={_onSubmitButton}
        />
        <TouchableCardItem
          active={activeItem === TitleName.HIGHT_SCORE}
          title={TitleName.HIGHT_SCORE}
          onPress={_onSubmitButton}
        />
        <TouchableCardItem
          active={activeItem === TitleName.FEEDBACK}
          title={TitleName.FEEDBACK}
          onPress={_onSubmitButton}
        />
        <TouchableCardItem
          active={activeItem === TitleName.PROFILE}
          title={TitleName.PROFILE}
          onPress={_onSubmitButton}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
