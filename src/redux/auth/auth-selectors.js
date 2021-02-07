const name = state => state.auth.user.name;
const isAuthenticated = state => state.auth.isAuthenticated;
const loading = state => state.auth.loading;
const error = state => state.auth.error;

export { name, isAuthenticated, loading, error };
