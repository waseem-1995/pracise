import "./App.css";
import { Button } from "./Components/Button";
import { Input } from "./Components/Input";
import { useCounter } from "./hooks/useCounter";

function App() {
	/* 
  1. Implement only the hook functionality inside hooks/useCounter.js
  2. Create the custom components, inside the respective files of Image.jsx and Image.jsx
  3. The application should function properly after the implimentation of hooks and Custom components
  */
	const { countValue, incCount, decCount } = useCounter({
		initialValue: 10,
		minValue: 5,
		maxValue: 15,
	});

	return (
		<div className="App">
			{/* DO NOT CHANGE the 5 lines below   */}
			<h3>Value: {countValue}</h3>
			<button onClick={() => incCount()}>Increment</button>
			<button onClick={() => incCount(3)}>Increment 3</button>
			<button onClick={() => decCount(2)}>Decrement 2</button>
			<button onClick={() => decCount(4)}>Decrement 4</button>
			<button onClick={() => decCount()}>Decrement</button>

			<br />
			<br />
			{/* You can pass the required props as mentioned in the questions to
      check if the components are working properly */}
			<Button colorScheme="green" size="lg" variant="solid" />
			<br />
			<br />
			<Input type="password" size="xl" variant="outline" />
		</div>
	);
}

export default App;
