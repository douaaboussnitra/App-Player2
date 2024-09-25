import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(""+key, JSON.stringify(value));
      console.log('Data stored successfully.');
    } catch (error) {
      console.error('Error storing data:', error);
    }
};

export const retrieveData = async (key) => {
    try {
      const value = await AsyncStorage.getItem(""+key);
      if (value) {
        console.log('Data retrieved successfully');
        return  JSON.parse(value);
      } else {
        const value = await AsyncStorage.setItem(""+key,JSON.stringify([]));
        console.log('Create new Data.');
        return JSON.parse(value);
      }
    } catch (error) {
      console.error('Error retrieving data:', error);
    }
  };

export const removeData = async (key) => {
    try {
      await AsyncStorage.removeItem(""+key);
      console.log('Data removed successfully.');
    } catch (error) {
      console.error('Error removing data:', error);
    }
  };  
  export const formatName = (firstName, lastName) => {
    const formattedLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();
    return `${firstName.toUpperCase()} ${formattedLastName}`;
  };
export const generateRandomHashKey = (length) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let hashKey = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      hashKey += characters[randomIndex];
    }
  
    return hashKey;
  }