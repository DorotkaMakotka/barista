/**
 * @license
 * Copyright 2019 Dynatrace LLC
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Component } from '@angular/core';

@Component({
  selector: 'component-barista-example',
  template: `
    <div class="demo-card">
      <dt-cta-card>
        <dt-cta-card-title i18n>
          You're missing out on log analytics!
        </dt-cta-card-title>
        <dt-cta-card-footer-actions>
          <a dt-button color="cta" i18n>Enable log analysis</a>
        </dt-cta-card-footer-actions>
        <dt-cta-card-title-actions>
          <a
            dt-button
            variant="secondary"
            color="cta"
            style="padding: 0 3px 0 7px;"
          >
            <dt-icon name="abort"></dt-icon>
          </a>
        </dt-cta-card-title-actions>
        <dt-cta-card-image>
          <img src="/assets/cta-noagent.svg" />
        </dt-cta-card-image>
        <span i18n>
          Enable Dynatrace log analytics to automatically correlate host-process
          log data with problems detected in your environment. Search log files
          and create pattern-detection rules that trigger custom events.
        </span>
      </dt-cta-card>
    </div>
  `,
})
export class CtaCardClosableExample {}