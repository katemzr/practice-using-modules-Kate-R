import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import chalk from "chalk";


//   ○ Use yargs to parse a --city argument provided by the user.
//   ○ Simulate fetching weather data by returning a hardcoded response for different cities.
//   ○ Use chalk to style the output, emphasizing the city name and weather details.

//   1. Parse command-line arguments for a city name.
//   2. Use a module to simulate fetching weather data.
//   3. Display a weather summary in the console.

const cityWeatherStats = {
    "chicago": `The weather for Chicago is ${chalk.hex('#6616b1')(70)} degrees and ${chalk.hex('#6616b1')("windy")}.`,
    "phoenix": `The weather for Phoenix is ${chalk.hex('#d8421d')(110)} degrees and ${chalk.hex('#d8421d')("sunny")}.`,
    "juneau": `The weather for Juneau is ${chalk.hex('#200cd6')(24)} degrees and ${chalk.hex('#200cd6')("icy")}.`,
    "default": `Unknown city. Try again, loser.`,
};

let { city } = yargs(hideBin(process.argv)).argv;

city = cityWeatherStats[city.toLowerCase()] ? cityWeatherStats[city.toLowerCase()] : "default";

console.log(cityWeatherStats[city]);


// console.log(cityWeatherStats.chicago);
// console.log(cityWeatherStats.phoenix);
// console.log(cityWeatherStats.juneau);


/*
○ The purpose of package.json in managing dependencies.
The package.json file contains a list of all installed dependencies and their version. This ensures that
anyone cloning the project installs the same modules and same versions.

○ Why node_modules should not be included in version control.
node-modules contains all the code for the modules that we installed. It does not make sense for us to upload
all that code to github or have multiple versions in version control because anyone who wants to run our code
can simply run npm-install for themselves and get the modules.

○ How npm install reinstalls dependencies and its importance in collaborative projects.
Since we are not including the files for our dependencies in version control when we share our code, using
npm install will correctly reinstall all dependencies at the correct version for collaborators to work on.
*/