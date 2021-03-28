import { Box, Button, Image, Skeleton, Spinner } from "@chakra-ui/react";

import { GlobalContext } from "./context/reducer";
import { useContext, Fragment, useEffect } from "react";
import { useHistory } from "react-router-dom";

const Analyze = props => {
	const { imageUploaded, cloudImage, dispatch } = useContext(GlobalContext);

	const history = useHistory();

	useEffect(() => {
		return () => {
			dispatch({ type: "INIT" });
		};
	}, [dispatch]);

	return (
		<Fragment>
			<Box ml='5px'>
				<Image
					src='/left-arrow.svg'
					width='50px'
					height='50px'
					cursor='pointer'
					onClick={() => history.goBack()}
				/>
			</Box>
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
				<Button
					marginTop='20px'
					px='20px'
					py='10px'
					minW='11rem'
					outline='none'
					bgColor='rgba(15, 14, 14, 0.945)'
					color='#fff'>
					{!imageUploaded ? <Spinner size='sm' color='#fff' /> : "Analyze"}
				</Button>
			</Box>
		</Fragment>
	);
};

export default Analyze;
