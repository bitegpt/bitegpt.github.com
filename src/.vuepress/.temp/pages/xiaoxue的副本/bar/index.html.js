import comp from "/Users/feng/my-docs/src/.vuepress/.temp/pages/xiaoxue的副本/bar/index.html.vue"
const data = JSON.parse("{\"path\":\"/xiaoxue%E7%9A%84%E5%89%AF%E6%9C%AC/bar/\",\"title\":\"Bar 功能\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Bar 功能\",\"icon\":\"lightbulb\",\"description\":\"介绍 我们支持 bar 功能，... 详情 ...\",\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"介绍\",\"slug\":\"介绍\",\"link\":\"#介绍\",\"children\":[]},{\"level\":2,\"title\":\"详情\",\"slug\":\"详情\",\"link\":\"#详情\",\"children\":[]}],\"readingTime\":{\"minutes\":0.07,\"words\":21},\"filePathRelative\":\"xiaoxue的副本/bar/README.md\",\"autoDesc\":true}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
