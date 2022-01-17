import React from 'react';
import { Alert, Button, View } from 'react-native';
import prompt from 'react-native-prompt-android';
import HeaderTitle from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';

const AlertScreen = () => {
  const showAlert = () =>
    Alert.alert(
      'Titulo',
      'Cuerpo Alerta',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'destructive',
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: true },
    );

  const showPrompt = () => {
    // Alert.prompt(
    //   '¿Estas seguro?',
    //   'Esta accion no se puede revertir',
    //   (valor: string) => console.log('info', valor),
    //   'plain-text',
    //   'Hola mundo',
    //   'number-pad',
    // );

    prompt(
      'Enter password',
      'Enter your password to claim your $1.5B in lottery winnings',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: password => console.log('OK Pressed, password: ' + password),
        },
      ],
      {
        type: 'secure-text',
        cancelable: false,
        defaultValue: 'test',
        placeholder: 'placeholder',
      },
    );
  };

  return (
    <View style={[styles.container, styles.globalMargin]}>
      <HeaderTitle title="Alerts" />
      <Button title="Show Alert" onPress={showAlert} />
      <View style={{ height: 10 }} />
      {/* Prompt Solo funciona en IOS nativamente*/}
      <Button title="Show Prompt" onPress={showPrompt} />
    </View>
  );
};

export default AlertScreen;
