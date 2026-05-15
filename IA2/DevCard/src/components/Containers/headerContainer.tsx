import { View } from "react-native";
import { styles } from "./style";

export function HeaderContainer({ children }: { children: React.ReactNode }){
    return(
        <View style={styles.headerContainer}>
            {children}
        </View>
    )
}