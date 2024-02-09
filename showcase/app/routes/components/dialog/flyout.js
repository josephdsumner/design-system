/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import Route from '@ember/routing/route';

import { SIZES } from '@hashicorp/design-system-components/components/hds/dialog/flyout';

export default class ComponentsDialogFlyoutRoute extends Route {
  model() {
    return {
      SIZES,
    };
  }
}
