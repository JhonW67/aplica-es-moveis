import { StyleSheet } from "react-native";
import { THEME } from "../../styles/constant";

export const styles = StyleSheet.create({
    logo: {
        color: THEME.colors.primary,
        fontSize: 56,
        fontWeight: "bold"
    },
    title: { 
        color: THEME.colors.heading,
        fontWeight: "bold",
        fontSize: 32,
        width: 200,
        textAlign: "center"
    },
    subtitle: {
        color: THEME.colors.subtitle,
        fontWeight: "400",
        fontSize: 16,
        width: 200,
        textAlign: "center"
    },
    footerText: {
        color: THEME.colors.footer,
        fontSize: 14
    },
})