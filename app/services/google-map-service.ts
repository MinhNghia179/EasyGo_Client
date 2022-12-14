import axios from 'axios';
import { IAddress } from '../interfaces/home-interfaces';
import { GOOGLE_BASE_URL, GOOGLE_REST_API_KEY } from '../variables/app-config';
import { ICoordinates } from './../interfaces/home-interfaces';

export const getCurrentLocationByCoordinates = async (
  payload: ICoordinates,
): Promise<IAddress> => {
  try {
    const response = await axios.get(
      `${GOOGLE_BASE_URL}/Locations/${payload.latitude},${payload.longitude}?key=${GOOGLE_REST_API_KEY}`,
    );
    const addressDetails = response.data.resourceSets[0].resources[0].address;
    if (addressDetails) {
      const shortAddress = addressDetails.addressLine;
      const fullAddress = addressDetails.formattedAddress.replace(
        `${addressDetails.postalCode}`,
        '',
      );
      return {
        shortAddress,
        fullAddress,
        location: payload,
      };
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const autoSuggestLocationBySearchName = async (payload: {
  addressName: string;
  userLocation: ICoordinates;
}) => {
  const { addressName, userLocation } = payload;
  try {
    const response = await axios.get(
      `${GOOGLE_BASE_URL}/Autosuggest?query=${addressName}&userLocation=${userLocation.latitude},${userLocation.longitude}&includeEntityTypes=Address,Place&key=${GOOGLE_REST_API_KEY}`,
    );
    const addresses = response.data.resourceSets[0].resources[0].value;
    console.log(addresses);
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getCurrentLocationByName = async () => {};

export const getRoutes = async () => {};
