import { Text, View } from "react-native";
import { earthquake } from "../earthquake.js";

export function Earthquake({ intensity }) {

    let result = earthquake(intensity);

    return (
        <View>
            <Text>
                Earthquake intensity {intensity} = {result}
            </Text>
        </View>
    );
}