import { Review } from "../review/Review"
import "./_reviews.scss"

import photo from "../../assets/icons/photo.svg"
import photo1 from "../../assets/icons/photo1.svg"
import photo2 from "../../assets/icons/photo2.svg"
import photo3 from "../../assets/icons/photo3.svg"

export const Reviews = () => {
  return (
    <div className="reviews-wrapper">
      <Review
        photo={photo}
        name={"Lorenzo"}
        nickName={"@lorenzoo"}
        text={"Amazing Telegram bot! Provides real-time crypto prices and news"}
      />
      <Review
        photo={photo1}
        name={"Adalina"}
        nickName={"@ada"}
        text={"Must-have bot for crypto traders. Accurate signals and analysis"}
      />
      <Review
        photo={photo2}
        name={"Alexander"}
        nickName={"@alex_x"}
        text={"Superb cryptocurrency bot! Quick updates and reliable data"}
      />
      <Review
        photo={photo3}
        name={"Rushana"}
        nickName={"@Hana"}
        text={"Efficient and user-friendly bot. Simplifies crypto trading tasks"}
      />
    </div>
  )
}