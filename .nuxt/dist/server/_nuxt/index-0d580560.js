import "vue";
import { composableNames } from "@unhead/shared";
const coreComposableNames = [
  "injectHead"
];
({
  "@unhead/vue": [...coreComposableNames, ...composableNames]
});
