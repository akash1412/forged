import { Image } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

const LandingPageView = () => {
	return (
		<Box height='85vh'>
			<Image src='/hi.svg' width={["100px", "300px"]} />
		</Box>
	);
};

export default LandingPageView;
