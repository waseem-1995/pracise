import { useState } from "react";

/* 
1. Complete the useCounter hook functionality here
2. Feel free to change any boilerplate logic present inside this custom hook
3. DO NOT CHANGE the name `useCounter` of this custom hook
*/
export const useCounter = ({ initialValue, minValue, maxValue }) => {
	const [countValue, setcountValue] = useState(initialValue);

	const incCount = (val = 1) => {
		if (countValue < maxValue) {
			setcountValue((prev) => prev + val);
		}
	};
	const decCount = (val = 1) => {
		if (countValue > minValue) {
			setcountValue((prev) => prev - val);
		}
	};
	return {
		countValue,
		incCount,
		decCount,
	};
};
