import { Text, TouchableOpacity } from "react-native";
import { s } from "./ButtonConvert.style";
import { UNIT } from "../../constant";

export function ButtonConvert({onPress, UNIT}) {
    return(
        <TouchableOpacity onPress={onPress} style={s.button}>
            <Text style={s.text}>Convertir en {UNIT}</Text>
        </TouchableOpacity>
    )
}