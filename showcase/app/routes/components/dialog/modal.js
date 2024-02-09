/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import Route from '@ember/routing/route';

import {
  COLORS,
  SIZES,
} from '@hashicorp/design-system-components/components/hds/dialog/modal';

export default class ComponentsDialogModalRoute extends Route {
  model() {
    return {
      COLORS,
      SIZES,
    };
  }
}
