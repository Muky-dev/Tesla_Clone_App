import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styles from './styles';
import StyledButton from '../StyledButton';

const CarItem = (props) => {
    return (
        <View style={styles.carContainer}>

            <ImageBackground 
            source={require('../../assets/images/ModelX.jpeg')}
            style={styles.image}
            />

            <View style={styles.titles}>
                <Text style={styles.title}>Model X</Text>
                <Text style={styles.subtitle}>Starting at $69,420</Text>
            </View>

            <StyledButton 
            type="primary" 
            content={"Custom Order"} 
            onPress={() => {
                console.warn("Custom was pressed");
            }} 
            />

            <StyledButton 
            type="secondary" 
            content={"Existing Inventory"} 
            onPress={() => {
                console.warn("Existing was pressed");
            }} 
            />

        </View>
    );
};

export default CarItem;