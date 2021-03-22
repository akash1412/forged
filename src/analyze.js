import { Box, Button, Image, Skeleton, Spinner } from "@chakra-ui/react";

import { GlobalContext } from "./context/reducer";
import { useContext } from "react";

const Analyze = props => {
	const { imageUploaded, cloudImage, dispatch } = useContext(GlobalContext);

	return (
		<Box d='flex' flexDir='column' alignItems='center' py='25px'>
			<Skeleton isLoaded={imageUploaded} w='350px' h='350px'>
				<Box
					maxW='350px'
					maxH='350px'
					objectFit='cover'
					borderRadius='5px'
					overflow='hidden'>
					<Image
						w='100%'
						h='100%'
						src={cloudImage}
						onLoad={() => dispatch({ type: "IMAGE_UPLOADED" })}
						alt='cloudImg'
					/>
				</Box>
			</Skeleton>
			<Button marginTop='20px' px='20px' py='4px' minW='11rem' outline='none'>
				{!imageUploaded ? <Spinner size='sm' /> : "Analyze"}
			</Button>
		</Box>
	);
};

export default Analyze;
