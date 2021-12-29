import React from 'react'

export default class Carrousel extends React.Component {

state = {
  index: 0
}

next=()=>{
  let newIndex = this.state.index + 1;
  if (newIndex > this.props.location.pictures.length - 1){
    newIndex = 0
  }
  this.setState({index:newIndex})
}

prev=()=>{
  let newIndex = this.state.index - 1;
  if (newIndex < 0){
    newIndex = this.props.location.pictures.length - 1
  }
  this.setState({index:newIndex})
}

DisplayArrow=()=>{
  if (this.props.location.pictures.length - 1 !== 0){
    return (
      <>
        <span className="next" onClick={this.next}><i className="fas fa-chevron-left arrow-next"></i></span>
        <span className="previous" onClick={this.prev}><i className="fas fa-chevron-left arrow-prev"></i></span>
      </>
    )
  } else {
    return (
      <div></div>
    )
  }
}

  render() {
    const locationCurrentPicture = this.props.location.pictures[this.state.index]
    return (
    <div className='carrousel' style={{
      backgroundImage:`url(${locationCurrentPicture})`
    }}>
      <this.DisplayArrow/>
    </div>
  )
  }
}