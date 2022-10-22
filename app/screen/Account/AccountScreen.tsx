import React from 'react';
import { View } from 'react-native';
import { Avatar } from '../../components/Avatar';

import CardItem from '../../components/Card/CardItem';
import { Text } from '../../components/Text';
import { SafeAreaContainer } from '../../components/View';
import { Colors } from '../../styles/colors';
import styles from '../../styles/style-sheet';

const AccountScreen = () => {
  return (
    <SafeAreaContainer>
      <View style={[styles.p_medium]}>
        <View style={[styles.flex, styles.flex_row, styles.alg_center]}>
          <Avatar
            imageSize={60}
            rounded
            source={{ uri: 'https://randomuser.me/api/portraits/men/36.jpg' }}
            position="bottom-left"
          />
          <View style={[styles.ml_medium]}>
            <Text fontWeight="bold" type="callout">
              Minh Nghĩa
            </Text>
            <View>
              <Text type="caption1">Chỉnh sửa tài khoản</Text>
            </View>
          </View>
        </View>
        <View>
          <View style={[styles.mt_large]}>
            <Text type="callout" color={Colors.Text.Primary} fontWeight="bold">
              Ưu đãi và tiết kiệm
            </Text>
            <CardItem hasBorderRadius underline description="Ưu đãi" />
            <CardItem hasBorderRadius underline description="Gói hội viên" />
            <CardItem hasBorderRadius underline description="Thử thách" />
            <CardItem hasBorderRadius underline description="Giới thiệu" />
          </View>
          <View style={[styles.mt_large]}>
            <Text type="callout" color={Colors.Text.Primary} fontWeight="bold">
              Tài khoản của tôi
            </Text>

            <CardItem
              hasBorderRadius
              underline
              description="Ưu đãi cho thành viên"
            />
            <CardItem hasBorderRadius underline description="đã đặt trước" />
            <CardItem hasBorderRadius underline description="Saved Places" />
            <CardItem
              hasBorderRadius
              underline
              description="Số liên hệ S.O.S"
            />
            <CardItem
              hasBorderRadius
              underline
              description="Tài khoản doanh nghiệp"
            />
          </View>
          <View style={[styles.mt_large]}>
            <Text type="callout" color={Colors.Text.Primary} fontWeight="bold">
              Tổng quát
            </Text>
            <CardItem
              hasBorderRadius
              underline
              description="Trung tâm trợ giúp"
            />
            <CardItem hasBorderRadius underline description="Cài đặt" />
            <CardItem
              hasBorderRadius
              underline
              description="Chia sẻ phản hồi"
            />
          </View>
          <View style={[styles.mt_large]}>
            <Text type="callout" color={Colors.Text.Primary} fontWeight="bold">
              Cơ hội
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaContainer>
  );
};

export default AccountScreen;
