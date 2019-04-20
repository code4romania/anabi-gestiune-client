import { Category } from '../../models';
import { CategoryState } from '../reducers/categories.reducer';
import { CoreState, State } from '../reducers/index';
import * as fromSelectors from './categories.selectors';

import { categories as mockCategories } from '../../models/mock-data';

describe('Categories Selectors', () => {
  let state: State;
  let coreState: CoreState;

  const theCategories = [ ...mockCategories ];

  const getEntitiesAsArray = (aState: State) => {
    return Object.keys(aState.core.categories.entities).map(id => new Category(aState.core.categories.entities[id]));
  };

  const getEntitiesAsObjects = (aState: State) => {
    const theEntities: { [id: number]: Category } = {};
    Object.keys(aState.core.categories.entities).map(id => {
      theEntities[id] = new Category(aState.core.categories.entities[id]);
    });

    return theEntities;
  };

  beforeEach(() => {
    state = {
      core: {
        categories: {
          entities: {
            1: theCategories[0].toJson(),
            2: theCategories[1].toJson(),
            3: theCategories[2].toJson(),
            4: theCategories[3].toJson(),
          },
          loaded: true,
          loading: false,
        } as CategoryState,
      } as CoreState,
    } as State;

    coreState = state.core;
  });

  describe('getCategoryState', () => {
    it('should get the Category state', () => {
      expect(fromSelectors.getCategoryState(state)).toEqual(coreState.categories);
    });
  });

  describe('getCategoriesEntities', () => {
    it('should get the entities', () => {
      expect(fromSelectors.getCategoriesEntities(state)).toEqual(getEntitiesAsObjects(state));
    });
  });

  describe('getAllCategories', () => {
    it('should get the categories', () => {
      const expectedResult = getEntitiesAsArray(state);
      expect(fromSelectors.getAllCategories(state)).toEqual(expectedResult);
    });
  });

  describe('getCategoriesLoaded', () => {
    it('should get the loaded status', () => {
      expect(fromSelectors.getCategoriesLoaded(state)).toEqual(coreState.categories.loaded);
    });
  });

  describe('getCategoriesLoading', () => {
    it('should get the loading status', () => {
      expect(fromSelectors.getCategoriesLoading(state)).toEqual(coreState.categories.loading);
    });
  });

  describe('getCategoryById', () => {
    it('should get a category by id', () => {
      expect(fromSelectors.getCategoryById(1)(state)).toEqual(getEntitiesAsObjects(state)[1]);
    });

    it('should return undefined if the id is not found', () => {
      expect(fromSelectors.getCategoryById(99)(state)).toEqual(undefined);
    });
  });

  describe('getParentCategories', () => {
    it('should get the parent categories', () => {
      const expectedResult = getEntitiesAsArray(state).filter((aCategory: Category) => aCategory.parentId === null);
      expect(fromSelectors.getParentCategories(state)).toEqual(expectedResult);
    });
  });

  describe('getSubcategories', () => {
    it('should get the children of a category', () => {
      const theParentId = 1;
      const expectedResult = getEntitiesAsArray(state).filter((aCategory: Category) => aCategory.parentId === theParentId);
      expect(fromSelectors.getSubcategories(theParentId)(state)).toEqual(expectedResult);
    });

    it('should return an empty array if no children', () => {
      const theParentId = 2;
      expect(fromSelectors.getSubcategories(theParentId)(state)).toEqual([]);
    });
  });

  describe('getCategoryByName', () => {
    it('should find a category by name', () => {
      expect(fromSelectors.getCategoryByName('Third category')(state)).toEqual(getEntitiesAsObjects(state)[3]);
    });

    it('should return undefined if the category is not found', () => {
      expect(fromSelectors.getCategoryByName('Non existing category')(state)).toEqual(undefined);
    });
  });

  describe('getAssetParentCategories', () => {
    it('should get the parent categories only for asset entities', () => {
      const expectedResult = getEntitiesAsArray(state)
        .filter((aCategory: Category) => aCategory.parentId === null && aCategory.isAssetEntity());
      expect(fromSelectors.getAssetParentCategories(state)).toEqual(expectedResult);
    });
  });

  describe('getAssetSubcategories', () => {
    it('should get the children of a category only for asset entities', () => {
      const theParentId = 1;
      const expectedResult = getEntitiesAsArray(state)
        .filter((aCategory: Category) => aCategory.parentId === theParentId && aCategory.isAssetEntity());
      expect(fromSelectors.getAssetSubcategories(theParentId)(state)).toEqual(expectedResult);
    });
  });
});
