import { ReactFragment } from 'react'

export interface IExersise {
  tags: string[];
  klass: number;
  id: string;
  text?: string;
  element?: JSX.Element;
}
