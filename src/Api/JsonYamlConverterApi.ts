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
		if (value === '') return value;

		const indent: number = this.getIndentAmount(indentation);

		try {
			switch (conversion) {
				default:
				case 'JSONToYaml':
					return yamlHelper.convertFromJSON(value, indent);
				case 'YamlToJSON':
					return jsonHelper.convertFromYaml(value, indent);
			}
		} catch (error: any) {
			return error.message;
		}
	};

	public getIndentAmount = (indentation: IndentationType): number => {
		switch (indentation) {
			default:
			case 'TwoSpaces':
				return 2;
			case 'FourSpaces':
				return 4;
		}
	};
}
