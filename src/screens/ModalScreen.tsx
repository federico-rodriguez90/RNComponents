import React, { useState } from 'react';
import { Button, Modal, Text, View } from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';

const ModalScreen = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Modal" />
      <Button
        title="Abrir Modal"
        onPress={() => {
          setIsVisible(true);
        }}
      />

      <Modal animationType="fade" visible={isVisible} transparent>
        {/* Background Negro */}
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0,0,0,0.3)',
          }}>
          {/* Contenido del modal */}
          <View
            style={{
              backgroundColor: 'white',
              width: 200,
              height: 200,
              justifyContent: 'center',
              alignItems: 'center',
              shadowOffset: { width: 0, height: 10 },
              shadowOpacity: 0.25,
              elevation: 10,
              borderRadius: 5,
            }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Modal</Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '300',
                marginBottom: 20,
              }}>
              Modal Abierto Cuerpo
            </Text>
            <Button
              title="Cerrar Modal"
              onPress={() => {
                setIsVisible(false);
              }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalScreen;
