import { ReactElement } from 'react';
import { IconType } from 'react-icons';
import { TbCircleDashed, TbSortAscendingNumbers } from 'react-icons/tb';
import { TfiHtml5 } from 'react-icons/tfi';
import { FaLink, FaMarkdown } from 'react-icons/fa';
import { MdOutlineImageAspectRatio, MdSwapHoriz } from 'react-icons/md';
import { RiFolderZipLine } from 'react-icons/ri';
import { VscCode, VscCalendar } from 'react-icons/vsc';
import { BiCodeCurly } from 'react-icons/bi';
import { ImDatabase, ImHome3 } from 'react-icons/im';
import { AiOutlineFieldNumber } from 'react-icons/ai';
import JWTEncoder from 'renderer/Containers/JWTEncoder';
import AllTools from 'renderer/Containers/AllTools';

// NOTE: This is all very naive, maybe look into database storage on the client side

export type Tool = {
	path: string;
	title: string;
	description?: string;
	icon: IconType;
	type?: ToolType;
	element: ReactElement;
};

export type ToolGroup = {
	[key: string]: Array<Tool>;
};

export const tools: Array<Tool> = [
	// All Tools
	{
		path: '/',
		title: 'All Tools',
		icon: ImHome3,
		element: <AllTools />,
	},
	// Converters
	{
		path: 'json-yaml-converter',
		title: 'JSON / Yaml',
		description: 'Convert Json data to Yaml and vice versa',
		icon: MdSwapHoriz,
		type: 'Converters',
		element: <h1>TO BE IMPLEMENTED</h1>,
	},
	{
		path: 'number-base-converter',
		title: 'Number Base',
		description: 'Convert numbers from one base to another',
		icon: AiOutlineFieldNumber,
		type: 'Converters',
		element: <h1>TO BE IMPLEMENTED</h1>,
	},
	{
		path: 'date-converter',
		title: 'Date',
		description: 'Converts date from one format to another',
		icon: VscCalendar,
		type: 'Converters',
		element: <h1>TO BE IMPLEMENTED</h1>,
	},
	// Encoders / Decoders
	{
		path: 'html-encoder',
		title: 'HTML',
		description:
			'Encode or decode all the applicable characters to their corresponding HTML entities',
		icon: TfiHtml5,
		type: 'Encoders / Decoders',
		element: <h1>TO BE IMPLEMENTED</h1>,
	},
	{
		path: 'url-encoder',
		title: 'URL',
		description:
			'Encode or decode all the applicable characters to their corresponding URL',
		icon: FaLink,
		type: 'Encoders / Decoders',
		element: <h1>TO BE IMPLEMENTED</h1>,
	},
	{
		path: 'base64-text-encoder',
		title: 'Base64 Text',
		description: 'Encode & decode Base64 text data',
		icon: TbSortAscendingNumbers,
		type: 'Encoders / Decoders',
		element: <h1>TO BE IMPLEMENTED</h1>,
	},
	{
		path: 'base64-image-encoder',
		title: 'Base 64 Image',
		description: 'Encode & decode Base64 image data',
		icon: MdOutlineImageAspectRatio,
		type: 'Encoders / Decoders',
		element: <h1>TO BE IMPLEMENTED</h1>,
	},
	{
		path: 'gzip-encoder',
		title: 'GZip',
		description: '',
		icon: RiFolderZipLine,
		type: 'Encoders / Decoders',
		element: <h1>TO BE IMPLEMENTED</h1>,
	},
	{
		path: 'jwt-encoder',
		title: 'JWT',
		description: 'Decode a JWT header payload and signature',
		icon: TbCircleDashed,
		type: 'Encoders / Decoders',
		element: <JWTEncoder />,
	},
	// Formatters
	{
		path: 'json-formatter',
		title: 'JSON',
		description: 'Indent or minify Json data',
		icon: BiCodeCurly,
		type: 'Formatters',
		element: <JWTEncoder />,
	},
	{
		path: 'sql-formatter',
		title: 'SQL',
		description: 'Indent or minify SQL scripts',
		icon: ImDatabase,
		type: 'Formatters',
		element: <JWTEncoder />,
	},
	{
		path: 'xml-formatter',
		title: 'XML',
		description: 'Indent or minify XML data',
		icon: VscCode,
		type: 'Formatters',
		element: <JWTEncoder />,
	},
	// Generators
	// Text
	{
		path: 'markdown-preview-text',
		title: 'Markdown Preview',
		description: 'Edit and preview markdown data',
		icon: VscCode,
		type: 'Text',
		element: <JWTEncoder />,
	},
	{
		path: 'markdown-preview-text',
		title: 'Markdown Preview',
		description: 'Edit and preview markdown data',
		icon: VscCode,
		type: 'Text',
		element: <JWTEncoder />,
	},
	{
		path: 'markdown-preview-text',
		title: 'Markdown Preview',
		description: 'Edit and preview markdown data',
		icon: VscCode,
		type: 'Text',
		element: <JWTEncoder />,
	},
	{
		path: 'markdown-preview-text',
		title: 'Markdown Preview',
		description: 'Edit and preview markdown data',
		icon: VscCode,
		type: 'Text',
		element: <JWTEncoder />,
	},
	{
		path: 'markdown-preview-text',
		title: 'Markdown Preview',
		description: 'Edit and preview markdown data',
		icon: VscCode,
		type: 'Text',
		element: <JWTEncoder />,
	},
	{
		path: 'markdown-preview-text',
		title: 'Markdown Preview',
		description: 'Edit and preview markdown data',
		icon: FaMarkdown,
		type: 'Text',
		element: <JWTEncoder />,
	},
];

export type ToolType =
	| 'Converters'
	| 'Encoders / Decoders'
	| 'Formatters'
	| 'Generators'
	| 'Text'
	| 'Graphic';
