import React, { useState } from 'react';
import { View } from 'react-native';
import LinkButton from '../../../components/Button/LinkButton';
import PrimaryButton from '../../../components/Button/PrimaryButton';
import InputText from '../../../components/Input/InputText';
import { Colors } from '../../../styles/colors';
import IconSizes from '../../../styles/icon-size';
import styles from '../../../styles/style-sheet';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text } from '../../../components/Text';

interface IProps {
  onSelectLoginWithPhoneNumber: () => void;
}

const FormLogin = (props: IProps) => {
  const { onSelectLoginWithPhoneNumber } = props;

  const [emailAddress, setEmailAddress] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <>
      <PrimaryButton
        color={Colors.Green600}
        disable={isLoading}
        onPress={onSelectLoginWithPhoneNumber}>
        Login with mobile number
      </PrimaryButton>

      <View
        style={[
          styles.flex_row,
          styles.alg_center,
          styles.jus_around,
          styles.mv_large,
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
        <Text type="subhead">OR</Text>
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

      <View style={[styles.flex_col, styles.jus_center]}>
        <InputText
          placeholder="Email address"
          value={emailAddress}
          onChange={setEmailAddress}
          leftIcon={<Icon name="email" size={IconSizes.x_small} />}
        />
        <View style={[styles.mv_medium]}>
          <InputText
            placeholder="Password"
            value={password}
            onChange={setPassword}
            leftIcon={<Icon name="lock" size={IconSizes.x_small} />}
          />
        </View>
        <PrimaryButton color={Colors.Green600} loading={isLoading}>
          Login
        </PrimaryButton>
        <View style={[styles.flex, styles.alg_center, styles.mv_large]}>
          <LinkButton type="footnote" color={Colors.Grey500}>
            Forgot your password?
          </LinkButton>
        </View>
      </View>
    </>
  );
};

export default FormLogin;
