import { Stage } from '../../models';
import { CoreState, State } from '../reducers/index';
import { StageState } from '../reducers/stages.reducer';
import * as fromSelectors from './stages.selectors';

describe('Stages Selectors', () => {
  let state: State;
  let coreState: CoreState;

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
    new Stage({
      id: 3,
      name: 'Stage 3',
      isFinal: false,
      isRecovery: true,
    }),
    new Stage({
      id: 4,
      name: 'Stage 4',
      isFinal: false,
      isRecovery: false,
    }),
  ];

  const getEntitiesAsArray = (aState: State) => {
    return Object.keys(aState.core.stages.entities).map(id => aState.core.stages.entities[id]);
  };

  beforeEach(() => {
    state = {
      core: {
        stages: {
          entities: {
            1: theStages[0],
            2: theStages[1],
            3: theStages[2],
            4: theStages[3],
          },
          loaded: true,
          loading: false,
        } as StageState,
      } as CoreState,
    } as State;

    coreState = state.core;
  });

  describe('getStageState', () => {
    it('should get the Stage state', () => {
      expect(fromSelectors.getStageState(state)).toEqual(coreState.stages);
    });
  });

  describe('getStagesEntities', () => {
    it('should get the entities', () => {
      expect(fromSelectors.getStagesEntities(state)).toEqual(coreState.stages.entities);
    });
  });

  describe('getAllStages', () => {
    it('should get the stages', () => {
      const expectedResult = getEntitiesAsArray(state);
      expect(fromSelectors.getAllStages(state)).toEqual(expectedResult);
    });
  });

  describe('getStagesLoaded', () => {
    it('should get the loaded status', () => {
      expect(fromSelectors.getStagesLoaded(state)).toEqual(coreState.stages.loaded);
    });
  });

  describe('getStagesLoading', () => {
    it('should get the loading status', () => {
      expect(fromSelectors.getStagesLoading(state)).toEqual(coreState.stages.loading);
    });
  });

  describe('getStageById', () => {
    it('should get a stage by id', () => {
      expect(fromSelectors.getStageById(1)(state)).toEqual(coreState.stages.entities[1]);
    });

    it('should return undefined if the id is not found', () => {
      expect(fromSelectors.getStageById(99)(state)).toEqual(undefined);
    });
  });

  describe('getStageByName', () => {
    it('should get a stage by name', () => {
      expect(fromSelectors.getStageByName('Stage 4')(state)).toEqual(coreState.stages.entities[4]);
    });

    it('should return undefined if the name is not found', () => {
      expect(fromSelectors.getStageByName('Non existing stage')(state)).toEqual(undefined);
    });
  });
});
