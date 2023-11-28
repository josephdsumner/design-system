/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

export const replaceDocWcagList = (markdownContent) =>
  // eg. <Doc::WcagList @criteriaList={{array "1.1.1" "1.2.1" ... }} />
  markdownContent.replace(
    /<Doc::WcagList @criteriaList={{array (.*)}} \/>/gim,
    (_match, p1) =>
      `<div doc-wcag-list @criteriaList="${p1.replaceAll('"', '')}" />`
  );
