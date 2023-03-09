//Complete the custom Input component based on the props that it expects to receive

import "./Button.css";

export const Button = ({
	colorScheme = "white",
	size = "md",
	variant = "solid",
}) => {
	return (
		<button
			className={`${colorScheme || "red" || "yellow" || "orange" || "green"} ${
				size || "sm" || "lg" || "xl"
			} ${variant || "ghost" || "outline"}`}
		>
			CUSTOM BUTTON
		</button>
	);
};
