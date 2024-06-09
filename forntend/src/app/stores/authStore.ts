import { observable, action, makeObservable } from 'mobx';

export class AuthStore {
  isAuth: boolean | null = null;
  error = null;
  isLoading = false;

  constructor() {
    makeObservable(this, {
      isAuth: observable,
      error: observable,
      isLoading: observable,
      authFetch: action,
      authSuccess: action,
      authFailure: action,
      initAuth: action,
    });
  }

  authFetch() {
    this.isAuth = false;
    this.error = null;
    this.isLoading = true;
  }

  authSuccess() {
    this.isAuth = true;
    this.isLoading = false;
  }

  authFailure(error: any) {
    this.isAuth = false;
    this.error = error;
    this.isLoading = false;
  }

  initAuth() {
    const token = localStorage.getItem('token');
    this.isAuth = !!token;
  }
}

const authStoreInstance = new AuthStore();
export default authStoreInstance;
