import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/demo/",
  {
    text: "指南",
    icon: "lightbulb",
    prefix: "/guide/",
    children: [
      {
        text: "Bar",
        icon: "lightbulb",
        prefix: "bar/",
        children: ["baz", { text: "...", icon: "ellipsis", link: "" }],
      },
      {
        text: "Foo",
        icon: "lightbulb",
        prefix: "foo/",
        children: ["ray", { text: "...", icon: "ellipsis", link: "" }],
      },
    ],
  },

  {
    text: "小学",
    icon: "lightbulb",
    prefix: "/xiaoxue/",
    children: [
      {
        text: "小学知识点",
        icon: "book",
        prefix: "xxzsd/",
        children: ["baz", { text: "...", icon: "ellipsis", link: "" }],
      },
      {
        text: "小学试题",
        icon: "lightbulb",
        prefix: "foo/",
        children: ["ray", { text: "...", icon: "ellipsis", link: "" }],
      },
    ],
  },

  {
    text: "初中",
    icon: "lightbulb",
    prefix: "/chuzhong/",
    children: [
      {
        text: "中考",
        icon: "zhongkao",
        prefix: "bar/",
        children: ["baz", { text: "...", icon: "ellipsis", link: "" }],
      },
      {
        text: "初中知识点",
        icon: "lightbulb",
        prefix: "czzsd/",
        children: ["ray", { text: "...", icon: "ellipsis", link: "" }],
      },
      {
        text: "初中试题",
        icon: "czst",
        prefix: "foo/",
        children: ["ray", { text: "...", icon: "ellipsis", link: "" }],
      },
      {
        text: "初一",
        icon: "chuyi",
        prefix: "foo/",
        children: ["ray", { text: "...", icon: "ellipsis", link: "" }],
      },
      {
        text: "初二",
        icon: "chuer",
        prefix: "foo/",
        children: ["ray", { text: "...", icon: "ellipsis", link: "" }],
      },
      {
        text: "初三",
        icon: "chusan",
        prefix: "foo/",
        children: ["ray", { text: "...", icon: "ellipsis", link: "" }],
      },
    ],
  },

  {
    text: "高中",
    icon: "book",
    prefix: "/gaozhong/",
    children: [
      {
        text: "高考",
        icon: "lightbulb",
        prefix: "gaokao/",
        children: ["baz", { text: "...", icon: "ellipsis", link: "" }],
      },
      {
        text: "高中知识点",
        icon: "lightbulb",
        prefix: "gzzsd/",
        children: ["ray", { text: "...", icon: "ellipsis", link: "" }],
      },
      {
        text: "高中试题",
        icon: "lightbulb",
        prefix: "gzst/",
        children: ["ray", { text: "...", icon: "ellipsis", link: "" }],
      },
      {
        text: "高一",
        icon: "lightbulb",
        prefix: "gaoyi/",
        children: ["ray", { text: "...", icon: "ellipsis", link: "" }],
      },
      {
        text: "高二",
        icon: "gaoer",
        prefix: "foo/",
        children: ["ray", { text: "...", icon: "ellipsis", link: "" }],
      },
      {
        text: "高三",
        icon: "gaosan",
        prefix: "foo/",
        children: ["ray", { text: "...", icon: "ellipsis", link: "" }],
      },
    ],
  },
  
  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
