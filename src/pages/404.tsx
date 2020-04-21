import React, { SFC } from 'react'

interface MissingProp {}

const Missing: SFC<MissingProp> = props => {
  return (
    <div className="box">
      <div className="boxItemCenter">404</div>
    </div>
  )
}

export default Missing
