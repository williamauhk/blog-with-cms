import React, { PureComponent } from 'react'

export default class About extends PureComponent {
  componentDidMount() {
    document.title = "关于 | Purple4pur's Blog"
  }

  render() {
    return (
      <>
        <h1>关于</h1>
        <span>项目地址：<a href="https://github.com/purple4pur/blog-with-cms" target="_blank" rel="noopener noreferrer">GitHub</a></span>
      </>
    )
  }
}
