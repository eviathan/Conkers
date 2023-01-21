export type ConversionType = 'JSON to YAML' | 'JSON to YAML';
export type IndentationType = '2 spaces' | '4 spaces;';

export default class JwtEncoderApi {
	public convert = (
		value: string,
		conversion: ConversionType = 'JSON to YAML',
		indentation: IndentationType = '2 spaces'
	): string => {
		console.log('JSON <> YAML Converter: Not implemented');
		return value;
	};
}
