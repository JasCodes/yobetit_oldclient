import React, { SFC } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { TransitionPortal } from 'gatsby-plugin-transition-link'
import { Header } from './header'
import './layout.css'

interface LayoutProp {
  title: string
}

const Layout: SFC<LayoutProp> = props => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <TransitionPortal>
        <Header siteTitle={data.site.siteMetadata.title} />
      </TransitionPortal>
      {props.children}
    </>
  )
}

export default Layout
