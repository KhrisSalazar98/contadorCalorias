import AsyncStorage from "@react-native-async-storage/async-storage";
import { Meal } from "../types";

const MY_FOOD_KEY = '@MyFood:Key';
const MY_TODAY_FOOD_KEY = '@MyTodayFood:Key';

const useFoodStorage = () => {

    const saveInfoToStorage = async (storageKey: string, meal: Meal) => {
        
        try {

            const currentSavedFood = await AsyncStorage.getItem(storageKey);
        
            if(currentSavedFood !== null){
                const currentSavedFoodPased = JSON.parse(currentSavedFood);
                currentSavedFoodPased.push(meal);

                await AsyncStorage.setItem(
                    storageKey,
                    JSON.stringify(currentSavedFoodPased)
                );

                return Promise.resolve();
            }

            await AsyncStorage.setItem(
                storageKey,
                JSON.stringify([meal]),
            );

            return Promise.resolve();

        } catch (error) {
            return Promise.reject();
        }
    };

    const handleSaveFood = async ({calories, name, portion}: Meal) => {
        try {
            const result = await saveInfoToStorage(MY_FOOD_KEY, {calories, name, portion});
            return Promise.resolve(result);
        } catch (error) {
            return Promise.reject(error);
        }
    };

    const handleGetFoods = async () => {
        try {
            const foods = await AsyncStorage.getItem(MY_FOOD_KEY);
            
            if (foods !== null) {
                const parsedFoods = JSON.parse(foods);
                return Promise.resolve(parsedFoods);
            }
        
        } catch (error) {
            return Promise.reject(error);
        }
    };

    const handleSaveTodayFood = async ({calories, name, portion}: Meal) => {
        
        try {
            const result = await saveInfoToStorage(MY_TODAY_FOOD_KEY, {
                calories,
                name,
                portion,
                date: new Date().toISOString()
            });
            return Promise.resolve(result);
        } catch (error) {
            return Promise.reject(error)
        }

    }

    return {
        onSaveFood: handleSaveFood,
        onGetFoods: handleGetFoods,
        onSaveTodayFood: handleSaveTodayFood
    };
};

// Guardar información de comida del día de hoy


// Método para obtener info de comida del día de hoy

export default useFoodStorage;