import { parse, stringify } from 'yaml';

export default class YamlHelper {
	public isValid = (input: string): boolean => {
		let yaml = input;

		if (yaml === '') return false;
		yaml = yaml.trim();

		try {
			parse(yaml);
		} catch {
			return false;
		}

		return false;
	};

	public convertFromJSON = (input: string, indent = 2): string => {
		const jsonObject = JSON.parse(input);

		return stringify(jsonObject, {
			indent,
		});
	};
}
