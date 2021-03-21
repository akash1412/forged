import { Box } from "@chakra-ui/layout";

import Form from "./components/Form";
// import { Button } from "@chakra-ui/button";
// import { Spinner } from "@chakra-ui/react";

import LandingPageView from "./components/LandingPageView";

function App() {
	// const { state } = useContext(GlobalContext);

	return (
		<Box color='#fff' h='100%' fontSize='20px'>
			<Box d='flex' flexDir='column' alignItems='center'>
				<LandingPageView />
				<Form />
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
				{state.showButtonSpinner ? <Spinner size='sm' /> : "verify"}
			</Button> */
