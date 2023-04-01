import { StyleSheet, View , TextInput} from 'react-native'
import React from 'react'
import { Controller } from 'react-hook-form'

const CustomInput = ({placeholder, value, setValue, secureTextEntry=false}) => {
  return (
    <View style={styles.root}>
      <TextInput style={styles.input} placeholder={placeholder} value={value} onChangeText={setValue} secureTextEntry={secureTextEntry} />


      {/* <Controller name="email" control={control} render={({ field: { onBlur, onChange, value } }) => (
                <TextInput placeholder="email" value={value} onChangeText={onChange} onBlur={onBlur} />
            )} /> */}
    </View>
  )
}

export default CustomInput

const styles = StyleSheet.create({
    root: {
        width: "100%",
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#e8e8e8",
        borderRadius: 10,
        marginVertical: 5,
        paddingHorizontal: 20,
        paddingVertical: 5,
   
    },
    input: {
        minHeight: 40
        
    }
})