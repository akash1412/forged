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
		position='fixed'
		d='flex'
		alignItems='center'>
		<Box mr='auto'>Icon</Box>
		<Box d='flex' h='100%' justifyContent='flex-end' alignItems='center'>
			<li>introduction</li>
			<li>results</li>
			<li>tweets</li>
		</Box>
	</Box>
);

export default Header;
