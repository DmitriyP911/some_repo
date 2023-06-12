export const getConctacs = state => state.contacts.contacts;
export const getContacts = state => state.contacts.contacts;
export const getError = state => state.contacts.error;
export const getLoading = state => state.contacts.isLoading;
export const getFilter = state => state.filter;
export const getName = state => state.auth.user;
export const getStatus = state => state.auth.isLoggedIn;
export const getRefresh = state => state.auth.isRefreshing;
