import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WidgetRenderer } from './widget';
import { router } from "expo-router";

export const ScreenRenderer = ({ screen }) => {
  const onPress = (widget) => {
    if (widget.onPress) {
      widget.onPress()
    } else if (widget.action) {
      if (widget.action === 'back') {
        router.back()
      }
    }
  }

  return (
    <View style={[styles.screenContainer, screen.style]}>
      {screen.widgets.map((widget) => (
        <WidgetRenderer key={widget.id} widget={widget}
        onPress={() => {
          onPress(widget)
        }} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
});