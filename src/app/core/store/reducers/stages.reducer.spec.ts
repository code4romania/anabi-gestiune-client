import { Stage } from '../../models';
import * as fromStages from '../actions/stages.action';
import { initialState, reducer, StageState } from './stages.reducer';

describe('Stages Reducer', () => {
  it('should return current state when no valid action', () => {
    const expectedState = reducer(initialState, { type: 'INVALID_ACTION'} as fromStages.StagesAction);
    expect(expectedState).toEqual(initialState);
  });

  it('should set loading to true on LOAD_STAGES', () => {
    const expectedState = {
      ...initialState,
      loading: true,
    } as StageState;
    const actualState = reducer(initialState, new fromStages.LoadStages());
    expect(actualState).toEqual(expectedState);
  });

  it('should set entities and loaded to true on LOAD_STAGES_SUCCESS', () => {
    const theStages = [
      new Stage({
        id: 1,
        name: 'Stage 1',
        isFinal: true,
        isRecovery: true,
      }),
      new Stage({
        id: 2,
        name: 'Stage 2',
        isFinal: true,
        isRecovery: false,
      }),
    ];

    const expectedState = {
      ...initialState,
      entities: {
        1: theStages[0],
        2: theStages[1],
      },
      loaded: true,
      loading: false,
    };
    const actualState = reducer(initialState, new fromStages.LoadStagesSuccess(theStages));
    expect(actualState).toEqual(expectedState);
  });
});
