import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Divider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import PrimaryButton from '../../../components/Button/PrimaryButton';
import { Text } from '../../../components/Text';
import { IRootDispatch, IRootState } from '../../../redux/root-store';
import { Colors } from '../../../styles/colors';
import IconSizes from '../../../styles/icon-size';
import styles from '../../../styles/style-sheet';

interface IProps {
  nextStep: () => void;
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

  const onConfirm = () => {
    dispatch.bookingStore.setCreateBookingWizard({
      ...createBookingWizard,
      serviceId: selectedService,
    });
    nextStep();
  };

  return (
    <>
      <Text textAlign="center" fontWeight="bold" type="caption1">
        Choose a ride, or scroll up for more
      </Text>
      <View style={[styles.pv_small]}>
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
                        ? Colors.Blue100
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
                      color={Colors.Text.Primary}
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
                <Text fontWeight="bold" type="footnote">
                  {one.price}đ
                </Text>
              </TouchableOpacity>
              <Divider />
            </>
          ))}
      </View>

      <View
        style={[
          styles.flex_row,
          styles.p_small,
          styles.rounded_small,
          styles.b_small,
          {
            borderColor: Colors.Blue600,
          },
        ]}>
        <PrimaryButton
          onPress={prevStep}
          color={Colors.Red500}
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
    </>
  );
};

export default SelectServiceSection;
