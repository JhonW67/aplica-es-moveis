import { Text } from "react-native"
import { styles } from "./style"

type props = {
    label: string
}

export function Logo({ label }: props){
    return(
        <Text style={styles.logo}>{label}</Text>
    )
}