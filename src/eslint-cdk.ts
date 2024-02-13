/*
   Copyright 2021 MOIA GmbH
   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at
       http://www.apache.org/licenses/LICENSE-2.0
   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

export = {
  rules: {
    // CDK uses side effects to init constructs
    'no-new': 'off',
    // Logging should be OK in CDK apps
    'no-console': 'off',
    // CDK deps are usually all devDependencies
    'import/no-extraneous-dependencies': 'off',
  },
}
