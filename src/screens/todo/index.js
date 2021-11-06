import React, {useState} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    FlatList,
    ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const Todo = () => {

    const [inputText, setInputText] = useState('');
    const [todoText, setTodoText] = useState([]);
    const [indexValue, setIndexValue] = useState(1);
    const [updateText, setUpdateText] = useState('');

    const closeIcon = <Icon name="closecircleo" size={20} color="red" />;
    const deleteIcon = <Icon name="delete" size={24} color="red"/>
    const editIcon = <Icon name="edit" size={24} color="red"/>
    const tickIcon = <Icon name="checksquareo" size={24} color="green"/>

    const handleAddText = () => {
        if(inputText != ''){
            const todoData = [...todoText, inputText];
            setTodoText(todoData)
            setInputText('')
        }
    }

    const handleClearList = () => {
        setTodoText([])    
    }

    const handleClearText = () => {
        setInputText('')
    }

    const handleDeleteItem = (index) => {
        let todoTasks = [...todoText]
        todoTasks.splice(index, 1)
        setTodoText(todoTasks)
    }
    
    const handleEditItem = (item) => {
        console.log(item, 'ssdfalkdjlk')
        let todoTasks = [...todoText]
        console.log(todoTasks, 'skljdsfdsfl')
        const filterData = todoTasks.filter(e => e === item)
        if(filterData){
            setIndexValue(2)
        }
    }

    const handleUpdateText = (item) => {
        let todoTasks = [...todoText]
        let filterData = todoTasks.filter(e => e === item)
        console.log(filterData, 'filterDatafilterData')
        setIndexValue(1)
        // setTodoText(updateText)
    }

    return(
        <View style={{flex: 1, alignItems: 'center'}}>
            <Text style={{fontWeight: 'bold', color:'orange', fontSize: 26, marginTop: 10, borderBottomWidth:2, borderColor:'orange'}}>Todo List</Text>
            <View style={{width: '90%', marginTop: 50}}>
                <View style={{flexDirection:'row', justifyContent:'flex-end', width:'100%', alignItems:'center'}}>
                    <TextInput 
                        value={inputText}
                        onChangeText={(e) => setInputText(e)}
                        style={{borderWidth:2, borderColor:'orange', borderRadius: 10, width:'100%', paddingRight: 40, paddingHorizontal: 10}}
                    />
                    <TouchableOpacity onPress={handleClearText} style={{position:'absolute', paddingRight: 10}}>
                        {closeIcon}
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-around', marginTop: 30}}>
                    <TouchableOpacity onPress={handleAddText} style={{height: 56, width:'48%', alignItems:'center', justifyContent:'center', backgroundColor:'green', borderRadius: 10}}>
                        <Text style={{color:'#FFF', fontWeight:'bold', fontSize: 20}}>Add</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleClearList} style={{height: 56, width:'48%', alignItems:'center', justifyContent:'center', backgroundColor:'orange', borderRadius: 10}}>
                        <Text style={{color:'#FFF', fontWeight:'bold', fontSize: 20}}>Clear list</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{width:'90%', marginTop: 20}}>
                <ScrollView style={{height: '60%'}}>
                {todoText.map((item, index)=> {
                    return(
                        <View key ={index} style={{width: '100%', justifyContent:'space-between', alignItems:'center', flexDirection:'row', padding: 20, backgroundColor:'#c5d62f', borderRadius: 30, marginTop: 20 }}>
                        {indexValue == 1 &&
                        <>
                            <Text style={{fontSize: 20, color:'#000'}}>{item}</Text>
                            <View style={{flexDirection:'row'}}>
                                <TouchableOpacity onPress={() => handleEditItem(item)} style={{paddingRight: 20}}>{editIcon}</TouchableOpacity>
                                <TouchableOpacity onPress={() => handleDeleteItem(item)}>{deleteIcon}</TouchableOpacity>
                            </View>
                        </>
                        }
                        {indexValue == 2 &&
                            <>
                               <TextInput 
                                    value={updateText}
                                    onChangeText={(e) => setUpdateText(e)}
                                    style={{borderBottomWidth:2, borderColor:'orange', borderRadius: 10, width:'90%', paddingRight: 40, paddingHorizontal: 10, height: 20, fontSize: 16, padding: 0}}
                                /> 
                                <TouchableOpacity onPress={() => handleUpdateText(index)}>
                                    {tickIcon}
                                </TouchableOpacity>
                            </>
                        }
                        </View>
                    )
                })}
                </ScrollView>
            </View>
        </View>
    )
}

export default Todo;