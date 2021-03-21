import { FormLabel, Input, FormControl } from "@chakra-ui/react";
import { useContext } from "react";

import { GlobalContext } from "../context/reducer";

const Form = () => {
	// !fixed warning issue deploy
	const { _, dispatch } = useContext(GlobalContext);
	console.log(_);
	const previewImage = file => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onloadend = () => {
			dispatch({ type: "SET_PREVIEW_IMAGE", payload: reader.result });
		};
	};

	const uploadImage = async file => {
		// setIsImageUploading(true);

		dispatch({ type: "SHOW_BUTTON_SPINNER" });

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

		previewImage(file);
		uploadImage(file);

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
