export type FaceColor = 'W' | 'Y' | 'R' | 'O' | 'B' | 'G';

export interface CubieFaceColors {
  right: FaceColor | null;
  left: FaceColor | null;
  up: FaceColor | null;
  down: FaceColor | null;
  front: FaceColor | null;
  back: FaceColor | null;
}

export interface Cubie {
  position: [number, number, number];
  colors: CubieFaceColors;
}

export type Axis = 'x' | 'y' | 'z';
export type Layer = -1 | 0 | 1;
export type Direction = 1 | -1;

export interface Move {
  axis: Axis;
  layer: Layer;
  direction: Direction;
}

export interface CubeState {
  cubies: Cubie[];
  moveHistory: Move[];
}

export const FACE_COLOR_MAP: Record<FaceColor, string> = {
  W: '#ffffff',
  Y: '#ffd500',
  R: '#b71234',
  O: '#ff5800',
  B: '#0046ad',
  G: '#009b48',
};

export const FACE_COLOR_NAMES: Record<FaceColor, string> = {
  W: '白',
  Y: '黄',
  R: '红',
  O: '橙',
  B: '蓝',
  G: '绿',
};
