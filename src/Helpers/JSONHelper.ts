import { parse } from 'yaml';

export default class JSONHelper {
	public isValid = (input: string): boolean => {
		return false;
	};

	public convertFromYaml = (input: string, indent = 2): string => {
		// TODO: Validate Yaml
		// TODO: Deserialise Yaml
		const yamlObject = parse(input);

		// TODO: Serialise YAML
		return JSON.stringify(yamlObject, null, indent);
	};
}
