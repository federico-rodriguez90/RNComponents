import React from 'react';
import { View, FlatList } from 'react-native';

import FlatListMenuItem from '../components/FlatListMenuItem';
import HeaderTitle from '../components/HeaderTitle';
import { ItemSeparator } from '../components/ItemSeparator';
import { menuItems } from '../data/menuItem';
import { styles } from '../theme/appTheme';

const HomeScreen = () => {
  return (
    <View style={[styles.container, styles.globalMargin]}>
      <FlatList
        data={menuItems}
        renderItem={({ item }) => <FlatListMenuItem menuItem={item} />}
        keyExtractor={item => item.name}
        ListHeaderComponent={() => <HeaderTitle title="Opciones de Menu" />}
        ItemSeparatorComponent={() => <ItemSeparator />}
      />
    </View>
  );
};

export default HomeScreen;
