import { View, Text, Image, SafeAreaView, FlatList, StatusBar } from 'react-native';

import { COLORS, FONTS, SIZES, assets } from '../constants';
import { CircleButton, RectButton, SubInfo, FocusedStatusBar, DetailsDesc, DetailsBid } from '../components'

const Details = ({ route, navigation}) => {
  const { data } = route.params;
  return (
    <SafeAreaView style={{ flex: 1}}>
      <FocusedStatusBar
       barStyle="dark-content"
       backgroundColor="transparent"
       translucent={true}
      />
    </SafeAreaView>
  )
}

export default Details