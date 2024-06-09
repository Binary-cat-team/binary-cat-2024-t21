import { action, makeObservable, observable } from 'mobx';

export class ContentLoadStore {
  isContentLoading = false;

  constructor() {
    makeObservable(this, {
      isContentLoading: observable,
      setIsContentLoading: action,
    });
  }

  setIsContentLoading(state: boolean) {
    this.isContentLoading = state;
  }
}

const contentLoadStoreInstance = new ContentLoadStore();
export default contentLoadStoreInstance;
