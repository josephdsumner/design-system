import { _ as _defineProperty } from '../../../../_rollupPluginBabelHelpers-S8hAQ51S.js';
import Component from '@glimmer/component';
import { guidFor } from '@ember/object/internals';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("{{! @glint-nocheck: not typesafe yet }}\n{{!\n  Copyright (c) HashiCorp, Inc.\n  SPDX-License-Identifier: MPL-2.0\n}}\n<li class=\"hds-form-super-select__option-group\" role=\"group\" aria-labelledby={{this.groupId}}>\n  <div class=\"hds-form-super-select__option-group-header\" id={{this.groupId}}>\n    <Hds::Text::Body @tag=\"span\" @size=\"100\" @weight=\"semibold\">{{@group.groupName}}</Hds::Text::Body>\n  </div>\n\n  {{yield}}\n</li>");

class HdsSuperSelectOptionGroupComponent extends Component {
  constructor(...args) {
    super(...args);
    /**
     * Generates a unique ID for the Group
     * @return {string}
     */
    _defineProperty(this, "groupId", 'super-select-group-' + guidFor(this));
  }
}
setComponentTemplate(TEMPLATE, HdsSuperSelectOptionGroupComponent);

export { HdsSuperSelectOptionGroupComponent as default };
//# sourceMappingURL=option-group.js.map
