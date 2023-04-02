import { StyleSheet, View , TextInput, Text} from 'react-native'
import React from 'react'
import { Controller } from 'react-hook-form'

const CustomInput = ({placeholder, rules={}, secureTextEntry=false, control, name}) => {
  return (
    <>
   


      <Controller rules={rules} name={name} control={control} render={({ field: { onBlur, onChange, value }, fieldState: {error} , }) => (
        <>
       <View style={styles.root}>
          <TextInput style={styles.input} placeholder={placeholder} value={value} onChangeText={onChange} onBlur={onBlur} secureTextEntry={secureTextEntry} />
        </View>
        {error && <Text style={{alignSelf: "stretch", paddingHorizontal: 10, color: "red"}}>{ error.message || "Error"}</Text>}
        </>
       

            )} />
     </>
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