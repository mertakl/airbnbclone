import React, {Component} from 'react';
import {TouchableOpacity, Text, View, Image, StyleSheet} from 'react-native';
import colors from '../styles/colors';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default class Notification extends Component {

    constructor(props) {
        super(props);
        this.closeNotification = this.closeNotification.bind(this);
    }

    closeNotification() {
        this.props.handleCloseNotification();
    }

    render() {
        const {type, firstLine, secondLine} = this.props;
        return (
            <View style={styles.wrapper}>
                <View style={styles.notificationContent}>
                    <Text style={styles.errorText}>{type}</Text>
                    <Text>{firstLine}</Text>
                    <Text>{secondLine}</Text>
                </View>
                <TouchableOpacity style={styles.closeButton} onPress={this.closeNotification}>
                    <Icon name="times" size={20} color={colors.lightGray}/>
                </TouchableOpacity>
            </View>
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
