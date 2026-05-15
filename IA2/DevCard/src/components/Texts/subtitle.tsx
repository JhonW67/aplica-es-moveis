import { Text } from "react-native"
import { styles } from "./style"

type props = {
    label: string
}

export function Subtitle({ label }: props){
    return(
        <Text style={styles.subtitle}>{label}</Text>
    )
}