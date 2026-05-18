import { Text } from "react-native";
import { styles } from "./styles";

type Props = {
    label: string
    definition?: string
}

export function CardSubtitle({ label, definition }: Props){
    return(
        <Text style={styles.cardSubtitle}>{label} {definition}</Text>
    )
}