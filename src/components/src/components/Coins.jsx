import { Text, View, Image } from "react-native";
import { coins } from "../../../coins.js";

export function Coins({ nickels, dimes, quarters, loonies, toonies }) {

    let total = coins(nickels, dimes, quarters, loonies, toonies);

    return (
        <View>
            <Text>
                Total value = ${total}
            </Text>
        </View>
    );
}