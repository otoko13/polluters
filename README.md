# Top 20 Global Polluters

![Alt text](./screenshot.jpg?raw=true "Screenshot")

My decision to display the data on a map came from my primary curiosity about how the polluters were distributed geographically. Instinctively, I wanted to see where they were located, whether there were concentrations in certain areas or in one hemisphere. The map, therefore, acts as the primary mode of navigating between the data points.

The UI behind the comparison charts button has not been implemented (yet).

## Author

Mayur Bapodra\
[eighthsamurai@hotmail.com](mailto:eighthsamurai@hotmail.com)

## Viewing the project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). 

Install necessary packages by first running `npm install` from the project directory. Run the app using `npm run start` in the same directory. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Run tests using `npm run test`.

## Improvements and enhancements

As always with coding exercises, I couldn't do everything I wanted to. Here are a list of improvements I'd make to the design and implementation given more time:

- Implement the comparison charts button, which would open a modal/panel allowing users to select which polluters to compare. This would produce bar charts for the numerically comparable data points. Using d3, you could make the data update in a nice, animated way as polluters are filtered in or out.

- This is the first time I've used material-ui (I used the exercise as a learning experience). As such, I probably missed several components I could have used (e.g., Flexbox for layout). I also would have utilised more CSS-in-JS opportunities provided by the components.

- React testing library seems currently incompatible with some of the components rendered by react-simple-maps. It would be good to investigate these and add more interactivity tests. 

- I started out sure that Redux would be overkill for such a simple app where most of the data flow is in one direction. However, by the end, due to the setting of the selected polluter from several points in the component tree. I'd like to investigate its use, having studied Redux on occasion but never having had an opportunity to use it practically in a project before.

- Automate adding the longitude and latitude data using the Google Maps Cloud Platform API.

- There should be a way to programmatically center the map on the selected polluter marker so that it wouldn't be hidden by the info panel. I created a branch to investigate this, but the react-simple-maps API has some missing information and while centering worked in principle, there were some issues.

- A fully responsive version of the layout for mobile browsers.

- Further accessibility checks and improvements.

## Credits

The oil barrel SVG was adapted from one authored by Alistair, found at  [freesvg](https://freesvg.org/oil-barrel).