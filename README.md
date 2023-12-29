# flow-random-js

flow-random-js is a library for generating random flows based on probabilities.

## Installation

To install flow-random-js into your project, you can use npm:

```bash
npm install flow-random
```

## Usage

```javascript
import { flowRandom } from 'flow-random';

// Generate a random flow with a custom probability (optional, default is 100)
const resultado = flowRandom(); // Returns `true` or `false` based on probability
console.log(resultado); // Result of the random flow
```
## Params

probability (optional): An integer representing the probability for the flow to be true. Default is 100.

## Example

```javascript
// Generate a random flow with a 75% probability
const resultado = flowRandom(75); // Returns `true` or `false` based on probability
console.log(resultado); // Result of the random flow
```

## Contributing

Feel free to contribute to this library! If you have suggestions, issues, or enhancements, please open an issue or a pull request.

## License

This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).