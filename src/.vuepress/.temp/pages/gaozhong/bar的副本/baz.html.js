import comp from "/Users/feng/my-docs/src/.vuepress/.temp/pages/gaozhong/bar的副本/baz.html.vue"
const data = JSON.parse("{\"path\":\"/gaozhong/bar%E7%9A%84%E5%89%AF%E6%9C%AC/baz.html\",\"title\":\"Baz\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Baz\",\"icon\":\"circle-info\",\"description\":\"功能详情...\",\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.03,\"words\":10},\"filePathRelative\":\"gaozhong/bar的副本/baz.md\",\"autoDesc\":true}")
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
