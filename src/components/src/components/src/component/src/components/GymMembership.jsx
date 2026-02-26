import { Text, View } from "react-native";
import { gymMembership } from "../gymMembership.js";

export function GymMembership({ cost, friends }) {  

    let total = gymMembership(cost, friends);

    return (
        <View>
            <Text>
                Base cost ${cost} with {friends} friends = Total cost ${total}
            </Text>
        </View>
    );
}