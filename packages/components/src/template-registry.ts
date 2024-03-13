/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import type HdsButtonIndexComponent from './components/hds/button';
import type HdsDismissButtonIndexComponent from './components/hds/dismiss-button';
import type HdsInteractiveIndexComponent from './components/hds/interactive';
import type HdsBadgeIndexComponent from "./components/hds/badge";

export default interface HdsComponentsRegistry {
  HdsButtonComponent: typeof HdsButtonIndexComponent;
  HdsDismissComponent: typeof HdsDismissButtonIndexComponent;
  HdsInteractiveComponent: typeof HdsInteractiveIndexComponent;
  HdsBadgeComponent: typeof HdsBadgeIndexComponent;
}
