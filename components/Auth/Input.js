import React from 'react'
import { Text, View } from 'react-native'

const Input = ({label,keyboardType}) => {
  return (
    <View>
        <Text>
            {label}
        </Text>
    </View>
  )
}

export default Input