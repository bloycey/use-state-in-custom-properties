import React, { useState, createContext } from "react";

export const useStateInCustomProperties = (className, propertiesObject) => {
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

export const ThemeContext = createContext();

export const ThemeWrapper = ({ themeStyles, children }) => {
	const [styles, setStyles] = useState(themeStyles);

	const CustomPropertiesWrapper = useStateInCustomProperties(
		".theme-wrapper",
		styles
	);

	const setStyle = (styleVarName, newValue) =>
		setStyles({
			...styles,
			[styleVarName]: newValue,
		});

	const useStyleSync = (name, val) => {
		useEffect(() => {
			if (styles[name] !== val) {
				setStyle(name, val);
			}
		}, [val, name]);
	};

	return (
		<>
			<ThemeContext.Provider value={{ setStyle, styles, useStyleSync }}>
				<CustomPropertiesWrapper>{children}</CustomPropertiesWrapper>
			</ThemeContext.Provider>
		</>
	);
};

export default useStateInCustomProperties;
