import { map } from 'lodash';
import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch } from 'react-redux';
import PrimaryButton from '../../../components/Button/PrimaryButton';
import { Text } from '../../../components/Text';
import { IService } from '../../../interfaces/home-interfaces';
import { IRootDispatch } from '../../../redux/root-store';
import { Colors } from '../../../styles/colors';
import IconSizes from '../../../styles/icon-size';
import styles from '../../../styles/style-sheet';

interface IProps {
  services: IService[];
  onBack?: () => void;
  onConfirm?: () => void;
}

const SelectService = (props: IProps) => {
  const { services, onConfirm, onBack } = props;

  const dispatch = useDispatch<IRootDispatch>();

  const [serviceSelected, setServiceSelected] = useState<IService>(null);

  const onHandleConfirm = async () => {
    dispatch.homeStore.setServiceSelected(serviceSelected);
    try {
      await dispatch.homeStore.getCalculatePrice(serviceSelected);
      onConfirm?.();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Text fontWeight="bold" type="footnote">
        Select Service
      </Text>
      <View>
        {map(services, one => {
          const isSelected = one.id_service === serviceSelected?.id_service;
          return (
            <>
              <TouchableOpacity
                style={[
                  styles.mv_small,
                  styles.p_medium,
                  styles.flex_row,
                  styles.jus_between,
                  styles.rounded_small,
                  {
                    backgroundColor: isSelected
                      ? Colors.Green100
                      : Colors.Grey100,
                  },
                ]}
                onPress={() => setServiceSelected(one)}>
                <View style={[styles.flex_row, styles.alg_center]}>
                  <Icon
                    style={[styles.mr_small]}
                    name="emoji-transportation"
                    size={IconSizes.small}
                    color={Colors.Red300}
                  />
                  <Text fontWeight="bold" type="subhead">
                    {one.name}
                  </Text>
                </View>
                <Text fontWeight="bold" type="footnote">
                  {one.price} vnđ
                </Text>
              </TouchableOpacity>
            </>
          );
        })}
        <View style={[styles.flex_row, styles.jus_around, styles.alg_center]}>
          <PrimaryButton
            icon={
              <Icon
                style={[styles.mr_small]}
                name="arrow-back-ios"
                size={IconSizes.x_small}
                color={Colors.White}
              />
            }
            onPress={onBack}
            style={[styles.mt_medium]}
            color={Colors.Blue400}>
            Re-pick up location
          </PrimaryButton>
          <PrimaryButton
            icon={
              <Icon
                style={[styles.mr_small]}
                name="chevron-right"
                size={IconSizes.x_small}
                color={Colors.White}
              />
            }
            iconPosition="right"
            disabled={!serviceSelected}
            onPress={onHandleConfirm}
            style={[styles.mt_medium]}
            color={Colors.Green500}>
            Next
          </PrimaryButton>
        </View>
      </View>
    </>
  );
};

export default SelectService;
