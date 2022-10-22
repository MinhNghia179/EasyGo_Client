import React from 'react';
import { View } from 'react-native';
import { Divider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import LinkButton from '../../components/Button/LinkButton';
import CardItem from '../../components/Card/CardItem';
import { Text } from '../../components/Text';
import { SafeAreaContainer } from '../../components/View';
import { Colors } from '../../styles/colors';
import IconSizes from '../../styles/icon-size';
import styles from '../../styles/style-sheet';

const PaymentScreen = () => {
  return (
    <SafeAreaContainer
      left={
        <Text fontWeight="bold" color={Colors.Text.Primary} type="headline">
          Thanh toán
        </Text>
      }
      right={
        <Icon name="setting" size={IconSizes.small} style={[styles.mr_small]} />
      }>
      <View style={[styles.flex, styles.flex_col, styles.p_medium]}>
        <View style={[styles.pv_small]}>
          <Text type="callout" color={Colors.Text.Primary} fontWeight="bold">
            Đề xuất cho bạn
          </Text>

          <View style={[styles.mt_small]}>
            <CardItem
              hasShadow
              leftIcon={
                <Icon
                  name="minussquareo"
                  size={IconSizes.x_small}
                  color={Colors.Green500}
                  style={[styles.mr_small]}
                />
              }
              style={[styles.mt_medium, styles.mb_medium]}
              hasBorderRadius
              description="Nạp tiền ĐT để giữ kết nối"
            />

            <CardItem
              hasShadow
              leftIcon={
                <Icon
                  name="swap"
                  size={IconSizes.x_small}
                  color={Colors.Green500}
                  style={[styles.mr_small]}
                />
              }
              hasBorderRadius
              description="Thanh toán hóa đơn mọi lúc"
            />
          </View>
        </View>

        <View style={[styles.pv_medium]}>
          <Divider />
        </View>

        <View>
          <Text type="callout" color={Colors.Text.Primary} fontWeight="bold">
            Giao dịch gần đây
          </Text>
          <View
            style={[
              styles.flex,
              styles.flex_col,
              styles.alg_center,
              styles.jus_center,
              styles.mt_medium,
            ]}>
            <Text type="footnote">Không có hoạt động nào gần đây</Text>
            <LinkButton color={Colors.Blue600} onPress={() => {}}>
              Xem các giao dịch trước đó
            </LinkButton>
          </View>
        </View>
      </View>
    </SafeAreaContainer>
  );
};

export default PaymentScreen;
