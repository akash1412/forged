import { FormLabel, Input, FormControl } from "@chakra-ui/react";
import { useContext } from "react";

import { GlobalContext } from "../context/reducer";

import { useHistory } from "react-router-dom";

const Form = () => {
	// !fixed warning issue deploy
	const { dispatch } = useContext(GlobalContext);

	const history = useHistory();

	const uploadImage = async file => {
		// dispatch({ type: "UPLOADING_IMAGE" });

		const formData = new FormData();
		formData.append("file", file);
		formData.append("upload_preset", "dlyu4xhy");

		const { secure_url } = await fetch(
			"https://api.cloudinary.com/v1_1/dhqp2dd6b/image/upload",
			{
				method: "POST",
				body: formData,
			}
		).then(res => res.json());

		dispatch({ type: "SET_UPLOADED_IMAGE", payload: secure_url });
	};

	const handleInputChange = e => {
		const file = e.target.files[0];
		if (!file) return;

		uploadImage(file);

		history.push("/analyze");
		// router.push("/analyze");
	};

	return (
		<FormControl>
			<FormLabel
				htmlFor='upload'
				d='inline-block'
				bgColor='primaryGreen'
				px='10px'
				py='5px'>
				Upload
			</FormLabel>
			<Input id='upload' type='file' d='none' onChange={handleInputChange} />
		</FormControl>
	);
};

export default Form;
