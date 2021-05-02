type CallbackFunction = (id: string, res: number[]) => void

export type TQuestion = {
  key: string,
  Body(SetRes: CallbackFunction): JSX.Element,
}
