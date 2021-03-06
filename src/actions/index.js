import {
  LOAD_USERS,
  LOAD_EVENTS,
} from './types'

import axios from 'axios';

export function loadUsers() {
  let index = 0;
  return {
    type: LOAD_USERS,
    payload: [
      { key: index++, section: true, label: 'USERS' },
      { key: index++, label: '_TBD1 1' },
      { key: index++, label: '_TBD2 2' },
      { key: index++, label: '_TBD3 3' },
      { key: index++, label: 'IPad User 1' }
    ]
  }
}

export function loadEvents() {
  let index = 0;
  return {
    type: LOAD_EVENTS,
    payload:[
      { key: index++, section: true, label: 'EVENTS' },
      { key: index++, label: 'South Florida' },
      { key: index++, label: 'Texas State Fair' },
      { key: index++, label: 'Testing Show' }
    ]
  }
}
