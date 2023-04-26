/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import { NativeModules, Platform } from 'react-native'

const { RNMediaMeta } = NativeModules

export default {
  get(path, options) {
    return RNMediaMeta.get(path, {
      getThumb: true,
      ...options,
    })
  },
}
AppRegistry.registerComponent(appName, () => App);
