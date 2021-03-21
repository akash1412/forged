import { useReducer, createContext } from "react";

export const GlobalContext = createContext();

const ContextProvider = ({ children }) => {
	const INITIAL_STATE = {
		previewImage: null,
		uploadedImage: null,
		results: null,
		loading: false,
		showButtonSpinner: false,
	};

	const Reducer = (state, action) => {
		switch (action.type) {
			case "SET_PREVIEW_IMAGE":
				return { ...state, previewImage: action.payload };

			case "SHOW_BUTTON_SPINNER":
				return { ...state, showButtonSpinner: true };

			case "SET_UPLOADED_IMAGE":
				return {
					...state,
					uploadedImage: action.payload,
					showButtonSpinner: false,
				};

			default:
				return state;
		}
	};

	const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

	return (
		<GlobalContext.Provider value={{ state, dispatch }}>
			{children}
		</GlobalContext.Provider>
	);
};

export default ContextProvider;
