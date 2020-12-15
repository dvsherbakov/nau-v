import React from 'react'

export interface IFormula {
  key: string;
  fClass: number;
  name: string;
  body: React.FC;
  description: React.FC;
  dimendions: React.FC;
}
