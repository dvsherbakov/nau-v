export type TAnswer = {
  id: number,
  text: string,
  comment?: string,
}

export interface IAnswProps {
  answCandidates: TAnswer[];
  answInitials: TAnswer[];
  setRes(results: number[]): number[];
}
