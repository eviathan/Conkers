import JsonYamlConverterApi from 'Api/JsonYamlConverterApi';
import JWTEncoderApi from 'Api/JWTEncoderApi';
import {
	createContext,
	useContext,
	FunctionComponent,
	PropsWithChildren,
} from 'react';

export const ApiContext = createContext<IApiFactory | null>(null);

interface IApiFactory {
	jwtEncoderApi: JWTEncoderApi;
	jsonYamlConverterApi: JsonYamlConverterApi;
}

const ApiContextProvider: FunctionComponent<PropsWithChildren<object>> = ({
	children,
}) => {
	return (
		<ApiContext.Provider
			value={{
				jwtEncoderApi: new JWTEncoderApi(),
				jsonYamlConverterApi: new JsonYamlConverterApi(),
			}}
		>
			{children}
		</ApiContext.Provider>
	);
};

export const useApi: () => IApiFactory = () => {
	const context = useContext(ApiContext);
	if (context == null) {
		throw new Error('Missing ApiContextProvider parent');
	}
	return context;
};

export default ApiContextProvider;
