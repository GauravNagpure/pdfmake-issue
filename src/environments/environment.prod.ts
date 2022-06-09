import { DynamicEnvironment } from './dynamic-env';

export class ProdEnvironment extends DynamicEnvironment {
  constructor() {
    super();
    this.production = true;
    this.hmr = false;
  }
}


export const environment = new ProdEnvironment()