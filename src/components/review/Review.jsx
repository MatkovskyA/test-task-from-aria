import "./_review.scss"

export const Review = ({ photo, name, nickName, text}) => {
  return (
    <div className="review">
      <div className="review-header">
        <div className="review-foto">
          <img src={photo} alt="Foto" />
        </div>
        <div className="review-data">
          <span className="review-data__name">{name}</span>
          <span className="review-data__nickName">{nickName}</span>
        </div>
      </div>
      <div className="review-text">
        <p>{text}</p>
      </div>
    </div>
  )
}