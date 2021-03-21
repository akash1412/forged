import { Box } from "@chakra-ui/layout";
import React from "react";

const Header = () => (
	<Box
		px='20px'
		bgColor='primaryDark'
		color='#fff'
		borderBottomColor='black.20'
		borderBottomWidth='2px'
		borderStyle='solid'
		maxHeight='50px'
		height='50px'
		width='100%'
		position='fixed'>
		<Box d='flex'>
			<li>tab 1</li>
			<li>tab 1</li>
			<li>tab 1</li>
		</Box>
	</Box>
);

export default Header;
