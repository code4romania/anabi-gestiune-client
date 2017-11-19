import {AssetDetails} from 'shared/models/assetDetails.model';
import {DecisionDetails} from 'shared/models/decisionDetails.model';

export class Asset {
  asset: AssetDetails;
  decisions: DecisionDetails[];

  constructor() {
  }
}
