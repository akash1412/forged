import App from "../App";
import Analyze from "../analyze";
import Header from "./header";
import { Route } from "react-router-dom";

import { Box } from "@chakra-ui/react";

const Wrapper = () => {
	return (
		<Box d='flex' flexDir='column' minH='100vh'>
			<Header />
			<Box px='12px' bgColor='primaryDark' flexGrow='1' marginTop='50px'>
				<Route exact path='/' component={App} />
				<Route path='/analyze' component={Analyze} />
			</Box>
		</Box>
	);
};

export default Wrapper;
