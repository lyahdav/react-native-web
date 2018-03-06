/**
 * Copyright (c) 2015-present, Nicolas Gallagher.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

import createPrefixer from 'inline-style-prefixer/static/createPrefixer';
import createPrefixerDynamic from 'inline-style-prefixer/dynamic/createPrefixer';
import staticData from './static';
import dynamicData from './dynamic';

const prefixAll = createPrefixer(staticData);

const Prefixer = createPrefixerDynamic(dynamicData, prefixAll);

function isLegacyAndroidWebView() {
  if (!window.navigator) {
    return false;
  }
  const userAgent = window.navigator.userAgent.toLowerCase();
  return userAgent.indexOf('/android/') > -1;
}

function prefixAllWrapper(style) {
  if (!isLegacyAndroidWebView()) {
      const prefixer = new Prefixer();
      return prefixer.prefix(style);
  } else {
      return prefixAll(style);
  }
}

export default prefixAllWrapper;

export const prefixInlineStyles = (style: Object) => {
  const prefixedStyles = prefixAllWrapper(style);

  // React@15 removed undocumented support for fallback values in
  // inline-styles. Revert array values to the standard CSS value
  Object.keys(prefixedStyles).forEach(prop => {
    const value = prefixedStyles[prop];
    if (Array.isArray(value)) {
      prefixedStyles[prop] = value[value.length - 1];
    }
  });

  return prefixedStyles;
};
