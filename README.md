# Weather Application 🌤️

A modern weather application built with **Vite** and **React**. This app displays real-time weather information for your current location and allows you to search for and favorite specific locations. 

## Features ✨

1. **Current Location Weather**  
   - Automatically fetches and displays the weather data for the user's current location when they first visit the website.  
   - Includes data such as:
     - **Location**
     - **Climate**
     - **Temperature**
     - **Max Temperature**
     - **Min Temperature**
     - **Humidity**
     - **Cloud Percentage**
     - **Wind Speed**
     - **Local Time**

2. **Search Functionality**  
   - Search weather details for any specific location by entering its name.  

3. **Favorite Locations**  
   - Save specific locations as favorites for quick access.  

4. **User-Friendly Interface**  
   - Clean and responsive design for seamless usage on any device.  

## Tech Stack 🛠️

- **Frontend Framework:** Vite + React
- **API:** [OpenWeatherMap Current Weather Data API](https://openweathermap.org/current)
- **State Management:** React Context
- **Custom Hooks:** `useWeather` for fetching weather data
- **React Hooks:** `useState`, `useEffect`, and others

## Installation & Usage 🚀

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/yourusername/weather-app.git
   cd weather-app
2. **Install Dependencies**

    ```
        npm install
    ```
3. **Add OpenWeatherMap API Key**

- Create a .env file in the root directory and add your OpenWeatherMap API key:


     ```bash
    VITE_WEATHER_API_KEY=your_api_key_here
    ```

4. **Run the Application**

    ```bash
    npm run dev
    ```


## API Integration 🌐

The app integrates with the OpenWeatherMap API to fetch real-time weather data. The useWeather custom hook handles API calls and manages the fetched data efficiently.

Example API Request
```
const fetchWeather = async (location) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}
&appid=${process.env.VITE_WEATHER_API_KEY}`
  );
  const data = await response.json();
  return data;
};
```
     


## How It Works ⚙️
- On First Load

    - The app uses geolocation to fetch the user's current      coordinates and retrieves weather data for that location.

- Search

    - The user can enter a location name in the search bar to view its weather details.

- Favorites

    - Users can add a location to their favorites, which are saved in the app's state.

### Custom Hooks & Context

Weather data fetching and state management are abstracted into custom hooks (useWeather) and Context API for modular and maintainable code.

# Thanks for reading. Wish you all the best.
