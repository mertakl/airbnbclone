import React, {Component} from 'react';
import {TouchableOpacity, Text, View, StyleSheet, Easing, Animated} from 'react-native';
import colors from '../styles/colors';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default class Notification extends Component {

    constructor(props) {
        super(props);
        this.state = {
            positionValue: new Animated.Value(60),
        };
        this.closeNotification = this.closeNotification.bind(this);
        this.animateNotification = this.animateNotification.bind(this);
    }

    animateNotification(value) {
        const {positionValue} = this.state;
        Animated.timing(
            positionValue,
            {
                toValue: value,
                duration: 400,
                volocity: 3,
                tension: 2,
                friction: 8,
                easing: Easing.easeOutBack,
                useNativeDriver: true,
            }
        ).start();
    }

    closeNotification() {
        this.props.handleCloseNotification();
    }

    render() {
        const {type, firstLine, secondLine, showNotification} = this.props;
        const {positionValue} = this.state;
        showNotification ? this.animateNotification(0) : this.animateNotification(60);

        return (
            <Animated.View style={{transform: [{translateY: positionValue}]}, [styles.wrapper]}>
                <View style={styles.notificationContent}>
                    <Text style={styles.errorText}>{type}</Text>
                    <Text>{firstLine}</Text>
                    <Text>{secondLine}</Text>
                </View>
                <TouchableOpacity style={styles.closeButton} onPress={this.closeNotification}>
                    <Icon name="times" size={20} color={colors.lightGray}/>
                </TouchableOpacity>
            </Animated.View>
        );
    }
}

Notification.propTypes = {
    showNotification: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
    firstLine: PropTypes.string,
    secondLine: PropTypes.string,
    handleCloseNotification: PropTypes.func,
};

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: colors.white,
        height: 60,
        width: '100%',
        padding: 10,
    },
    notificationContent: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start'
    },
    errorText: {
        color: colors.darkOrange,
        marginRight: 5,
        fontSize: 14,
        marginBottom: 2
    },
    errorMessage: {
        fontSize: 14,
        marginBottom: 2
    },
    closeButton: {
        position: 'absolute',
        right: 10,
        top: 10,
    }
});
