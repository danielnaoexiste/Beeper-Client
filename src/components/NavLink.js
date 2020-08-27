import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import Spacer from "./Spacer";
import { withTheme } from "../theming/themeProvider";
import { navigate } from "../navigationRef";

const NavLink = ({ text, routeName, theme }) => {
  return (
    <TouchableOpacity onPress={() => navigate(routeName)}>
      <Spacer>
        <Text style={[styles.link, { color: theme.navlinkColor }]}>{text}</Text>
      </Spacer>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  link: {
    fontSize: 16,
  },
});

export default withTheme(NavLink);
