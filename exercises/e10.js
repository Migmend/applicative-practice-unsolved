import { data } from "../data/data";

// SPACE DATA EXERCISE 10
// Return a given asteroid object of data
// Return example: { key1: value1, key2: value2, ... , keyN: valueN }

export function getAsteroidDataByName(data, asteroidName) {
  // Your code goes here...
  // return data.planets.find((planet) => planet.name === "Earth") || null

  // const urf = data.planets.find((planet) => {
  //   if (planet.name === "Earth") {
  //     return planet;
  //   }
  // });

  // const foundAster = data.asteroids.find((asteroid) => {
  //   if (asteroid.name === asteroidName) {
  //     return asteroid;
  //   }
  // });

  const foundRoids = data.asteroids.find(function (asteroid) {
    if (asteroid.name.includes(asteroidName)) {
      return asteroid;
    }
  });

  return foundRoids;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
