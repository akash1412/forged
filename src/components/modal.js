import { useContext } from "react";
import { GlobalContext } from "./../context/reducer";
import {
	AlertDialog,
	AlertDialogBody,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogContent,
	AlertDialogOverlay,
	Button,
} from "@chakra-ui/react";

const Modal = () => {
	const { showAlert, dispatch } = useContext(GlobalContext);

	return (
		<AlertDialog isOpen={showAlert}>
			<AlertDialogOverlay>
				<AlertDialogContent>
					<AlertDialogHeader fontSize='lg' fontWeight='bold'>
						Service Unvailable
					</AlertDialogHeader>

					<AlertDialogBody>
						Currently we have closed the machine learning API, due to limited
						amount of GPU EC2 instance Avilability,we are saving it for the Demo
						day.
					</AlertDialogBody>

					<AlertDialogFooter>
						<Button
							colorScheme='red'
							onClick={() => dispatch({ type: "SHOW_ALERT" })}>
							close
						</Button>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialogOverlay>
		</AlertDialog>
	);
};
export default Modal;
