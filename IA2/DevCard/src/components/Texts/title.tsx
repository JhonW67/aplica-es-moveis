import { Text } from "react-native"
import { styles } from "./style"

type props = {
    label: string
}

export function Title({ label }: props){
    return(
        <Text style={styles.title}>{label}</Text>
    )
}