import { TouchableOpacity, Text, GestureResponderEvent } from "react-native";
import { styles } from "./style";

type ButtonProps = {
    label: string,
    variant?: "primary" | "secondary" | "outline",
    onPress?: (event: GestureResponderEvent) => void
}
export function Button({ label, variant="primary", onPress }: ButtonProps){
    return(
        <TouchableOpacity  onPress={onPress} style={styles[variant].buttonContainer}>
            <Text style={styles[variant].buttonText}>{label}</Text>
        </TouchableOpacity>
    )   
}