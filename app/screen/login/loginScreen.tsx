import React, { useState } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import { useDispatch } from 'react-redux';
import LinkButton from '../../components/Button/LinkButton';
import PrimaryButton from '../../components/Button/PrimaryButton';
import Checkbox from '../../components/Checkbox/Checkbox';
import InputText from '../../components/Input/InputText';
import { Text } from '../../components/Text';
import { SafeAreaContainer } from '../../components/View';
import { HomeStackRoute } from '../../constants/constant';
import navigationService from '../../navigation/navigation-service';
import { IRootDispatch } from '../../redux/root-store';
import { Colors } from '../../styles/colors';
import IconSizes from '../../styles/icon-size';
import styles from '../../styles/style-sheet';

const LoginScreen = () => {
  const dispatch = useDispatch<IRootDispatch>();

  const [userName, setUserName] = useState<string>('');
  const [isChecked, setIsChecked] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSignIn = async () => {
    setIsLoading(true);
    try {
      await dispatch.authStore.doSignIn({ userName });
      navigationService.navigate(HomeStackRoute.DASHBOARD, {});
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaContainer contentType="scrollview">
      <View
        style={[
          styles.p_medium,
          styles.flex_col,
          styles.jus_evenly,
          {
            flex: 1,
          },
        ]}>
        <Text type="headline" fontWeight="bold" textAlign="center">
          EASY GO
        </Text>
        <View>
          <InputText
            isRequired
            leftIcon={<Icon name="user" size={IconSizes.medium} />}
            label="Username"
            value={userName}
            onChange={setUserName}
          />
          <View
            style={[styles.flex_row, styles.jus_between, styles.alg_center]}>
            <Checkbox
              label="Save your uId"
              checked={isChecked}
              checkedColor={Colors.Green600}
              onPress={() => setIsChecked(!isChecked)}
            />
            <LinkButton>Forgot uID</LinkButton>
          </View>
        </View>

        <View>
          <PrimaryButton
            loading={isLoading}
            onPress={onSignIn}
            disable={!userName}>
            Login
          </PrimaryButton>
          <View
            style={[
              styles.flex_row,
              styles.alg_center,
              styles.mt_medium,
              styles.jus_around,
              styles.mv_medium,
            ]}>
            <View
              style={[
                styles.mv_small,
                {
                  height: 1,
                  elevation: 2,
                  backgroundColor: '#AAAAAA',
                  width: '40%',
                },
              ]}></View>
            <Text>or</Text>
            <View
              style={[
                styles.mv_small,
                {
                  height: 1,
                  elevation: 2,
                  backgroundColor: '#AAAAAA',
                  width: '40%',
                },
              ]}></View>
          </View>
          <PrimaryButton color={Colors.Red500}>
            Sign in with google
          </PrimaryButton>
        </View>

        <View style={[styles.flex_col, styles.jus_center, styles.alg_center]}>
          <LinkButton color={Colors.Text.Primary}>
            Don't have an account?
          </LinkButton>
          <LinkButton color={Colors.Text.Primary}>Register Account</LinkButton>
        </View>
      </View>
    </SafeAreaContainer>
  );
};

export default LoginScreen;
