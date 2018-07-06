import store from './store';

export const apiClient = function() {
        const token = store.getState().token;
        const auth_token = 'Token ' + token

        return auth_token;
}