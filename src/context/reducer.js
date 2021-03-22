import { useReducer, createContext } from "react";

export const GlobalContext = createContext();

const ContextProvider = ({ children }) => {
	const INITIAL_STATE = {
		previewImage: null,
		cloudImage: null,
		results: null,
		loading: false,
		imageUploaded: false,
	};

	const Reducer = (state, action) => {
		switch (action.type) {
			// case "UPLOADING_IMAGE":
			// 	return { ...state, imageUploaded: true };

			case "SET_UPLOADED_IMAGE":
				return {
					...state,
					cloudImage: action.payload,
				};

			case "IMAGE_UPLOADED":
				return { ...state, imageUploaded: true };

			default:
				return state;
		}
	};

	const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

	return (
		<GlobalContext.Provider value={{ ...state, dispatch }}>
			{children}
		</GlobalContext.Provider>
	);
};

export default ContextProvider;
