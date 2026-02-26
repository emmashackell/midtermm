import { Text, View } from "react-native";
import { fahrenheitToCelcius } from "../fahrenheitToCelcius.js";

export function FahrenheitToCelcius({ f }) {

    let c = fahrenheitToCelcius(f);

    return (
        <View>
            <Text>
                {f}F =  {c.toFixed(2)}C
            </Text>
        </View>
    );
}