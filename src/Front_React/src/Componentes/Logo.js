import React from 'react';
import { StyleSheet, Image } from 'react-native';

const Logo = () => {

    return <Image style={styles.Image} source={require('../assets/download.jpg')} />

};
const styles = StyleSheet.create({
    Image: {
        width: 300,
        height: 180,
        borderRadius: 20,

    },

});
export default Logo;