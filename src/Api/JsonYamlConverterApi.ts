export type ConversionType = 'JSONToYaml' | 'YamlToJSON';

export type IndentationType = 'TwoSpaces' | 'FourSpaces';

export default class JwtEncoderApi {
	public convert = (
		value: string,
		conversion: ConversionType = 'JSONToYaml',
		indentation: IndentationType = 'TwoSpaces'
	): string => {
		console.log('JSON <> YAML Converter: Not implemented');
		return `${value} blejre`;
	};
}
