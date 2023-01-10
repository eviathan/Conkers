import { ReactElement } from 'react';
import { IconType } from 'react-icons';
import { TbCircleDashed } from 'react-icons/tb';
import JWTEncoder from 'renderer/Containers/JWTEncoder';

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
  {
    path: 'jwt-encoder',
    title: 'JWT Encoder/ Decoder',
    description: 'Decode a JWT header payload and signature',
    icon: TbCircleDashed,
    type: 'Encoders/ Decoders',
    element: <JWTEncoder />,
  },
];

export type ToolType =
  | 'Converters'
  | 'Encoders/ Decoders'
  | 'Formatters'
  | 'Generators'
  | 'Text'
  | 'Graphic';
