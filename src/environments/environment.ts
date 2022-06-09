import { DynamicEnvironment } from './dynamic-env';

export class Environment extends DynamicEnvironment {
  constructor() {
    super();
    this.production = this.hmr = false;
  }
}


export const environment = new Environment()