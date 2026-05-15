import { Text } from "react-native";
import { styles } from "./style";

type props = {
    label: string
}

export function FooterText({ label }: props){
    return(
        <Text style={styles.footerText}>{label}</Text>
    )
}