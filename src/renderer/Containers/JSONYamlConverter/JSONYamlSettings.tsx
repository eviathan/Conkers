import { ConversionType, IndentationType } from 'Api/JsonYamlConverterApi';
import { useEffect, useState } from 'react';
import { HiArrowsRightLeft } from 'react-icons/hi2';
import { RiSpace } from 'react-icons/ri';
import DropdownConfigurationItem from '../../Components/ConfigurationItem/DropDownConfigurationItem';

import './style.scss';

export interface ISettings {
	conversion: ConversionType;
	indent: IndentationType;
}

type IConversionItem = {
	[key in ConversionType]: string;
};

type IIndentationItem = {
	[key in IndentationType]: string;
};

interface IProps {
	onUpdate: (settings: ISettings) => void;
}

export default ({ onUpdate }: IProps) => {
	const [settings, setSettings] = useState({
		conversion: 'JSONToYaml',
		indent: 'TwoSpaces',
	} as ISettings);

	const conversionItems: IConversionItem = {
		JSONToYaml: 'JSON to Yaml',
		YamlToJSON: 'Yaml to JSON',
	};

	const indentationItems: IIndentationItem = {
		TwoSpaces: '2 Spaces',
		FourSpaces: '4 Spaces',
	};

	useEffect(() => {
		onUpdate(settings);
	}, [onUpdate, settings]);

	return (
		<>
			<DropdownConfigurationItem
				icon={HiArrowsRightLeft}
				title="Conversion"
				subTitle="Select which conversion mode you want to use"
				items={conversionItems}
				onSelect={(value: string) =>
					setSettings({
						...settings,
						conversion: value as ConversionType,
					})
				}
			/>
			<DropdownConfigurationItem
				icon={RiSpace}
				title="Indent(s)"
				items={indentationItems}
				onSelect={(value: string) =>
					setSettings({
						...settings,
						indent: value as IndentationType,
					})
				}
			/>
		</>
	);
};
