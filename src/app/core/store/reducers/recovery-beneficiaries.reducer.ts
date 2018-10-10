import { RecoveryBeneficiary } from '../../models';
import * as fromRecoveryBeneficiaries from '../actions/recovery-beneficiaries.action';

export interface RecoveryBeneficiariesState {
  entities: { [id: number]: RecoveryBeneficiary };
  loaded: boolean;
  loading: boolean;
}

export const initialState: RecoveryBeneficiariesState = {
  entities: {},
  loaded: false,
  loading: false,
};

export function reducer(
  state = initialState,
  action: fromRecoveryBeneficiaries.RecoveryBeneficiariesAction
): RecoveryBeneficiariesState {

  switch (action.type) {
    case fromRecoveryBeneficiaries.LOAD_RECOVERY_BENEFICIARIES: {
      return {
        ...state,
        loading: true,
      } as RecoveryBeneficiariesState;
    }

    case fromRecoveryBeneficiaries.LOAD_RECOVERY_BENEFICIARIES_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
      } as RecoveryBeneficiariesState;
    }

    case fromRecoveryBeneficiaries.LOAD_RECOVERY_BENEFICIARIES_SUCCESS: {
      const theRecoveryBeneficiaries = action.payload;
      const entities = theRecoveryBeneficiaries.reduce((aEntities: { [id: number]: RecoveryBeneficiary }, aRB: RecoveryBeneficiary) => {
        return {
          ...aEntities,
          [aRB.id]: aRB,
        };
      }, { ...state.entities });

      return {
        ...state,
        loading: false,
        loaded: true,
        entities,
      };
    }

    default:
      return { ...state } as RecoveryBeneficiariesState;
  }
}

export const getRecoveryBeneficiariesEntities = (state: RecoveryBeneficiariesState) => state.entities;
export const getRecoveryBeneficiariesLoading = (state: RecoveryBeneficiariesState) => state.loading;
export const getRecoveryBeneficiariesLoaded = (state: RecoveryBeneficiariesState) => state.loaded;
