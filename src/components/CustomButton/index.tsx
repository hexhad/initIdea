import { PropsWithChildren, memo } from "react";
import { Platform, StyleSheet, Text, TouchableOpacity } from "react-native";

type SectionProps = PropsWithChildren<{
    title?: string;
    id: number,
    onPress: () => void,
    styles?: object,
}>;

const Button = ({ title = 'Button', onPress }: Omit<SectionProps, 'id'>): JSX.Element => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

export default memo(Button);

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0061f4',
        paddingVertical: 9,
        paddingHorizontal: 10,
        borderRadius: 3,
        minWidth: 100,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        ...Platform.select({
            android: {
                shadowColor: '#0061f4',
                shadowOffset: {
                    width: 0,
                    height: 10,
                },
                shadowOpacity: 1,
                shadowRadius: 0,
                elevation: 8
            },
            ios: {
                shadowColor: "#c0c0c0",
                shadowOffset: {
                    width: 0,
                    height: 6,
                },
                shadowOpacity: 0.20,
                shadowRadius: 5.62,
                elevation: 8
            },
            default: {
                shadowColor: "#c0c0c0",
                shadowOffset: {
                    width: 0,
                    height: 6,
                },
                shadowOpacity: 0.20,
                shadowRadius: 5.62,
                elevation: 8
            }
        })
    },
    text: {
        color: '#FFFFFF',
        fontWeight: '600',
        fontSize: 15
    }
});