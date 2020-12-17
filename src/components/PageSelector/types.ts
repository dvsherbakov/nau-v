export interface IPageSelectorProps {
  current: number;
  count: number;
  total: number;
  selectPage: (curenPage: number) => void;
}
