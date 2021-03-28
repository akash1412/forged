import { Image } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import Form from "./Form";

const LandingPageView = () => {
	return (
		<Box height='85vh' width='85%' d='flex' alignItems='center'>
			<Form />
			<Image src='homeImg.png' width='70%' marginLeft='auto' />
		</Box>
	);
};

export default LandingPageView;
