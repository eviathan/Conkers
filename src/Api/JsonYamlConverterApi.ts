import JSONHelper from 'Helpers/JSONHelper';
import YamlHelper from 'Helpers/YamlHelper';

export type ConversionType = 'JSONToYaml' | 'YamlToJSON';
export type IndentationType = 'TwoSpaces' | 'FourSpaces';

const jsonHelper = new JSONHelper();
const yamlHelper = new YamlHelper();

export default class JwtEncoderApi {
	public convert = (
		value: string,
		conversion: ConversionType = 'JSONToYaml',
		indentation: IndentationType = 'TwoSpaces'
	): string => {
		console.log('JSON <> YAML Converter: Not implemented');

		try {
			switch (conversion) {
				default:
				case 'JSONToYaml':
					return yamlHelper.convertFromJSON(value);
				case 'YamlToJSON':
					return jsonHelper.convertFromYaml(value);
			}
		} catch (error: any) {
			return error.message;
		}
	};
}
