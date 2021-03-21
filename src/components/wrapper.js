import App from "../App";
import Header from "./header";
import { Route } from "react-router-dom";

import { Box } from "@chakra-ui/react";

const Wrapper = () => {
	return (
		<Box d='flex' flexDir='column' minH='100vh'>
			<Header />
			<Box px='12px' bgColor='primaryDark' flexGrow='1' marginTop='50px'>
				<Route path='/' component={App} />
			</Box>
		</Box>
	);
};

export default Wrapper;
