export type TAnswer = {
  id: number,
  text: string,
}

export interface IAnswProps {
  answCount: number;
  answCandidates: TAnswer[];
}
