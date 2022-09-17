export type TFarm = {
  id: string;
  name: string;
  description: string;
  coordinates: [number, number];
};

export interface IInitialState {
  farms: TFarm[];
  message: string;
  serverConnect: boolean;
}
