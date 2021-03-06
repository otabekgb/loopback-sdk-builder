/* tslint:disable */
export class StorageDriver {
  static set(key: string, value: string) {
    localStorage[key] = value;
  }
  static get(key: string): string {
    return localStorage[key];
  }
  static remove(key: string): any {
    localStorage[key] = null;
  }
}
