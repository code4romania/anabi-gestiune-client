import { IStage, Stage } from '../../models';
import * as fromStages from '../actions/stages.action';

export interface StageState {
  entities: { [id: number]: IStage };
  loaded: boolean;
  loading: boolean;
}

export const initialState: StageState = {
  entities: {},
  loaded: false,
  loading: false,
};

export function reducer(
  state = initialState,
  action: fromStages.StagesAction
): StageState {

  switch (action.type) {
    case fromStages.StageActionTypes.LoadStages: {
      return {
        ...state,
        loading: true,
      } as StageState;
    }

    case fromStages.StageActionTypes.LoadStagesSuccess: {
      const theStages = action.payload;
      const entities = theStages.reduce((aEntities: { [id: number]: Stage }, aStage: Stage) => {
        return {
          ...aEntities,
          [aStage.id]: aStage.toJson(),
        };
      }, {
        ...state.entities,
      });

      return {
        ...state,
        loading: false,
        loaded: true,
        entities,
      };
    }

    case fromStages.StageActionTypes.LoadStagesFail: {
      return {
        ...state,
        loading: false,
        loaded: false,
      } as StageState;
    }

    default: {
      return {
        ...state,
      } as StageState;
    }
  }
}

export const getStagesEntities = (state: StageState) => state.entities;
export const getStagesLoading = (state: StageState) => state.loading;
export const getStagesLoaded = (state: StageState) => state.loaded;
