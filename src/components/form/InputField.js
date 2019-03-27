import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Animated,
    Easing
} from 'react-native';
import colors from "../../styles/colors";
import Icon from 'react-native-vector-icons/dist/FontAwesome';


export default class InputField extends Component {
    constructor(props) {
        super(props);
        this.toggleShowPassword = this.toggleShowPassword.bind(this);
        this.state = {
            secureInput: !(props.inputType === 'text' || props.inputType === 'email'),
            scaleCheckmarkValue: new Animated.Value(0),
        }
    }

    scaleCheckmark(value) {
        Animated.timing(
            this.state.scaleCheckmarkValue,
            {
                toValue: value,
                duration: 400,
                easing: Easing.easeOutBack,
            },
        ).start();
    }


    toggleShowPassword() {
        this.setState({
            secureInput: !this.state.secureInput
        });
    }

    render() {
        const {labelText, labelTextSize, labelColor, textColor, borderBottomColor, inputType, customStyle, onChangeText, showCheckmark, autoFocus, autoCapitalize} = this.props;
        const fontSize = labelTextSize || 14;
        const color = labelColor || colors.white;
        const inputColor = textColor || colors.white;
        const borderBottom = borderBottomColor || 'transparent';
        const {secureInput, scaleCheckmarkValue} = this.state;
        const keyboardType = inputType === 'email' ? 'email-address' : 'default';

        const iconScale = scaleCheckmarkValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0.01, 1.6, 1],
        });

        const scaleValue = showCheckmark ? 1 : 0;
        this.scaleCheckmark(scaleValue);

        return (
            <View style={[customStyle, styles.wrapper]}>
                <Text style={[{fontSize, color}, styles.label]}>{labelText}</Text>
                {inputType === 'password' ?
                    <TouchableOpacity style={styles.showButton} onPress={this.toggleShowPassword}>
                        <Text style={styles.showButtonText}>{secureInput ? 'Show' : 'Hide'}</Text>
                    </TouchableOpacity> : null
                }
                <Animated.View style={[{transform: [{scale: iconScale}]}, styles.checkmarkWrapper]}>
                    <Icon
                        name="check"
                        color={colors.white}
                        size={20}
                    />
                </Animated.View>
                <TextInput style={[{
                               color: inputColor,
                               borderBottomColor: borderBottom
                           }, styles.inputField]}
                           secureTextEntry={secureInput}
                           onChangeText={onChangeText}
                           keyboardType={keyboardType}
                           autoFocus={autoFocus}
                           autoCapitalize={autoCapitalize}
                           autoCorrect={false}
                />
            </View>
        );
    }
}

InputField.propTypes = {
    labelText: PropTypes.string.isRequired,
    labelTextSize: PropTypes.number,
    labelColor: PropTypes.string,
    textColor: PropTypes.string,
    borderBottomColor: PropTypes.string,
    inputType: PropTypes.string.isRequired,
    customStyle: PropTypes.object,
    onChangeText: PropTypes.func,
    showCheckmark: PropTypes.bool.isRequired,
    autoFocus: PropTypes.bool,
    autoCapitalize: PropTypes.bool,
};


const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
    },
    label: {
        marginBottom: 20,
    },
    inputField: {
        borderBottomWidth: 1,
        paddingTop: 5,
    },
    showButton: {
        position: 'absolute',
        right: 0,
    },
    showButtonText: {
        color: colors.white,
        fontWeight: '700',
    },
    checkmarkWrapper: {
        position: 'absolute',
        right: 0,
        bottom: 12,
    },
});
