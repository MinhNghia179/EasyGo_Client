import React, { useState } from 'react';
import { Tab, TabView } from 'react-native-elements';
import { Text } from '../../components/Text';
import { SafeAreaContainer } from '../../components/View';
import { Colors } from '../../styles/colors';
import styles from '../../styles/style-sheet';
interface IProps {}

export enum ActivityTabPage {
  Complete = 0,
  Activity = 1,
  Cancel = 2,
}

const ActivityScreen = (props: IProps) => {
  const {} = props;

  const [selectedTabPage, setSelectedTabPage] = useState<ActivityTabPage>(0);

  const onChangeTab = () => {};

  return (
    <SafeAreaContainer
      contentType="scrollView"
      title="Ride History"
      headerBordered
      leftIconName="back">
      <Tab
        value={selectedTabPage}
        onChange={setSelectedTabPage}
        indicatorStyle={{
          backgroundColor: Colors.Green400,
        }}>
        {['Complete', 'Activity', 'Cancel'].map((tab, index) => {
          return (
            <Tab.Item
              title={tab}
              key={index}
              titleStyle={[styles.fs_11]}
              containerStyle={[
                {
                  backgroundColor: Colors.White,
                },
              ]}
            />
          );
        })}
      </Tab>
      <TabView value={selectedTabPage} onChange={setSelectedTabPage}>
        <TabView.Item>
          <Text>Recent</Text>
        </TabView.Item>
        <TabView.Item>
          <Text>Favorite</Text>
        </TabView.Item>
        <TabView.Item>
          <Text>Cart</Text>
        </TabView.Item>
      </TabView>
    </SafeAreaContainer>
  );
};

export default ActivityScreen;
