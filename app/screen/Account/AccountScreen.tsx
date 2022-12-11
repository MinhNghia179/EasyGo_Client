import React from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import { Avatar } from '../../components/Avatar';
import LinkButton from '../../components/Button/LinkButton';
import CardItem from '../../components/Card/CardItem';
import { Text } from '../../components/Text';
import { SafeAreaContainer } from '../../components/View';
import { Route } from '../../constants/constant';
import navigationService from '../../navigation/navigation-service';
import { IRootDispatch } from '../../redux/root-store';
import { Colors } from '../../styles/colors';
import styles from '../../styles/style-sheet';

const AccountScreen = () => {
  const dispatch = useDispatch<IRootDispatch>();

  const onLogOut = async () => {
    try {
      dispatch.authStore.doSignOut();
      navigationService.navigate(Route.LOGIN, {});
    } catch (error) {
      console.error(error);
    }
  };

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
            <LinkButton onPress={onLogOut}>
              <Text type="footnote" color={Colors.Red500} fontWeight="bold">
                Log out
              </Text>
            </LinkButton>
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
