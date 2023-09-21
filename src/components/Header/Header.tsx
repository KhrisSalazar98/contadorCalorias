import React from "react";
import { Text, View, StyleSheet,Image } from "react-native";

const staticInfo = {
    name: 'Cristóbal Salazar',
    uri: 'https://static.wikia.nocookie.net/memes-pedia/images/6/68/RicCerealUwU.jpg/revision/latest/zoom-crop/width/500/height/500?cb=20190511021243&path-prefix=es',
};

const Header = () => {
    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <Text style={styles.name}>{`Hello, ${staticInfo.name}`}</Text>
                <Text style={styles.subtitle}>Welcolme back to your goal</Text>
            </View>
            <View style={styles.rightContainer}>
                <Image source={{uri: staticInfo.uri}} style={styles.profileImage} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    leftContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    rightContainer: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    name: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    subtitle: {
        fontSize: 12,
        color: '#808080'
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 24
    }
});

export default Header;