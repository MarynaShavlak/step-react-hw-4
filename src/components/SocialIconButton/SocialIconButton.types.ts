import { JSXElementConstructor } from 'react';
export interface IBtn {
  id: number;
  name: string;
  url: string;
}

export interface IconMap {
  [key: string]: JSXElementConstructor<any>;
}
