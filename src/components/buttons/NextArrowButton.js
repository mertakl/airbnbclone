import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {
    TouchableHighlight,
    StyleSheet,
    View
} from 'react-native';
import colors from "../../styles/colors";

export default class NextArrowButton extends Component {
    render() {
        const {disabled, handleNextButton} = this.props;
        const opacityStyle = disabled ? 0.4 : 0.8;
        return (
            <View style={styles.buttonWrapper}>
                <TouchableHighlight
                    style={[{opacity: opacityStyle}, styles.button]}
                    onPress={handleNextButton}
                    disabled={disabled}
                >
                    <Icon
                        name="angle-right"
                        color={colors.green01}
                        size={32}
                        style={styles.icon}
                    />
                </TouchableHighlight>
            </View>
        );
    }
}

NextArrowButton.propTypes = {
    disabled: PropTypes.bool,
    handleNextButton: PropTypes.func,
};


const styles = StyleSheet.create({
    buttonWrapper: {
        alignItems: 'flex-end',
        right: 20,
        bottom: 20,
        paddingTop: 0,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        width: 50,
        height: 50,
        backgroundColor: colors.white,
    },
    icon: {
        marginRight: -2,
        marginTop: -2,
    },
});
