import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const TextSm = ({ children, ...props }) => {
    const textStyle = StyleSheet.create({
        customText: {
            //color: 'red',
            fontSize: 10,
        },
    });

    return (
        <Text style={textStyle.customText} {...props}>
            {children}
        </Text>
    )
};