export type TAnswer = {
  id: number,
  text: string,
  comment?: string,
}

export interface IAnswProps {
  answCount: number;
  answCandidates: TAnswer[];
  answInitials: TAnswer[];
}
