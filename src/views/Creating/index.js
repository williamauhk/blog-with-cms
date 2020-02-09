import React, { PureComponent as Component } from 'react'

import { PostList } from 'components'

export default class Creating extends Component {
  componentDidMount() {
    document.title = "创作 | Purple4pur's Blog"
  }

  render() {
    return (
      <>
        <h1>这里是创作。Coming soon.</h1>
        <PostList categoryID={2} />
      </>
    )
  }
}
