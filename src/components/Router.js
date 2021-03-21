import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import Wrapper from "./wrapper";
import theme from "../theme";
import GlobalContextProvider from "./../context/reducer";

const Router = () => {
	return (
		<BrowserRouter>
			<ChakraProvider theme={theme}>
				<GlobalContextProvider>
					<Wrapper />
				</GlobalContextProvider>
			</ChakraProvider>
		</BrowserRouter>
	);
};

export default Router;
