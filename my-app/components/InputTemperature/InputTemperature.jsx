import { TextInput, Text, View } from 'react-native';
import { s } from './InputTemperaure.style';

export function InputTemperaure({ defaultValue, onChangeText, UNIT }) {
    return (
        <View style={s.container}>
            <TextInput
                style={s.input}
                placeholder='Tappe une température'
                keyboardType='numeric'
                maxLength={4}
                defaultValue={defaultValue}
                onChangeText={onChangeText}
            />
            <Text style={s.unit}>{UNIT}</Text>
        </View>
    )

}