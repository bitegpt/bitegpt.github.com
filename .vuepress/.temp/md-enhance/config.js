import { defineClientConfig } from "vuepress/client";
import CodeTabs from "/Users/feng/my-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.33_markdown-it@14.1.0_sass-loader@14.1.1_vuepress@2.0.0-rc.9/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs.js";
import { hasGlobalComponent } from "/Users/feng/my-docs/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.23_vuepress@2.0.0-rc.9/node_modules/@vuepress/helper/lib/client/index.js";
import { CodeGroup, CodeGroupItem } from "/Users/feng/my-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.33_markdown-it@14.1.0_sass-loader@14.1.1_vuepress@2.0.0-rc.9/node_modules/vuepress-plugin-md-enhance/lib/client/compact/index.js";
import CodeDemo from "/Users/feng/my-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.33_markdown-it@14.1.0_sass-loader@14.1.1_vuepress@2.0.0-rc.9/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "/Users/feng/my-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.33_markdown-it@14.1.0_sass-loader@14.1.1_vuepress@2.0.0-rc.9/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";
import "/Users/feng/my-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.33_markdown-it@14.1.0_sass-loader@14.1.1_vuepress@2.0.0-rc.9/node_modules/vuepress-plugin-md-enhance/lib/client/styles/figure.scss";
import { useHint } from "/Users/feng/my-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.33_markdown-it@14.1.0_sass-loader@14.1.1_vuepress@2.0.0-rc.9/node_modules/vuepress-plugin-md-enhance/lib/client/composables/hint.js";
import "/Users/feng/my-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.33_markdown-it@14.1.0_sass-loader@14.1.1_vuepress@2.0.0-rc.9/node_modules/vuepress-plugin-md-enhance/lib/client/styles/hint/index.scss";
import Tabs from "/Users/feng/my-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.33_markdown-it@14.1.0_sass-loader@14.1.1_vuepress@2.0.0-rc.9/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs.js";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    if(!hasGlobalComponent("CodeGroup", app)) app.component("CodeGroup", CodeGroup);
    if(!hasGlobalComponent("CodeGroupItem", app)) app.component("CodeGroupItem", CodeGroupItem);
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
    app.component("Tabs", Tabs);
  },
  setup: () => {
useHint();
  }
});
