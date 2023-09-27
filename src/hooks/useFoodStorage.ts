import AsyncStorage from "@react-native-async-storage/async-storage";
import { isToday } from "date-fns";

import { Meal } from "../types";
import TodayMeals from '../components/TodayMeals/TodayMeals';

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

    const handleGetTodayFood = async () => {
        try {
            const foods = await AsyncStorage.getItem(MY_TODAY_FOOD_KEY);
            
            if (foods !== null) {
                const parsedFoods = JSON.parse(foods) as Meal[];
                return Promise.resolve(parsedFoods.filter(meal => meal.date && isToday(new Date(meal.date))));
            }
        
        } catch (error) {
            return Promise.reject(error);
        }
    }

    const handleRemoveTodayFood = async (index: Number) => {
        try{
            
            const todayFood = await handleGetTodayFood();
            const filteredItem = todayFood?.filter((item: Meal, itemIndex) => {
                return itemIndex !== index;
            });

            await AsyncStorage.setItem(MY_TODAY_FOOD_KEY, JSON.stringify(filteredItem));

            return Promise.resolve();

        } catch(error) {
            return Promise.reject(error);
        }
    }

    return {
        onSaveFood: handleSaveFood,
        onGetFoods: handleGetFoods,
        onSaveTodayFood: handleSaveTodayFood,
        onGetTodayFood: handleGetTodayFood,
        onDeleteTodayFood: handleRemoveTodayFood
    };
};

export default useFoodStorage;