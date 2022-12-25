import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Divider } from 'react-native-elements';
import Toast from 'react-native-root-toast';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import PrimaryButton from '../../../components/Button/PrimaryButton';
import { BottomSheetModal } from '../../../components/Modal';
import { Text } from '../../../components/Text';
import { IRootDispatch, IRootState } from '../../../redux/root-store';
import { Colors } from '../../../styles/colors';
import IconSizes from '../../../styles/icon-size';
import styles from '../../../styles/style-sheet';
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

  const [selectedService, setSelectedService] = useState<number>(
    null || createBookingWizard?.serviceId,
  );
  const [paymentMethodModalVisible, setPaymentMethodVisible] =
    useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onConfirm = async () => {
    setIsLoading(true);
    dispatch.bookingStore.setCreateBookingWizard({
      ...createBookingWizard,
      serviceId: selectedService,
    });
    try {
      nextStep(BookingGuidStep.SEARCHING_RIDE);
      setTimeout(() => {
        nextStep(BookingGuidStep.DRIVER_INFO);
      }, 3000);
    } catch (error) {
      Toast.show(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Text textAlign="center" fontWeight="bold" type="caption1">
        Choose a ride, or scroll up for more
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
              Service price has been calculated based on the distance traveled
            </Text>
          </View>
        </View>
        <Text fontWeight="bold">Standard</Text>
        {services &&
          services.length &&
          services.map(one => (
            <>
              <TouchableOpacity
                key={one.id}
                onPress={() => setSelectedService(one.id)}
                style={[
                  styles.flex_row,
                  styles.alg_center,
                  styles.jus_between,
                  styles.p_12,
                  styles.rounded_small,
                  {
                    backgroundColor:
                      selectedService === one?.id
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
                  color={Colors.Text.GreySecondary}>
                  {one.price}đ
                </Text>
              </TouchableOpacity>
              <Divider />
            </>
          ))}
        <Text fontWeight="bold">Economy</Text>
        <View style={[styles.ph_small]}>
          <Text type="caption1" color={Colors.Text.GreySecondary}>
            There are currently no services available
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
              Payment (No card at the moment)
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
            Prev Step
          </PrimaryButton>
          <View style={[styles.mh_x2_small]}></View>
          <PrimaryButton
            style={[styles.flex_1]}
            color={Colors.Green}
            onPress={onConfirm}
            disabled={!selectedService}>
            Confirm Pick Up
          </PrimaryButton>
        </View>
      </View>

      <BottomSheetModal
        onClose={() => setPaymentMethodVisible(false)}
        isVisible={paymentMethodModalVisible}
        title="Payment Methods"
        description="Choose a payment method for the booking process"
      />
    </>
  );
};

export default SelectServiceSection;
