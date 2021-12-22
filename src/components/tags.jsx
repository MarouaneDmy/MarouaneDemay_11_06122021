import React from 'react'

export default class Rating extends React.Component {

  render() {

    return (
        <div className="tags">
            {this.props.location.tags.map((tag) => <div>{tag}</div>)}
        </div>
    )
  }
}