declare var window: any;
export class DynamicEnvironment {
  production: boolean
  hmr: boolean

  public get environment() {
    return window.config
  }
}
