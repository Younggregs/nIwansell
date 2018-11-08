import _ from 'lodash';
import store from './store';
import { setToken } from './actions'
import { LOGIN } from './Api';


export async function login(username, password) {


  var formData = new FormData()
  formData.append('username', username)
  formData.append('password', password)


  try {
    const res = await fetch(LOGIN, {

     body :formData,
     method: 'POST',
     credentials: 'same-origin',
     mode: 'cors',

    });
    const auth_code = await res.json();
    store.dispatch(setToken(auth_code.token));
    localStorage.setItem('auth_code', auth_code.token)
  } catch (e) {
    console.log(e);
  }

}

export function loggedIn() {
  return store.getState().token == null;
}




export function setCampusId(campus_id) {
  localStorage.setItem('campus_id', campus_id)
}

export function setMarket(market) {
  localStorage.setItem('market', market)
}

export function setAccountId(account_id) {
  localStorage.setItem('account_id', account_id)
}
