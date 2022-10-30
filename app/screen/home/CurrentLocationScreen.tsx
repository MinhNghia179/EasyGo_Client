import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import GhostButton from '../../components/Button/GhostButton';
import LinkButton from '../../components/Button/LinkButton';
import PrimaryButton from '../../components/Button/PrimaryButton';
import BingMap from '../../components/Map/Map';
import { ActionModal } from '../../components/Modal';
import { Text } from '../../components/Text';
import { SafeAreaContainer } from '../../components/View';
import { Route, STEP_DETAILS } from '../../constants/constant';
import navigationService from '../../navigation/navigation-service';
import { IRootDispatch, IRootState } from '../../redux/root-store';
import { Colors } from '../../styles/colors';
import styles from '../../styles/style-sheet';
import SelectLocationDetailsSection from './components/SelectLocationDetailsSection';
import PaymentDetails from './steps/PaymentDetails';
import PickUpLocation from './steps/PickUpLocation';
import SelectService from './steps/SelectService';
interface IProps {
  navigation: StackNavigationProp<any, 'Home'>;
}

const CurrentLocationScreen = (props: IProps) => {
  const dispatch = useDispatch<IRootDispatch>();

  const [step, setStep] = useState<string>(STEP_DETAILS.PICK_UP_LOCATION);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectAddressModalVisible, setSelectAddressModalVisible] =
    useState<boolean>(false);
  const [visibleConfirmModal, setVisibleConfirmModal] =
    useState<boolean>(false);

  const {
    currentLocation,
    destination,
    routes,
    serviceSelected,
    services,
    booking,
  } = useSelector((state: IRootState) => ({
    currentLocation: state.homeStore.currentLocation,
    destination: state.homeStore.destination,
    routes: state.homeStore.routes,
    serviceSelected: state.homeStore.serviceSelected,
    services: state.homeStore.services,
    booking: state.homeStore.booking,
  }));

  const fetchData = async () => {
    try {
      await Promise.all([dispatch.homeStore.getServices()]);
    } catch (error) {
      console.error(error);
    }
  };

  const onRemoveState = () => {
    dispatch.homeStore.setRemoveState();
    navigationService.navigate(Route.HOME_DETAIL_SCREEN, {});
    setVisibleConfirmModal(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderStickyBottom = () => {
    switch (step) {
      case STEP_DETAILS.PICK_UP_LOCATION: {
        return (
          <PickUpLocation
            currentLocation={currentLocation}
            destination={destination}
            onPressShowModal={() => setSelectAddressModalVisible(true)}
            onConfirm={() => setStep(STEP_DETAILS.SELECT_SERVICE)}
          />
        );
      }
      case STEP_DETAILS.SELECT_SERVICE: {
        return (
          <SelectService
            services={services}
            onBack={() => setStep(STEP_DETAILS.PICK_UP_LOCATION)}
            onConfirm={() => setStep(STEP_DETAILS.PAYMENT)}
          />
        );
      }
      case STEP_DETAILS.PAYMENT: {
        return (
          <PaymentDetails
            currentLocation={currentLocation}
            destination={destination}
            services={serviceSelected}
            booking={booking}
            onClose={() => setStep(STEP_DETAILS.SELECT_SERVICE)}
            onVisibleModal={() => setSelectAddressModalVisible(true)}
          />
        );
      }
    }
  };

  return (
    <SafeAreaContainer
      loadingView={isLoading}
      stickyBottom={
        <View
          style={[
            styles.p_medium,
            {
              backgroundColor: Colors.White,
            },
          ]}>
          <View style={[styles.flex_row, styles.jus_end]}>
            <LinkButton
              color={Colors.Red500}
              onPress={() => setVisibleConfirmModal(true)}>
              Remove
            </LinkButton>
          </View>
          {renderStickyBottom()}
        </View>
      }>
      <BingMap
        routes={routes}
        location={{ lat: currentLocation?.lat, long: currentLocation?.long }}
      />

      <ActionModal isVisible={selectAddressModalVisible} title="Easy Go">
        <SelectLocationDetailsSection
          onClose={() => setSelectAddressModalVisible(false)}
        />
      </ActionModal>
      <ActionModal isVisible={visibleConfirmModal} title="Delete booking">
        <Text type="subhead">Remove booking state and back to home!</Text>
        <View style={[styles.flex_row, styles.jus_end, styles.mt_medium]}>
          <GhostButton
            style={[styles.mr_small]}
            onPress={() => setVisibleConfirmModal(false)}>
            No
          </GhostButton>
          <PrimaryButton color={Colors.Red500} onPress={onRemoveState}>
            Yes
          </PrimaryButton>
        </View>
      </ActionModal>
    </SafeAreaContainer>
  );
};

export default CurrentLocationScreen;
