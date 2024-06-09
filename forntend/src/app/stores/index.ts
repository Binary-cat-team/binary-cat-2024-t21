import authStore, { AuthStore } from './authStore.ts';
import currentUserStore, { CurrentUserStore } from './currentUserStore.ts';
import contentLoadStore, { ContentLoadStore } from './contentLoadStore.ts';

export type RootStore = {
  authStore: AuthStore;
  currentUserStore: CurrentUserStore;
  contentLoadStore: ContentLoadStore;
};

const rootStore: RootStore = {
  authStore,
  currentUserStore,
  contentLoadStore,
};

export default rootStore;
