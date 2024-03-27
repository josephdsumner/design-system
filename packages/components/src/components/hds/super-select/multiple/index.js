/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';

export default class HdsSuperSelectMultipleIndexComponent extends Component {
  // UNCOMMENT THIS IF YOU NEED A CONSTRUCTOR
  // constructor() {
  //   super(...arguments);
  //   // ADD YOUR ASSERTIONS HERE
  // }

  /**
   * Get the class names to apply to the component.
   * @method classNames
   * @return {string} The "class" attribute to apply to the component.
   */
  get classNames() {
    let classes = [
      'hds-super-select',
      'hds-super-select-multiple',
      'hds-typography-body-200',
    ];

    // add a class based on the @xxx argument
    // classes.push(`hds-super-select-multiple--[variant]-${this.xxx}`);

    return classes.join(' ');
  }
}
