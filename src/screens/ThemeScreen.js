import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';

import { withTheme } from '../theming/themeProvider';

const ThemeScreen = ({ theme, themes, setTheme }) => {

  renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => setTheme(item.key)}>
      <View
        style={[
          style.itemContainer,
          {
            backgroundColor: item.backgroundColor,
            marginHorizontal: 20
          },
        ]}
      >
        <Text style={[style.itemText, { color: item.textColor }]}>{item.key}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView forceInset={{ top: 'always' }} style={{backgroundColor: theme.backgroundColor, flex: 1 }}>
      <FlatList
        style={style.container}
        ListHeaderComponent={
          <Text style={[style.headline, { color: theme.textColor }]}>
            Choose your theme:
          </Text>
        }
        data={themes}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: { flex: 1 },
  headline: {
    marginTop: 60,
    marginBottom: 20,
    marginLeft: 20,
    fontWeight: '200',
    fontSize: 24,
  },
  itemContainer: {
    height: 100,
    justifyContent: 'center',
    paddingLeft: 20,
  },
  itemText: { fontWeight: 'bold' },
});

export default withTheme(ThemeScreen);