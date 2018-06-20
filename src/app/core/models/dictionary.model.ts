interface DictionaryConfig {
  dataService: any;
}

export class Dictionary {
  id: number;
  name: string;
  description: string;
  config: DictionaryConfig;
  data: object;

  constructor(id: number, name: string, config: DictionaryConfig, description?: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.config = config;
    this.data = [];
  }
}
