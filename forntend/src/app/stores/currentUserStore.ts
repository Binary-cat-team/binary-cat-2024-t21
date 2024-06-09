import { observable, action, makeObservable } from 'mobx';

export class CurrentUserStore {
  userData = null;

  constructor() {
    makeObservable(this, {
      userData: observable,
      setUserData: action,
    });
  }

  setUserData(data: any) {
    this.userData = data;
  }
}

const currentUserStoreInstance = new CurrentUserStore();
export default currentUserStoreInstance;
