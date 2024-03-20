import Component from '@glimmer/component';
import { assert } from '@ember/debug';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("{{!\n  Copyright (c) HashiCorp, Inc.\n  SPDX-License-Identifier: MPL-2.0\n}}\n\n{{! NOTE: naming is temporary to not conflict with existing power-select wrapper }}\n<div class={{this.classNames}}>\n  {{! temp notes...\n    Required:\n    * onChange\n    * options or search\n  }}\n\n  {{#if (eq this.selectionType \"single\")}}\n    <PowerSelect\n      @afterOptionsComponent={{@afterOptionsComponent}}\n      @ariaDescribedBy={{@ariaDescribedBy}}\n      @ariaInvalid={{@ariaInvalid}}\n      @ariaLabel={{@ariaLabel}}\n      @ariaLabelledBy={{@ariaLabelledBy}}\n      @beforeOptionsComponent={{@beforeOptionsComponent}}\n      @disabled={{@disabled}}\n      @groupComponent={{@groupComponent}}\n      @initiallyOpened={{@initiallyOpened}}\n      @labelText={{@labelText}}\n      @matchTriggerWidth={{@matchTriggerWidth}}\n      @noMatchesMessage={{@noMatchesMessage}}\n      @onChange={{@onChange}}\n      @onInput={{@onInput}}\n      @options={{@options}}\n      @placeholder={{@placeholder}}\n      @renderInPlace={{true}}\n      @resultCountMessage={{@resultCountMessage}}\n      @search={{@search}}\n      @searchEnabled={{@searchEnabled}}\n      @searchPlaceholder={{@searchPlaceholder}}\n      @selected={{@selected}}\n      @verticalPosition={{@verticalPosition}}\n      ...attributes\n      as |option|\n    >\n      {{yield option}}\n    </PowerSelect>\n  {{else}}\n    <PowerSelectMultiple\n      @afterOptionsComponent={{@afterOptionsComponent}}\n      @ariaDescribedBy={{@ariaDescribedBy}}\n      @ariaInvalid={{@ariaInvalid}}\n      @ariaLabel={{@ariaLabel}}\n      @ariaLabelledBy={{@ariaLabelledBy}}\n      @beforeOptionsComponent={{@beforeOptionsComponent}}\n      @disabled={{@disabled}}\n      @groupComponent={{@groupComponent}}\n      @initiallyOpened={{@initiallyOpened}}\n      @labelText={{@labelText}}\n      @matchTriggerWidth={{@matchTriggerWidth}}\n      @noMatchesMessage={{@noMatchesMessage}}\n      @onChange={{@onChange}}\n      @onInput={{@onInput}}\n      @options={{@options}}\n      @placeholder={{@placeholder}}\n      @renderInPlace={{true}}\n      @resultCountMessage={{@resultCountMessage}}\n      @search={{@search}}\n      @searchEnabled={{@searchEnabled}}\n      @searchPlaceholder={{@searchPlaceholder}}\n      @selected={{@selected}}\n      @verticalPosition={{@verticalPosition}}\n      ...attributes\n      as |option|\n    >\n      {{option}}\n    </PowerSelectMultiple>\n  {{/if}}\n</div>");

/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

const SELECTION_TYPES = ['single', 'multiple'];
class HdsSuperSelectIndexComponent extends Component {
  // UNCOMMENT THIS IF YOU NEED A CONSTRUCTOR
  // constructor() {
  //   super(...arguments);
  //   // ADD YOUR ASSERTIONS HERE
  // }

  /**
   * Get selection type
   * @method selectionType
   * @return {string} The selection type.
   */
  get selectionType() {
    let {
      selectionType = 'single'
    } = this.args;
    assert(`@selectionType for "Hds::SuperSelect" must be one of the following: ${SELECTION_TYPES.join(', ')}; received: ${selectionType}`, SELECTION_TYPES.includes(selectionType));
    return selectionType;
  }

  /**
   * Get the class names to apply to the component.
   * @method classNames
   * @return {string} The "class" attribute to apply to the component.
   */
  get classNames() {
    let classes = ['hds-super-select'];

    // add a class based on the @matchTriggerWidth argument
    if (this.args.matchTriggerWidth === false) {
      classes.push('hds-super-select--match-trigger-width-false');
    }
    return classes.join(' ');
  }
}
setComponentTemplate(TEMPLATE, HdsSuperSelectIndexComponent);

export { SELECTION_TYPES, HdsSuperSelectIndexComponent as default };
//# sourceMappingURL=index.js.map
