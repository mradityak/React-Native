import AsyncStorage from "@react-native-async-storage/async-storage";

const TASK_KEY = '@task_list';

export const saveTaskToStorage = async (tasks) => {
    try{
        await AsyncStorage.setItem(TASK_KEY,JSON.stringify(tasks));
    }catch(error){
        console.error('Error saving tasks to Storage',error);   
    }
    
};

export const loadTasksFromStorage = async () =>{
    try{
       const storedTasks = await AsyncStorage.getItem(TASK_KEY);
        return storedTasks ? JSON.parse(storedTasks) : [];
    }catch(error){
        console.error('Error loading from tasks Storage', error);
        return [];
        
    }
};

export const clearTasksFromStorage = async() =>{
    try{
        await AsyncStorage.removeItem(TASK_KEY);
    }catch(error){
        console.error('Error clearing task Storage',error);
        
    }
}