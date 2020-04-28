import { Link } from 'gatsby'
import React, { SFC } from 'react'

interface HeaderProp {
  siteTitle: string
}

const Header: SFC<HeaderProp> = props => {
  return (
    <header
      style={{
        // background: `#975099`,
        background: '#B91CBF',
        // marginBottom: `1.45rem`,
        width: `100vw`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {props.aaa}
          </Link>
        </h1>
      </div>
    </header>
  )
}

export { Header }
