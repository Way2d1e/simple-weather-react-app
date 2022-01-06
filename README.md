# Simple Weather React App

## Application functionality
    
- displaying the weather of the current geolocation
- output of weather results for the requested city
- adding a city to favorites, and the ability to find out its weather by simply clicking on the button

## Libraries and services used

- [Polaris Shopify Components](https://polaris.shopify.com/components/get-started) - ready-made components for the application, similar to bootstrap or other component libraries.
- [Open Weather Map](https://openweathermap.org/) - api for requesting weather data.

## Dependency installation and configuration

To run the application you need to install all the dependencies.

To do this, enter the command in the console
### `npm install`

After installing the dependencies, you will need to change the API access key.
You can get it on the website [Open Weather Map](https://openweathermap.org/).

After receiving the key, change the value in the file to the following path.

`src/services/open-weather-map-service`

## Run App

To run the application in development mode, enter the following command in the console.

### `npm run`

The application will open by following the link [http://localhost:3000/](http://localhost:3000/)

To build the application, enter the command in the console

### `npm build`

Аfter that, the result of building the application in the folder `build`