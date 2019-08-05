import auth from './auth'
import ranges from './ranges'

const isSSL = window.location.protocol === 'https:';
export const API_URL = 'https://telemetria-backend.herokuapp.com'
export const WS_URL = (isSSL ? 'wss': 'ws') + '://telemetria-backend.herokuapp.com'

export default {
  auth,
  ranges
}
