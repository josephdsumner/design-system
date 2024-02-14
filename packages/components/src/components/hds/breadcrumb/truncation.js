/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';
import { getElementId } from '../../../utils/hds-get-element-id';

export default class HdsBreadcrumbTruncationComponent extends Component {
  /**
   * Calculate the unique ID to use for the toggle/button (and a CSS selector for it)
   */
  get toggleId() {
    return `toggle-${getElementId(this)}`;
  }

  get toggleSelector() {
    return `#${this.toggleId}`;
  }

  /**
   * @param ariaLabel
   * @type {string}
   * @default 'show more'
   */
  get ariaLabel() {
    return this.args.ariaLabel ?? 'show more';
  }
}
