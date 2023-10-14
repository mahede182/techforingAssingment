import { ImageSourcePropType } from "react-native";
export interface Tresult {
  id: number | string;
  title: string;
  output: number;
}

export interface TOptionData {
  id: number | string;
  imgSource: string | any;
  title: string;
  exerpt: string;
}

export interface TExerptData {
  id?: number;
  lExerpt: string;
  rExerpt: string;
  color?: string;
}
