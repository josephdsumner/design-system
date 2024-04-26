import { _ as _defineProperty } from '../../../../_rollupPluginBabelHelpers-S8hAQ51S.js';
import Component from '@glimmer/component';
import { assert } from '@ember/debug';
import { guidFor } from '@ember/object/internals';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("{{! @glint-nocheck: not typesafe yet }}\n{{!\n  Copyright (c) HashiCorp, Inc.\n  SPDX-License-Identifier: MPL-2.0\n}}\n<button\n  class={{this.classNames}}\n  id={{this.toggleButtonId}}\n  ...attributes\n  type=\"button\"\n  aria-expanded={{if @isOpen \"true\" \"false\"}}\n  {{on \"click\" this.onClick}}\n>\n  {{#if @icon}}\n    <div class=\"hds-dropdown-toggle-button__icon\">\n      <FlightIcon @name={{@icon}} @stretched={{true}} />\n    </div>\n  {{/if}}\n  <div class=\"hds-dropdown-toggle-button__text\">\n    {{this.text}}\n  </div>\n  {{#if @count}}\n    <Hds::BadgeCount\n      @text={{@count}}\n      @size=\"small\"\n      @type={{this.badgeType}}\n      class=\"hds-dropdown-toggle-button__count\"\n    />\n  {{/if}}\n  {{#if @badge}}\n    <Hds::Badge\n      @text={{@badge}}\n      @icon={{@badgeIcon}}\n      @size=\"small\"\n      @type={{this.badgeType}}\n      class=\"hds-dropdown-toggle-button__badge\"\n    />\n  {{/if}}\n  <Hds::Dropdown::Toggle::Chevron />\n</button>");

const DEFAULT_SIZE = 'medium';
const DEFAULT_COLOR = 'primary';
const SIZES = ['small', 'medium'];
const COLORS = ['primary', 'secondary'];
const NOOP = () => {};
class HdsDropdownToggleButtonComponent extends Component {
  constructor(...args) {
    super(...args);
    /**
     * Generates a unique ID for the button
     *
     * @param toggleButtonId
     */
    _defineProperty(this, "toggleButtonId", 'toggle-button-' + guidFor(this));
  }
  /**
   * @param text
   * @type {string}
   * @description The text of the button. If no text value is defined an error will be thrown.
   */
  get text() {
    let {
      text
    } = this.args;
    assert('@text for "Hds::Dropdown::Toggle::Button" must have a valid value', text !== undefined);
    return text;
  }

  /**
   * @param size
   * @type {string}
   * @default medium
   * @description The size of the button; acceptable values are `small` and `medium`
   */
  get size() {
    let {
      size = DEFAULT_SIZE
    } = this.args;
    assert(`@size for "Hds::Dropdown::Toggle::Button" must be one of the following: ${SIZES.join(', ')}; received: ${size}`, SIZES.includes(size));
    return size;
  }

  /**
   * @param color
   * @type {string}
   * @default primary
   * @description Determines the color of button to be used; acceptable values are `primary` and  `secondary`
   */
  get color() {
    let {
      color = DEFAULT_COLOR
    } = this.args;
    assert(`@color for "Hds::Dropdown::Toggle::Button" must be one of the following: ${COLORS.join(', ')}; received: ${color}`, COLORS.includes(color));
    return color;
  }

  /**
   * @param isFullWidth
   * @type {boolean}
   * @default false
   * @description Indicates that a button should take up the full width of the parent container. The default is false.
   */
  get isFullWidth() {
    return this.args.isFullWidth ?? false;
  }

  /**
   * @param onClick
   * @type {function}
   * @default () => {}
   */
  get onClick() {
    let {
      onClick
    } = this.args;

    // notice: this is a guard used in case the toggle is used as standalone element (eg. in the showcase)
    // in reality it's always used inside the Dropdown main component as yielded component, so the onClick handler is always defined
    if (typeof onClick === 'function') {
      return onClick;
    } else {
      return NOOP;
    }
  }

  /**
   * @param badgeType
   * @type {string}
   * @default 'filled'
   * @description ensures that the correct Badge/BadgeCount type is used to meet contrast requirements
   */
  get badgeType() {
    return this.color !== 'primary' ? 'inverted' : 'filled';
  }

  /**
   * Get the class names to apply to the component.
   * @method ToggleButton#classNames
   * @return {string} The "class" attribute to apply to the component.
   */
  get classNames() {
    let classes = ['hds-dropdown-toggle-button'];

    // add a class based on the @size argument
    classes.push(`hds-dropdown-toggle-button--size-${this.size}`);

    // add a class based on the @color argument
    classes.push(`hds-dropdown-toggle-button--color-${this.color}`);

    // add a class based on the @isFullWidth argument
    if (this.isFullWidth) {
      classes.push('hds-dropdown-toggle-button--width-full');
    }

    // add a class based on the @isOpen argument
    if (this.args.isOpen) {
      classes.push('hds-dropdown-toggle-button--is-open');
    }
    return classes.join(' ');
  }
}
setComponentTemplate(TEMPLATE, HdsDropdownToggleButtonComponent);

export { COLORS, DEFAULT_COLOR, DEFAULT_SIZE, SIZES, HdsDropdownToggleButtonComponent as default };
//# sourceMappingURL=button.js.map
