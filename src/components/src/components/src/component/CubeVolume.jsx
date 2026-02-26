import { Text, View } from "react-native";
import { cubeVolume } from "../cubeVolume.js";

export function CubeVolume({ height }) {

    let volume = cubeVolume(height);

    return (
        <View>
            <Text>
                Cube height {height} m = Volume {volume} m^3
            </Text>
        </View>
    );
}