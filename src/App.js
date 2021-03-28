import { Box } from "@chakra-ui/layout";

import LandingPageView from "./components/LandingPageView";

function App() {
	return (
		<Box h='100%' fontSize='20px'>
			<Box d='flex' flexDir='column' alignItems='center'>
				<LandingPageView />
			</Box>
		</Box>
	);
}

export default App;

/*
			{state.previewImage && <img src={state.previewImage} alt='preview' />}
			<Button
				size='lg'
				bgColor='primaryGreen'
				opacity={state.showButtonSpinner ? ".6" : "1"}>
				{state.showButtonSpinner ? W}
			</Button> */
