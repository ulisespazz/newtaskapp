import React from 'react';
import { View, TextInput, Button } from 'react-native';
import { styles } from './styles';

const AddItem = ({ 
    placeholder, 
    task, 
    onHandlerChange, 
    buttonTex, 
    buttonColor, 
    onHandlerSubmit 
}) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.input} 
                placeholder={placeholder}
                autoComplete='off'
                autoCorrect={false}
                autoCapitalize='none'
                value={task}
                onChangeText={onHandlerChange}
            />
            <Button disabled = {!task} title={buttonTex} color={buttonColor} onPress={onHandlerSubmit}></Button>
        </View> 
    )
}

export default AddItem;