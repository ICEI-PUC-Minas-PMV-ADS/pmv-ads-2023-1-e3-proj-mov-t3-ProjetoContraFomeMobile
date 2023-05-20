import React from 'react';
import { StyleSheet, Image } from 'react-native';

const Logo = () => {

    return <Image style={styles.Image} source={require('../assets/download.jpg')} />

};
const styles = StyleSheet.create({
    Image: {
        width: "100%",
        height: 190,
        borderRadius: 30,
        marginTop: 40,
       
    },

});
export default Logo;