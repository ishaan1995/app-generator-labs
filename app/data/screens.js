export const defaultScreens = {
  id: 'screen1',
  style: {
    padding: 16,
  },
  widgets: [
    {
      id: 'text1',
      type: 'text',
      content: 'User Details',
      style: { fontSize: 20, color: 'black', alignSelf: 'center' },
    },
    {
      id: 'text2',
      type: 'text',
      content: 'Region: Delhi',
      style: { fontSize: 12, color: 'black', marginTop: 8, alignSelf: 'center', },
    },
    {
      id: 'image1',
      type: 'image',
      source: require('../../assets/icon.png'),
      style: { width: 100, height: 100},
    },
    {
      id: 'user_name',
      type: 'text',
      content: 'Name: Ishaan Kakkar',
      style: { fontSize: 12, color: 'black', marginTop: 8},
    },
    {
      id: 'user_age',
      type: 'text',
      content: 'Age: 28',
      style: { fontSize: 12, color: 'black', marginTop: 4},
    },
    {
      id: 'user_number',
      type: 'text',
      content: 'Number: 99999 99989',
      style: { fontSize: 12, color: 'black', marginTop: 4, marginBottom: 8,},
    },
    {
      id: 'button',
      type: 'button',
      content: 'Call user',
      onPress: () => alert('Testing!!!'),
    },
    {
      id: 'd1',
      type: 'divider',
      style: { marginTop: 4, marginBottom: 4,},
    },
    {
      id: 'button2',
      type: 'button',
      content: 'Back',
      action: 'back',
    },
  ],
  actions: [
    {
      id: 'screen1_button_click',
      type: 'navigate',
      target: 'screen2'
    },
  ]
};