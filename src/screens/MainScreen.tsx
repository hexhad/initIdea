import React, { memo, useCallback } from 'react';
import type { FC, PropsWithChildren } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from '@reduxjs/toolkit';

import { decrement, dummyAsync, increment, incrementByValue } from '@rtk/dummy/dummySlice';
import { getValue, processedValue } from '@rtk/selectors';

import Dummy from '@components/Dummy';
import CustomButton from '@components/CustomButton';


type SectionProps = PropsWithChildren<{
    title?: string;
    id: number,
    onPress: () => void,
}>;

const Button = ({ title = 'Button', onPress }: Omit<SectionProps, 'id'>): JSX.Element => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text>{title}</Text>
        </TouchableOpacity>
    )
}



const MainScreen: FC = (): JSX.Element => {
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

    const count: number = useSelector(getValue)
    const processed: number | string = useSelector(processedValue)

    const onPressIncrement = () => {
        dispatch(increment())
    }
    const onPressDecrement = () => {
        dispatch(decrement())
    }
    const onPressIncrementByValue = () => {
        dispatch(incrementByValue(10))
    }
    const onPressIncrementAsync = useCallback(() => {
        dispatch(dummyAsync(false))
    }, [])

    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.wrapper}>
                <Text style={styles.text}>{count}</Text>
                <Text style={styles.text}>{processed}</Text>
                <CustomButton onPress={onPressIncrement} title={'+'} />
                <CustomButton onPress={onPressIncrementByValue} title={'+10'} />
                <CustomButton onPress={onPressDecrement} title={'-'} />
                <CustomButton onPress={onPressIncrementAsync} title={'async'} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor:'#FFF'
    },
    wrapper:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        fontSize:30,
        color:'#000000',
        fontWeight:'600',
    }
});

export default memo(MainScreen);
