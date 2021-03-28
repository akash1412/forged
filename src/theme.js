import { extendTheme } from "@chakra-ui/react";

const colors = {
	primaryDark: "#F4F1DE",

	primaryGreen: "hsl(160, 100%, 40%)",
	primaryGreenDark: "hsl(159, 100%, 37%);",
	black: {
		20: "hsla(0, 0%, 100%, 0.07)",
	},
};

export default extendTheme({ colors });
