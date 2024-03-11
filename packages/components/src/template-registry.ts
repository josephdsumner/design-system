/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import type HdsButtonIndexComponent from './components/hds/button';
import type HdsDismissButtonIndexComponent from './components/hds/dismiss-button';
import type HdsInteractiveIndexComponent from './components/hds/interactive';
import type HdsTextIndexComponent from './components/hds/text';
import type HdsTextBodyComponent from './components/hds/text/body';
import type HdsTextDisplayComponent from './components/hds/text/display';
import type HdsTextCodeComponent from './components/hds/text/code';

export default interface HdsComponentsRegistry {
  HdsButtonComponent: typeof HdsButtonIndexComponent;
  HdsDismissComponent: typeof HdsDismissButtonIndexComponent;
  HdsInteractiveComponent: typeof HdsInteractiveIndexComponent;
  HdsText: typeof HdsTextIndexComponent;
  HdsTextBody: typeof HdsTextBodyComponent;
  HdsTextDisplay: typeof HdsTextDisplayComponent;
  HdsTextCode: typeof HdsTextCodeComponent;
}
