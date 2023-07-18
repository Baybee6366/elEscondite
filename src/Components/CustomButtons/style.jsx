import React from "react";
import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  greenButton: {
    textAlign: 'center',
    backgroundColor: 'green',
    height: 60,
    width: 60,
    borderWidth: 1,
    borderColor: '#000',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    marginLeft: 10,
  },
  redButton: {
    textAlign: 'center',
    backgroundColor: 'red',
    height: 60,
    width: 60,
    borderWidth: 1,
    borderColor: '#000',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    marginLeft: 80,
  },
});

export default styles;