import * as moment from 'moment';

import { AssetResponse } from './asset-response.interface';
import { Asset } from './asset.model';
import { Solution } from './solution.model';

const firstAsset = new Asset();
firstAsset.fromAssetResponseJson({
  assetId: 1,
  assetName: 'First asset',
  assetIdentifier: 'A1',
  estimatedAmount: 100,
  estimatedAmountCurrency: 'EUR',
  assetCategory: 'Category',
  assetSubcategory: 'Subcategory',
  currentStage: 'Stage',
} as AssetResponse);

const secondAsset = new Asset();
secondAsset.fromAssetResponseJson({
  assetId: 2,
  assetName: 'Second asset',
  assetIdentifier: 'A2',
  estimatedAmount: 110,
  estimatedAmountCurrency: 'EUR',
  assetCategory: 'Category',
  assetSubcategory: 'Subcategory',
  currentStage: 'Stage',
} as AssetResponse);

export const assets: Asset[] = [
  firstAsset,
  secondAsset,
];

const firstSolution = new Solution({
    id: 1,
    stageId: 1,
    decisionId: 1,
    institutionId: 1,
    decisionDate: moment('2018-01-01').format(),
    decisionNumber: '1',
    confiscationDetails: {
      recoveryBeneficiaryId: 1,
    },
    sequesterDetails: {
      precautionaryMeasureId: 1,
    },
    recoveryDetails: {
      actualAmount: 1000,
      actualAmountCurrency: 'eur',
      estimatedAmount: 1100,
      estimatedAmountCurrency: 'eur',
      recoveryState: 'recovered',
      evaluationCommittee: {
        evaluationCommitteeDesignationDate: moment('2018-01-01').format(),
        evaluationCommitteePresident: 'President',
        evaluationCommitteeMembers: 'Members',
      },
      recoveryCommittee: {
        recoveryCommitteeDesignationDate: moment('2018-01-01').format(),
        recoveryCommitteePresident: 'President',
        recoveryCommitteeMembers: 'Members',
      },
      lastActivity: moment('2018-01-02').format(),
      personResponsible: 'Person responsible',
    },
    solutionDetails: {
      source: 'source',
      sentOnEmail: true,
      fileNumber: '1',
      fileNumberParquet: '1',
      receivingDate: moment('2018-01-02').format(),
      isDefinitive: true,
      definitiveDate: moment('2018-01-03').format(),
      sentToAuthoritiesDate: moment('2018-01-04').format(),
      crimeTypeId: 1,
      legalBasis: 'legal basis',
    },
    journal: {
      addedDate: moment('2018-01-01').format(),
      userCodeAdd: 'admin',
      userCodeLastChange: moment('2018-01-04').format(),
      lastChangeDate: moment('2018-01-04').format(),
    },
  });
firstSolution.setAsset(firstAsset);

const secondSolution = new Solution({
    id: 2,
    stageId: 2,
    decisionId: 2,
    institutionId: 2,
    decisionDate: moment('2018-02-01').format(),
    decisionNumber: '2',
    confiscationDetails: {
      recoveryBeneficiaryId: 2,
    },
    sequesterDetails: {
      precautionaryMeasureId: 2,
    },
    recoveryDetails: {
      actualAmount: 2000,
      actualAmountCurrency: 'eur',
      estimatedAmount: 2100,
      estimatedAmountCurrency: 'eur',
      recoveryState: 'recovered',
      evaluationCommittee: {
        evaluationCommitteeDesignationDate: moment('2018-02-01').format(),
        evaluationCommitteePresident: 'President',
        evaluationCommitteeMembers: 'Members',
      },
      recoveryCommittee: {
        recoveryCommitteeDesignationDate: moment('2018-02-01').format(),
        recoveryCommitteePresident: 'President',
        recoveryCommitteeMembers: 'Members',
      },
      lastActivity: moment('2018-02-02').format(),
      personResponsible: 'Person responsible',
    },
    solutionDetails: {
      source: 'source',
      sentOnEmail: true,
      fileNumber: '2',
      fileNumberParquet: '2',
      receivingDate: moment('2018-02-02').format(),
      isDefinitive: true,
      definitiveDate: moment('2018-02-03').format(),
      sentToAuthoritiesDate: moment('2018-02-04').format(),
      crimeTypeId: 2,
      legalBasis: 'legal basis',
    },
    journal: {
      addedDate: moment('2018-02-01').format(),
      userCodeAdd: 'admin',
      userCodeLastChange: moment('2018-02-04').format(),
      lastChangeDate: moment('2018-02-04').format(),
    },
  });
secondSolution.setAsset(secondAsset);

const thirdSolution = new Solution({
    id: 3,
    stageId: 3,
    decisionId: 3,
    institutionId: 3,
    decisionDate: moment('2018-03-01').format(),
    decisionNumber: '3',
    confiscationDetails: {
      recoveryBeneficiaryId: 3,
    },
    sequesterDetails: {
      precautionaryMeasureId: 3,
    },
    recoveryDetails: {
      actualAmount: 3000,
      actualAmountCurrency: 'eur',
      estimatedAmount: 3100,
      estimatedAmountCurrency: 'eur',
      recoveryState: 'recovered',
      evaluationCommittee: {
        evaluationCommitteeDesignationDate: moment('2018-03-01').format(),
        evaluationCommitteePresident: 'President',
        evaluationCommitteeMembers: 'Members',
      },
      recoveryCommittee: {
        recoveryCommitteeDesignationDate: moment('2018-03-01').format(),
        recoveryCommitteePresident: 'President',
        recoveryCommitteeMembers: 'Members',
      },
      lastActivity: moment('2018-03-02').format(),
      personResponsible: 'Person responsible',
    },
    solutionDetails: {
      source: 'source',
      sentOnEmail: true,
      fileNumber: '3',
      fileNumberParquet: '3',
      receivingDate: moment('2018-03-02').format(),
      isDefinitive: true,
      definitiveDate: moment('2018-03-03').format(),
      sentToAuthoritiesDate: moment('2018-03-04').format(),
      crimeTypeId: 3,
      legalBasis: 'legal basis',
    },
    journal: {
      addedDate: moment('2018-03-01').format(),
      userCodeAdd: 'admin',
      userCodeLastChange: moment('2018-03-04').format(),
      lastChangeDate: moment('2018-03-04').format(),
    },
  });
thirdSolution.setAsset(secondAsset);

export const solutions: Solution[] = [
  firstSolution,
  secondSolution,
  thirdSolution,
];
