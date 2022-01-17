import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { MenuItem } from '../interfaces/appInterfaces';

interface Props {
  menuItem: MenuItem;
}

const FlatListMenuItem = ({ menuItem }: Props) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => navigation.navigate(menuItem.component as any)}>
      <View style={styles.container}>
        <Icon name={menuItem.icon} size={25} color="#5856D6" />
        <Text style={styles.itemText}>{menuItem.name}</Text>
        <View style={{ flex: 1 }} />
        <Icon
          style={styles.chevron}
          name="chevron-forward-outline"
          size={23}
          color="#5856D6"
        />
      </View>
    </TouchableOpacity>
  );
};

export default FlatListMenuItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  itemText: {
    textAlign: 'center',
    fontSize: 16,
    alignSelf: 'center',
    marginLeft: 10,
  },
  chevron: {},
});
