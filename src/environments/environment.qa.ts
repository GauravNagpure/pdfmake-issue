import { DynamicEnvironment } from './dynamic-env';

export class QAEnvironment extends DynamicEnvironment {
  constructor() {
    super();
    this.production = this.hmr = false;
  }
}


export const environment = new QAEnvironment()