export class AssetStage {
  id: number;
  name: string;
  isFinal: boolean;

  constructor(assetStage: AssetStage = {} as AssetStage) {
    this.id = assetStage.id;
    this.name = assetStage.name;
    this.isFinal = assetStage.isFinal;
  }
}
