import React from 'react';
import { View, Text, Image, Button } from 'react-native';

export const WidgetRenderer = ({ widget, onPress }) => {
  switch (widget.type) {
    case 'text':
      return <Text style={widget.style}>{widget.content}</Text>;
    case 'image':
      return <Image style={widget.style} source={widget.source} />;
    case 'button':
      // Here you would need to implement or map the onPress function based on your application's logic
      return <Button title={widget.content} onPress={onPress} />;
    case 'divider':
      return <View style={widget.style}/>
    default:
      return <View />;
  }
};