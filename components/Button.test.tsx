import React from "react";
import {fireEvent, render,screen} from '@testing-library/react-native'
import {Button} from './Button';
import { Typography } from "./Typography";

test('Button Test', async() => {
    const onPressed = jest.fn() ; //jest에서 함수 형태로 바꾸어줌    
    const expectedButtonName = 'TEST_BUTTON';
    
    render(
        <Button onPress={onPressed}>
                <Typography>{expectedButtonName}</Typography>
        </Button>
    )

    expect(screen.toJSON()).toMatchSnapshot();
    //snapShot이 이전과 맞는지 판별 

    fireEvent.press(screen.getByText(expectedButtonName));
    //press하면 버튼의 이름을 찾는다.

    expect(onPressed).toHaveBeenCalled();
    //onPress Button이 활성화 되었는가
    
})