import React, { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
} from 'react-native';
import CustomSwitch from '../components/CustomSwitch';

import HeaderTitle from '../components/HeaderTitle';
import { useForm } from '../hooks/useForm';
import { styles } from '../theme/appTheme';

const InputScreen = () => {
  const { form, onChange, isSubscribed } = useForm({
    name: '',
    email: '',
    phone: '',
    isSubscribed: false,
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <View style={[styles.container, styles.globalMargin]}>
          <HeaderTitle title="Inputs" />

          <TextInput
            style={stylesScreen.inputText}
            placeholder="Ingrese su nombre"
            autoCorrect={false}
            autoCapitalize="words"
            onChangeText={value => onChange(value, 'name')}
          />
          <TextInput
            style={stylesScreen.inputText}
            placeholder="Ingrese su email"
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={value => onChange(value, 'email')}
            keyboardType="email-address"
            keyboardAppearance="dark"
          />
          <View style={stylesScreen.switchRow}>
            <Text>Suscribirse</Text>
            <CustomSwitch
              isOn={isSubscribed}
              onChange={value => onChange(value, 'isSubscribed')}
            />
          </View>

          <HeaderTitle title={JSON.stringify(form, null, 2)} />

          <HeaderTitle title={JSON.stringify(form, null, 2)} />

          <TextInput
            style={stylesScreen.inputText}
            placeholder="Ingrese su telefono"
            onChangeText={value => onChange(value, 'phone')}
            keyboardType="phone-pad"
          />
        </View>

        <View style={{ height: 100 }} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default InputScreen;

const stylesScreen = StyleSheet.create({
  inputText: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)',
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  switch: {
    fontSize: 20,
  },
});
