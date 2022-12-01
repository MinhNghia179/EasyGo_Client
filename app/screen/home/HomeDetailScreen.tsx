import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Divider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Entypo';
import { useSelector } from 'react-redux';
import { Avatar } from '../../components/Avatar';
import InputText from '../../components/Input/InputText';
import { Text } from '../../components/Text';
import { SafeAreaContainer } from '../../components/View';
import { IRootState } from '../../redux/root-store';
import { wp } from '../../services/response-screen-service';
import { Colors } from '../../styles/colors';
import IconSizes from '../../styles/icon-size';
import styles from '../../styles/style-sheet';
import AddressVisitedRecentlyListing from './components/AddressVisitedRecentlyListing';
import HeaderDetailsSection from './components/HeaderDetailsSection';
interface IProps {}

const HomeDetailScreen = (props: IProps) => {
  const {} = props;

  const [address, setAddress] = useState<string>('');
  const { AddressVisitedRecently } = useSelector(
    (state: IRootState) => state.homeStore,
  );

  return (
    <SafeAreaContainer
      contentType="scrollview"
      backgroundColor={Colors.Grey000}>
      <HeaderDetailsSection onPressShowMap={() => {}} />
      <View style={[styles.p_medium]}>
        <Text type="headline" fontWeight="bold" color={Colors.BlueGrey800}>
          EASY GO
        </Text>
        <View style={[styles.mv_medium, styles.flex_row, styles.alg_center]}>
          <View>
            <Avatar
              style={[styles.rounded]}
              imageSize={wp(35)}
              source={{ uri: 'https://randomuser.me/api/portraits/men/36.jpg' }}
              position="bottom-left"
            />
          </View>
          <View style={[styles.ml_small]}>
            <Text type="callout">
              Hi, <Text fontWeight="bold">Minh Nghia</Text>.
            </Text>
            <Text>Let's discover a new adventure!</Text>
          </View>
        </View>
        <View>
          <InputText
            style={[styles.shadow]}
            leftIcon={
              <Icon
                name="location-pin"
                size={IconSizes.small}
                color={Colors.Red300}
              />
            }
            placeholder="Where you want to go?"
            value={address}
            onChange={setAddress}
          />
        </View>
        <Divider style={[styles.mv_small]} color={Colors.Black} />
        <AddressVisitedRecentlyListing addressList={AddressVisitedRecently} />
        <Divider style={[styles.mv_small]} color={Colors.Black} />
        <Text fontWeight="bold" type="subhead">
          Add more ways to move
        </Text>

        <TouchableOpacity
          style={[
            styles.p_medium,
            styles.rounded,
            styles.mt_medium,
            styles.mb_medium,
            {
              backgroundColor: Colors.Green100,
            },
          ]}>
          <Text type="footnote">Car rental by the hour</Text>
        </TouchableOpacity>

        <View style={[styles.flex_row, styles.jus_between, styles.alg_center]}>
          <Text fontWeight="bold" type="subhead">
            Move to favorite places
          </Text>
          <Icon
            name="chevron-with-circle-right"
            color={Colors.Black}
            size={IconSizes.x_small}
          />
        </View>
      </View>
    </SafeAreaContainer>
  );
};

export default HomeDetailScreen;
