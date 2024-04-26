import templateOnly from '@ember/component/template-only';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("{{! @glint-nocheck: not typesafe yet }}\n{{!\n  Copyright (c) HashiCorp, Inc.\n  SPDX-License-Identifier: MPL-2.0\n}}\n{{#if @showNoSelectedMessage}}\n  <div class=\"hds-form-super-select__no-options-selected\">\n    No options selected\n  </div>\n{{/if}}\n<div class=\"hds-form-super-select__after-options\">\n  {{#if @content}}\n    {{@content}}\n  {{else}}\n    {{#if (or @showAll @showSelected @clearSelected)}}\n      {{#if @showOnlySelected}}\n        <Hds::Button @text=\"Show All\" @size=\"small\" @color=\"secondary\" {{on \"click\" @showAll}} />\n      {{else}}\n        <Hds::Button @text=\"Show Selected\" @size=\"small\" @color=\"secondary\" {{on \"click\" @showSelected}} />\n      {{/if}}\n      {{#if (not-eq @selectedCount \"0\")}}\n        <Hds::Button @text=\"Clear Selected\" @size=\"small\" @color=\"secondary\" {{on \"click\" @clearSelected}} />\n      {{/if}}\n    {{/if}}\n    <span class=\"hds-form-super-select__result-count\">{{@resultCountMessage}}</span>\n  {{/if}}\n</div>");

var afterOptions = setComponentTemplate(TEMPLATE, templateOnly());

export { afterOptions as default };
//# sourceMappingURL=after-options.js.map
