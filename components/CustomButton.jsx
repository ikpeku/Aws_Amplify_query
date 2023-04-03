import { StyleSheet, Text, Pressable } from 'react-native'
import React from 'react'

const CustomBUtton = ({title, onPress, type="Primary", bg, fc, disabled}) => {
  return (
    <Pressable disabled={disabled} onPress={onPress} style={[styles.root, styles[`root_${type}`], bg ? {backgroundColor: bg} : {}]}>
      <Text style={[styles.text, fc ? {color: fc} : {} ]}>{title}</Text>
    </Pressable>
  )
}

export default CustomBUtton

const styles = StyleSheet.create({
  root: {
    width: "100%",
   alignItems: "center",
   padding: 12,

   marginVertical: 10,
   borderRadius: 10
  },
  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "500"
  },
  root_Tertiary: {
    backgroundColor: "gray",
  },

  root_Primary: {
    backgroundColor: "blue",
  },
  root_Secondary: {
    backgroundColor: "black",
  },
})