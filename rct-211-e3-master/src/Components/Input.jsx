//Complete the custom Input component based on the props that it expects to receive

import "./Input.css";

export const Input = ({
	type = "text",
	size = "md",
	variant,
	value,
	onChange,
}) => {
	return (
		<input
			className={`${size || "sm" || "lg" || "xl"} ${
				variant || "outline" || "filled" || "flushed"
			}`}
			type={type}
			value={value}
			onChange={value}
		/>
	);
};
