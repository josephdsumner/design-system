/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';
import { getElementId } from '../../../utils/hds-get-element-id';

export default class HdsBreadcrumbTruncationComponent extends Component {
  /**
   * Calculate the unique ID to use for the toggle/button
   */
  get toggleId() {
    return getElementId(this);
  }

  get popoverOptions() {
    return {
      popoverPlacement: 'bottom-start',
      popoverPositionStrategy: 'absolute',
      popoverOffsetOptions: [0, 0],
      popoverEnableCollisionDetection: true,
    };
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
