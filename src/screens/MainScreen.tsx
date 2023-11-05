import React from 'react';
import type { FC, PropsWithChildren } from 'react';
import {
    SafeAreaView,
    StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { decrement, dummyAsync, increment, incrementByValue } from '../redux/dummy/dummySlice';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { getValue, processedValue } from '../redux/selectors';


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

    const count:number = useSelector(getValue)
    const processed: number| string = useSelector(processedValue)

    const onPressIncrement = () => {
        dispatch(increment())
    }
    const onPressDecrement = () => {
        dispatch(decrement())
    }
    const onPressIncrementByValue = () => {
        dispatch(incrementByValue(10))
    }
    const onPressIncrementAsync = () => {
        dispatch(dummyAsync(false))
    }

    return (
        <SafeAreaView>
            <Text>{count}</Text>
            <Text>{processed}</Text>

            <Button onPress={onPressIncrement} title={'+'}/>
            <Button onPress={onPressIncrementByValue} title={'+10'}/>
            <Button onPress={onPressDecrement} title={'-'}/>
            <Button onPress={onPressIncrementAsync} title={'async'}/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

});

export default MainScreen;
