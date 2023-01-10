import { ReactElement } from 'react';
import JWTEncoder from 'renderer/Containers/JWTEncoder';

export type Tool = {
  path: string;
  title: string;
  description: string;
  icon: string;
  type: ToolType;
  element: ReactElement;
};

export const tools: Array<Tool> = [
  {
    path: 'jwt-encoder',
    title: 'JWT Encoder/ Decoder',
    description: 'Decode a JWT header payload and signature',
    icon: '',
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
