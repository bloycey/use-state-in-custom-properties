import React from "react";

const useStateInCustomProperties = (className, propertiesObject) => {
	return ({ children }) => {
		const customPropertyStyles = Object.entries(propertiesObject).reduce(
			(acc, [key, value]) => ({
				...acc,
				[`--${key}`]: value,
			}),
			{}
		);

		return (
			<div className={className} style={customPropertyStyles}>
				{children}
			</div>
		);
	};
};

export default useStateInCustomProperties;

