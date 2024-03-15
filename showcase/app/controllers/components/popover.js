/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class PopoverController extends Controller {
  @action
  onClickButton() {
    window.alert('The button has been clicked!');
  }
}
