/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { assert } from '@ember/debug';
import { guidFor } from '@ember/object/internals';
import Component from '@glimmer/component';

export default class HdsRevealIndexComponent extends Component {
  /**
   * Generates a unique ID for the Content
   *
   * @param contentId
   */
  contentId = 'content-' + guidFor(this);

  /**
   * @param text
   * @type {string}
   * @description The text of the button.
   */
  get text() {
    let { text } = this.args;

    assert(
      '@text for "Hds::Reveal" must have a valid value',
      text !== undefined
    );

    return text;
  }
}
