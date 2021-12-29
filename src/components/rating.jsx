import React from 'react'
import star from '../images/star.png'
import noStar from '../images/no-star.png'

export default class Rating extends React.Component {

  render() {
    const location = this.props.location
    const numberOfStars = location.rating
    const arrayStars = []

    for (let i = 1; i <= 5; i++) {
        numberOfStars >= i ? arrayStars.push("star") : arrayStars.push("noStar")
    }

    return (
        <div className="rating">
            {arrayStars.map((stars, index) =>
                stars === "star" ? (
                    <div key={`star_${index}`} className="star">
                        <img className="imgStar" src={star} alt="star" />
                    </div>
                ) : (
                    <div key={`star_${index}`} className="noStar">
                        <img className="imgStar" src={noStar} alt="no-star" />
                    </div>
                )
            )}
        </div>
    )
  }
}