let response = prompt(
  "What froyo flavors would you like? Seperate using commas."
);
const responseArray = response.split(",");
const flavors = organizeFlavors(responseArray);

console.log("Your Order:");

for (const key in flavors) {
  console.log(`${key}: ${flavors[key]}`);
}

/**
 * @param {string[]} responseArray an array of the response
 * @param {flavors} flavors an object of all flavors in the response array
 * @returns void
 */
function organizeFlavors(responseArray) {
  const flavors = {};

  for (let index = 0; index < responseArray.length; index++) {
    const flavor = responseArray[index];

    if (flavors[flavor]) {
      flavors[flavor] += 1;
    } else {
      flavors[flavor] = 1;
    }
  }

  return flavors;
}
