import { ReactElement } from 'react';
import { IconType } from 'react-icons';
import { TbCircleDashed, TbSortAscendingNumbers } from 'react-icons/tb';
import { TfiHtml5 } from 'react-icons/tfi';
import { FaLink, FaMarkdown, FaBriefcase } from 'react-icons/fa';
import { MdOutlineImageAspectRatio, MdSwapHoriz } from 'react-icons/md';
import { RiFolderZipLine } from 'react-icons/ri';
import { HiIdentification } from 'react-icons/hi';
import { VscCode, VscCalendar, VscRegex } from 'react-icons/vsc';
import { BiCodeCurly } from 'react-icons/bi';
import { ImDatabase, ImHome3 } from 'react-icons/im';
import { AiOutlineFieldNumber } from 'react-icons/ai';
import { BsPatchCheckFill, BsTextareaT, BsChatTextFill } from 'react-icons/bs';
import { IoFingerPrint } from 'react-icons/io5';
import { GiCuckooClock } from 'react-icons/gi';
import JWTEncoder from 'renderer/Containers/JWTEncoder';

// NOTE: This is all very naive, maybe look into database storage on the client side

export type Tool = {
	path: string;
	title: string;
	description?: string;
	icon: IconType;
	type?: ToolType;
	element?: ReactElement;
};

export type ToolGroup = {
	[key: string]: Array<Tool>;
};

export const tools: Array<Tool> = [
	// Converters
	{
		path: 'json-yaml-converter',
		title: 'JSON / Yaml',
		description: 'Convert Json data to Yaml and vice versa',
		icon: MdSwapHoriz,
		type: 'Converters',
		element: <h1>TO BE IMPLEMENTED: JSON / Yaml</h1>,
	},
	{
		path: 'number-base-converter',
		title: 'Number Base',
		description: 'Convert numbers from one base to another',
		icon: AiOutlineFieldNumber,
		type: 'Converters',
		element: <h1>TO BE IMPLEMENTED: Number Base</h1>,
	},
	{
		path: 'date-converter',
		title: 'Date',
		description: 'Converts date from one format to another',
		icon: VscCalendar,
		type: 'Converters',
		element: <h1>TO BE IMPLEMENTED: Date</h1>,
	},
	{
		path: 'cron-converter',
		title: 'Cron Parser',
		description: 'Parse Cron expression to get scheduled dates',
		icon: GiCuckooClock,
		type: 'Converters',
		element: <h1>TO BE IMPLEMENTED: Cron Parser</h1>,
	},
	// Encoders / Decoders
	{
		path: 'html-encoder',
		title: 'HTML',
		description:
			'Encode or decode all the applicable characters to their corresponding HTML entities',
		icon: TfiHtml5,
		type: 'Encoders / Decoders',
		element: <h1>TO BE IMPLEMENTED: HTML</h1>,
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
		description: 'Compress or decompress strings',
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
	{
		path: 'hash-generators',
		title: 'Hash',
		description: 'Calculate MD5, SHA1, SHA256 and SHA512 hash from text data',
		icon: IoFingerPrint,
		type: 'Text',
		element: <JWTEncoder />,
	},
	{
		path: 'uuid-generators',
		title: 'UUID',
		description: 'Generate UUIDs version 1 and 4',
		icon: HiIdentification,
		type: 'Text',
		element: <JWTEncoder />,
	},
	{
		path: 'lorem-ipsum-generators',
		title: 'Lorem Ipsum',
		description: 'Generate Lorem Ipsum placeholder text',
		icon: BsChatTextFill,
		type: 'Text',
		element: <JWTEncoder />,
	},
	{
		path: 'checksum-generators',
		title: 'Checksum',
		description: 'Generate a hash with Checksum based on a file',
		icon: FaBriefcase,
		type: 'Text',
		element: <JWTEncoder />,
	},
	// Text
	{
		path: 'inspector-and-case-converter-text',
		title: 'Inspector & Case Converter',
		description: 'Escapes or unescapes a string',
		icon: FaBriefcase,
		type: 'Text',
		element: <JWTEncoder />,
	},
	{
		path: 'regex-text',
		title: 'RegEx',
		description: 'Validate and test regular expressions',
		icon: VscRegex,
		type: 'Text',
		element: <JWTEncoder />,
	},
	{
		path: 'text-diff-text',
		title: 'Text Diff',
		description: 'Compares two texts',
		icon: BsTextareaT,
		type: 'Text',
		element: <JWTEncoder />,
	},
	{
		path: 'hyphenation-text',
		title: 'Hyphenation',
		description: '',
		icon: VscCode,
		type: 'Text',
		element: <JWTEncoder />,
	},
	{
		path: 'xml-validator-text',
		title: 'XML Validator',
		description: 'Validate XML data via an XSD scheme',
		icon: BsPatchCheckFill,
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
