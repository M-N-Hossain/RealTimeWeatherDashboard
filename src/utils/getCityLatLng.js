async function getCityLatLng(location) {
  const cityInfo = {
    location: "",
    latitude: 0,
    longitude: 0,
  };

  const response = await fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${
      import.meta.env.VITE_WEATHER_API_KEY
    }`
  );

  if (!response.ok) {
    throw new Error(
      "Something went wrong while fetching city latitude and longitude"
    );
  }

  const data = await response.json();

  console.log(data);

  if (data) {
    const lat = data[0].lat;
    const long = data[0].lon;

    cityInfo.location = data[0].name;
    cityInfo.latitude = lat;
    cityInfo.longitude = long;
    return cityInfo;
  }
}

export default getCityLatLng;
