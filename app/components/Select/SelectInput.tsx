import React, { ReactElement, useRef, useState } from 'react';
import { FlatList, Modal, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Colors } from '../../styles/colors';
import IconSizes from '../../styles/icon-size';
import styles from '../../styles/style-sheet';
import { Text } from '../Text';

interface IProps {
  label?: string;
  height?: number;
  data?: Array<any>;
  onSelect?: (value) => void;
}

const SelectInput = (props: IProps) => {
  const DropdownButton: any = useRef();

  const { height = 40, label, data, onSelect } = props;

  const [visible, setVisible] = useState<boolean>(false);
  const [selected, setSelected] = useState(undefined);
  const [dropdownTop, setDropdownTop] = useState<number>(0);

  const openDropdown = () => {
    DropdownButton.current.measure((_fx, _fy, _w, h, _px, py) => {
      setDropdownTop(py + h);
    });
    setVisible(true);
  };

  const onItemPress = item => {
    setSelected(item);
    onSelect(item);
    setVisible(false);
  };

  const renderDropDown = (): ReactElement => {
    return (
      <Modal visible={visible} transparent animationType="none">
        <TouchableOpacity
          style={[styles.full]}
          onPress={() => setVisible(false)}>
          <View
            style={[
              styles.absolute,
              styles.full_width,
              {
                backgroundColor: Colors.White,
                top: dropdownTop,
              },
            ]}>
            <FlatList
              data={data}
              renderItem={(item: any) => (
                <TouchableOpacity
                  onPress={onItemPress}
                  style={[
                    styles.ph_small,
                    styles.pv_small,
                    {
                      borderBottomWidth: 1,
                    },
                  ]}>
                  {item.label}
                </TouchableOpacity>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    );
  };

  return (
    <TouchableOpacity
      activeOpacity={1}
      ref={DropdownButton}
      onPress={visible ? () => setVisible(false) : openDropdown}
      style={[
        styles.flex,
        styles.flex_row,
        styles.alg_center,
        styles.ph_small,
        styles.jus_between,
        {
          backgroundColor: Colors.Grey000,
          zIndex: 1,
          height: height,
        },
      ]}>
      {renderDropDown()}
      <Text>{(selected && selected.label) || label}</Text>
      <Icon
        name={visible ? 'chevron-up' : 'chevron-down'}
        size={IconSizes.x_small}
      />
    </TouchableOpacity>
  );
};

export default SelectInput;
