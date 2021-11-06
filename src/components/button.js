import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TouchableHighlight
} from 'react-native';

const Button = ({Key, callBack, bcg}) => {
    
    const handleKey = (key) => {
        callBack(Key)
    }

    return(
        <TouchableOpacity onPress={() => callBack(Key)} style={{height: 90, width: 90, backgroundColor:bcg, alignItems:'center', justifyContent:'center', borderRadius: 45}}>
            <Text style={{color:'#FFF', fontWeight:'normal', fontSize: 32}}>{Key}</Text>
        </TouchableOpacity>
    )
}

export default Button;