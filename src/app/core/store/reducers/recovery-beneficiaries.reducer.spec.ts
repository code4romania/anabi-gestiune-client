import { RecoveryBeneficiary } from '../../models';
import * as fromRecovery from '../actions/recovery-beneficiaries.action';
import { initialState, reducer, RecoveryBeneficiariesState } from './recovery-beneficiaries.reducer';

describe('RecoveryBeneficiaries Reducer', () => {
  it('should return current state when no valid action', () => {
    const expectedState = reducer(initialState, { type: 'INVALID_ACTION' } as fromRecovery.RecoveryBeneficiariesAction);
    expect(expectedState).toEqual(initialState);
  });

  it('should set loading to true on LOAD_RECOVERY_BENEFICIARIES', () => {
    const expectedState = {
      ...initialState,
      loading: true,
    } as RecoveryBeneficiariesState;

    const actualState = reducer(initialState, new fromRecovery.LoadRecoveryBeneficiaries());
    expect(actualState).toEqual(expectedState);
  });

  it('should set the entities correctly on LOAD_RECOVERY_BENEFICIARIES_SUCCESS', () => {
    const theRecoveryBeneficiaries = [
      new RecoveryBeneficiary({ id: 1, name: 'test 1' }),
      new RecoveryBeneficiary({ id: 2, name: 'test 2' }),
      new RecoveryBeneficiary({ id: 3, name: 'test 3' }),
    ];

    const expectedState = {
      ...initialState,
      entities: {
        1: theRecoveryBeneficiaries[0].toJson(),
        2: theRecoveryBeneficiaries[1].toJson(),
        3: theRecoveryBeneficiaries[2].toJson(),
      },
      loaded: true,
      loading: false,
    };

    const actualState = reducer(initialState, new fromRecovery.LoadRecoveryBeneficiariesSuccess(theRecoveryBeneficiaries));
    expect(actualState).toEqual(expectedState);
  });
});
