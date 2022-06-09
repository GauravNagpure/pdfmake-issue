import { DynamicEnvironment } from './dynamic-env';

export class HMREnvironment extends DynamicEnvironment {
  constructor() {
    super();
    this.production = false;
    this.hmr = true;
  }
}


export const environment = new HMREnvironment()