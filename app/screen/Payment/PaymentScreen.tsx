import React, { useState } from 'react';
import { View } from 'react-native';
import { Divider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import LinkButton from '../../components/Button/LinkButton';
import { Text } from '../../components/Text';
import { SafeAreaContainer } from '../../components/View';
import { Colors } from '../../styles/colors';
import IconSizes from '../../styles/icon-size';
import styles from '../../styles/style-sheet';
import PaymentCardItem from './components/PaymentCardItem';

const PaymentScreen = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <SafeAreaContainer
      left={
        <Text fontWeight="bold" type="headline">
          Payment
        </Text>
      }
      right={
        <Icon name="setting" size={IconSizes.small} style={[styles.mr_small]} />
      }>
      <View style={[styles.flex_col, styles.p_medium]}>
        <View style={[styles.pv_small, styles.mt_medium]}>
          <Text type="callout" fontWeight="bold">
            Recommended for you
          </Text>

          <View style={[styles.flex_col]}>
            <PaymentCardItem
              icon={
                <Icon
                  name="minussquareo"
                  size={IconSizes.x_small}
                  color={Colors.Green500}
                  style={[styles.mr_small]}
                />
              }
              description="Charge your phone to stay connected"
            />
            <PaymentCardItem
              icon={
                <Icon
                  name="swap"
                  size={IconSizes.x_small}
                  color={Colors.Green500}
                  style={[styles.mr_small]}
                />
              }
              description="Pay bills anytime"
            />
          </View>
        </View>

        <Divider />

        <View style={[styles.mt_medium]}>
          <Text type="callout" fontWeight="bold">
            Recent transactions
          </Text>
          <View
            style={[
              styles.flex_col,
              styles.alg_center,
              styles.jus_center,
              styles.mt_medium,
            ]}>
            <Text type="footnote">There is no recent activity</Text>
            <LinkButton color={Colors.Blue600} onPress={() => {}}>
              View previous transactions
            </LinkButton>
          </View>
        </View>
      </View>
    </SafeAreaContainer>
  );
};

export default PaymentScreen;
