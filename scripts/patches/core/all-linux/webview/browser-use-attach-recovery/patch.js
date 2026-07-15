"use strict";

const {
  webviewAssetPatch,
} = require("../../../../descriptor.js");
const {
  applyLinuxBrowserUseHiddenHostOwnershipPatch,
  applyLinuxBrowserUseWebviewAttachRecoveryPatch,
} = require("../../../../impl/webview/index.js");

module.exports = [
  webviewAssetPatch({
    id: "linux-browser-use-webview-attach-recovery",
    phase: "webview-asset",
    order: 1094,
    ciPolicy: "optional",
    pattern: /^app-initial~app-main~onboarding-page-[^.]+\.js$/,
    missingDescription: "Browser sidebar retained-webview store and host bundle",
    skipDescription: "Linux Browser sidebar attachment recovery patch",
    apply: applyLinuxBrowserUseWebviewAttachRecoveryPatch,
  }),
  webviewAssetPatch({
    id: "linux-browser-use-hidden-host-ownership",
    phase: "webview-asset",
    order: 1095,
    ciPolicy: "optional",
    pattern: /^browser-sidebar-hidden-browser-use-webview-host-[^.]+\.js$/,
    missingDescription: "Browser Use hidden-webview host bundle",
    skipDescription: "Linux inactive-route Browser Use host ownership patch",
    apply: applyLinuxBrowserUseHiddenHostOwnershipPatch,
  }),
];
