import { type BoardType } from '@/utils/board';
import { type ActionType } from './ActionTypes';

export interface ActionModel {
  type: ActionType;
  value?: number;
}

export interface StorageModel {
  best?: number;
  score?: number;
  board?: BoardType;
  boardSize?: number;
  defeat?: boolean;
  victoryDismissed?: boolean;
}

export interface Point {
  x: number;
  y: number;
}