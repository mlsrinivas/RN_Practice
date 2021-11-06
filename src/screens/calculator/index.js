import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import Button from '../../components/button';

const Calculator = () => {

    const [clickedText, setClickedText] = useState('');
    const [result, setResult] = useState('0');
    
    const handleClick = (val) => {
        if(val === 'AC'){
            return handleClear()
        }
        if(val === '='){
            return handleResult()
        }
        if(val === '<--'){
            return handleBack()
        }
        // if(val === '+' || val === '-' || val === '*' || val === '/' || val === '.'){
        //     setClickedText((clickedText+val).slice(1))
        // }else{
            setClickedText((clickedText+val).replace(/^[+ | - | 0 | * | . | /]/, ""))
        // }
        // string = string.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');

    }

    const handleClear = () => {
        setClickedText('')
        setResult(0)
    }

    const handleResult = () => {
        setResult(eval(clickedText))
    }

    const handleBack = () => {
        if(result === 0){
            return null;
        }else{
            setClickedText(clickedText.toString().substring(0, clickedText.length-1))
            setResult(eval(clickedText.toString().substring(0, clickedText.length-1)))
        }
    }

    return(
        <View style={{backgroundColor:'red', height: '100%'}}>
            <View style={{height: '40%', backgroundColor:'#FFF', alignItems:'flex-end', justifyContent:'flex-end', padding: 20}}>
                <Text style={{color:'#ad072e', fontSize: 32, fontWeight:'normal'}}>{clickedText}</Text>
                <Text style={{color:'#027529', fontSize: 32, fontWeight:'bold'}}>{result}</Text>
            </View>
            <View style={{height:'60%', backgroundColor:'white', justifyContent:'space-around', borderTopWidth: 1, borderColor:'ff8000', padding: 5}}>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <Button Key={1} callBack={handleClick} bcg={'#0db5a7'}/>
                    <Button Key={2} callBack={handleClick} bcg={'#0db5a7'}/>
                    <Button Key={3} callBack={handleClick} bcg={'#0db5a7'}/>
                    <Button Key={'+'} callBack={handleClick}  bcg={'#c28c17'}/>
                </View>

                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <Button Key={4} callBack={handleClick} bcg={'#0db5a7'}/>
                    <Button Key={5} callBack={handleClick} bcg={'#0db5a7'}/>
                    <Button Key={6} callBack={handleClick} bcg={'#0db5a7'}/>
                    <Button Key={'-'} callBack={handleClick} bcg={'#c28c17'}/>
                </View>

                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <Button Key={7} callBack={handleClick} bcg={'#0db5a7'}/>
                    <Button Key={8} callBack={handleClick} bcg={'#0db5a7'}/>
                    <Button Key={9} callBack={handleClick} bcg={'#0db5a7'}/>
                    <Button Key={'*'} callBack={handleClick} bcg={'#c28c17'}/>
                </View>

                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <Button Key={'.'} callBack={handleClick} bcg={'#0db5a7'}/>
                    <Button Key={0} callBack={handleClick} bcg={'#0db5a7'}/>
                    <Button Key={'<--'} callBack={handleClick} bcg={'#0db5a7'}/>
                    <Button Key={'/'} callBack={handleClick} bcg={'#c28c17'}/>
                </View>

                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity onPress={() => handleClick('AC')}style={{height: 90, width:'50%', backgroundColor:'#c28c17', alignItems:'center', justifyContent:'center', borderRadius: 50}}>
                        <Text style={{color:'#FFF', fontWeight:'normal', fontSize: 32}}>{'AC'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleClick('=')}style={{height: 90, width:'50%', backgroundColor:'#c28c17', alignItems:'center', justifyContent:'center', borderRadius: 50}}>
                        <Text style={{color:'#FFF', fontWeight:'normal', fontSize: 32}}>{'='}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    )
}

export default Calculator;