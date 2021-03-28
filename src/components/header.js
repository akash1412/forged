import { Box, List } from "@chakra-ui/layout";
import React from "react";

const Header = () => (
	<Box
		px='20px'
		bgColor='primaryDark'
		color='rgba(15, 14, 14, 0.945)'
		borderBottomColor='rgba(15, 14, 14, 0.945)'
		borderBottomWidth='1.5px'
		borderStyle='solid'
		maxHeight='50px'
		height='50px'
		width='100%'
		position='fixed'
		d='flex'
		alignItems='center'>
		<Box mr='auto' fontWeight='800' fontSize='30px'>
			Forged
		</Box>

		<List
			listStyleType='none'
			d='flex'
			h='100%'
			justifyContent='flex-end'
			alignItems='center'
			fontWeight='500'>
			<li>problem</li>
		</List>
	</Box>
);

export default Header;
