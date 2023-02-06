import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { ALERT_TYPE, Toast } from 'react-native-alert-notification';
import { Divider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import PrimaryButton from '../../../components/Button/PrimaryButton';
import { BottomSheetModal } from '../../../components/Modal';
import { Text } from '../../../components/Text';
import { IService } from '../../../interfaces/home-interfaces';
import { IRootDispatch, IRootState } from '../../../redux/root-store';
import { Colors } from '../../../styles/colors';
import IconSizes from '../../../styles/icon-size';
import styles from '../../../styles/style-sheet';
import { numberWithCommas } from '../../../utils/constant';
import { BookingGuidStep } from '../utils/constant';

interface IProps {
  nextStep: (value: string) => void;
  prevStep: () => void;
}

const SelectServiceSection = (props: IProps) => {
  const { nextStep, prevStep } = props;

  const dispatch = useDispatch<IRootDispatch>();

  const { services, createBookingWizard } = useSelector(
    (state: IRootState) => ({
      services: state.serviceStore.services,
      createBookingWizard: state.bookingStore.createBookingWizard,
    }),
  );

  const [selectedService, setSelectedService] = useState<IService>(null);
  const [paymentMethodModalVisible, setPaymentMethodVisible] =
    useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onConfirm = async () => {
    setIsLoading(true);
    dispatch.bookingStore.setCreateBookingWizard({
      ...createBookingWizard,
      serviceId: selectedService?.id,
      totalPrice: selectedService?.totalPrice,
    });
    try {
      await dispatch.bookingStore.doCreateBookingDetails({});
      nextStep(BookingGuidStep.SEARCHING_RIDE);
    } catch (error) {
      Toast.show({
        type: ALERT_TYPE.DANGER,
        title: 'Lỗi!',
        textBody: 'Rất tiếc, đã xảy ra lỗi! Vui lòng thử lại.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Text textAlign="center" fontWeight="bold" type="caption1">
        Chọn một dịch vụ hiện có hoặc cuộn lên để biết thêm
      </Text>
      <View style={[styles.pv_small]}>
        <View
          style={[
            styles.flex_row,
            styles.rounded_small,
            styles.p_small,
            styles.mv_small,
            {
              backgroundColor: Colors.Green100,
            },
          ]}>
          <Icon
            style={[styles.mh_x2_small]}
            name="information-circle-outline"
            size={IconSizes.x_small}
            color={Colors.Blue500}
          />
          <View
            style={[
              {
                flexShrink: 1,
              },
            ]}>
            <Text type="caption1" color={Colors.Text.GreySecondary}>
              Giá dịch vụ đã được tính dựa trên quãng đường di chuyển
            </Text>
          </View>
        </View>
        <Text fontWeight="bold">Tiêu chuẩn</Text>
        {services &&
          services.length &&
          services.map(one => (
            <>
              <TouchableOpacity
                key={one?.id}
                onPress={() => setSelectedService(one)}
                style={[
                  styles.flex_row,
                  styles.alg_center,
                  styles.jus_between,
                  styles.p_12,
                  styles.rounded_small,
                  {
                    backgroundColor:
                      selectedService?.id === one?.id
                        ? Colors.Grey000
                        : Colors.White,
                  },
                ]}>
                <View
                  style={[
                    styles.flex_col,
                    {
                      flexShrink: 1,
                    },
                  ]}>
                  <View style={[styles.flex_row, styles.alg_center]}>
                    <Text
                      color={Colors.Text.GreySecondary}
                      type="footnote"
                      fontWeight="bold">
                      {one.name}
                    </Text>
                    <Icon
                      style={[styles.mh_x2_small]}
                      name="information-circle-outline"
                      size={IconSizes.x_small}
                      color={Colors.Blue500}
                    />
                  </View>
                  <Text
                    color={Colors.Text.GreySecondary}
                    type="caption2"
                    numberOfLines={1}>
                    {one.describe}
                  </Text>
                </View>
                <Text
                  fontWeight="bold"
                  type="footnote"
                  textDecorationLine="underline"
                  color={Colors.Text.GreySecondary}>
                  {numberWithCommas(one.totalPrice)}đ
                </Text>
              </TouchableOpacity>
              <Divider />
            </>
          ))}
        <Text fontWeight="bold">Khác</Text>
        <View style={[styles.ph_small]}>
          <Text type="caption1" color={Colors.Text.GreySecondary}>
            Hiện tại không có dịch vụ nào khả dụng
          </Text>
        </View>
      </View>

      <View
        style={[
          styles.p_small,
          styles.rounded_small,
          styles.b_small,
          {
            borderColor: Colors.Blue600,
          },
        ]}>
        <View
          style={[
            styles.mv_small,
            styles.flex_row,
            styles.jus_between,
            styles.alg_center,
          ]}>
          <View style={[styles.flex_row]}>
            <Icon
              style={[styles.mh_small]}
              name="md-card-outline"
              size={IconSizes.x_small}
              color={Colors.Black}
            />
            <Text
              fontWeight="bold"
              type="footnote"
              color={Colors.Text.GreySecondary}>
              Thanh toán (Không có thẻ vào lúc này)
            </Text>
          </View>
          <Icon
            name="md-reorder-three-outline"
            size={IconSizes.x_small}
            color={Colors.Black}
            onPress={() => setPaymentMethodVisible(true)}
          />
        </View>

        <View style={[styles.flex_row]}>
          <PrimaryButton
            onPress={prevStep}
            color={Colors.Red400}
            style={[styles.flex_1]}>
            Chọn Điểm đi/đến
          </PrimaryButton>
          <View style={[styles.mh_x2_small]}></View>
          <PrimaryButton
            style={[styles.flex_1]}
            color={Colors.Green}
            onPress={onConfirm}
            loading={isLoading}
            disabled={!selectedService}>
            Tạo cuốc xe
          </PrimaryButton>
        </View>
      </View>

      <BottomSheetModal
        onClose={() => setPaymentMethodVisible(false)}
        isVisible={paymentMethodModalVisible}
        title="Phương thức thanh toán"
        description="Chọn phương thức thanh toán cho quá trình đặt phòng">
        <View style={[styles.p_medium]}>
          <Text>Hiện tại không có bất kỳ thẻ nào!</Text>
        </View>
      </BottomSheetModal>
    </>
  );
};

export default SelectServiceSection;
