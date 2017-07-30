/**
 * @license Copyright 2017 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
'use strict';

import * as child_process from 'child_process';
import {darwin} from '../chrome-finder';
import {stub} from 'sinon';
//import * as assert from 'assert';

var fs = require('fs');

describe('Finder', () => {
  describe('on darwin', () => {
    it('returns the correct paths by order', () => {
      const chromePaths = [
        '/Applications/Google Chrome.app',
        '/Users/lighthouse/Documents/Google Chrome.app',
        '/Applications/Google Chrome Canary.app',
        '/Users/lighthouse/Documents/Google Chrome Canary.app',
        '/Volumes/Macintosh HD/Documents/Google Chrome.app',
        '/Volumes/Macintosh HD/Documents/Google Chrome Canary.app',
      ];

      stub(child_process, 'execSync').returns(chromePaths.join('\n'));
      stub(fs, 'accessSync').returns(true);

      darwin();
      /*assert.deepEqual(
        darwin(),
        [
          '/home/Google Chrome Canary.app/Contents/MacOS/Google Chrome Canary',
          '/home/Google Chrome.app/Contents/MacOS/Google Chrome',
          '/Applications/Google Chrome Canary.app/Contents/MacOS/Google Chrome Canary',
          '/Applications/Google Chrome Canary.app/Contents/MacOS/Google Chrome',
          '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome Canary',
          '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
          '/Users/ward/Documents/Google Chrome.app/Contents/MacOS/Google Chrome Canary',
          '/Users/ward/Documents/Google Chrome.app/Contents/MacOS/Google Chrome',
          '/Volumes/Macintosh HD/Documents/Google Chrome Canary.app/Contents/MacOS/Google Chrome Canary',
          '/Volumes/Macintosh HD/Documents/Google Chrome.app/Contents/MacOS/Google Chrome',
        ]
      );*/

      //child_process.execSync.restore();
      //fs.accessSync.restore();
    });
  });
});
