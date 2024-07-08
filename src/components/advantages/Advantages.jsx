import "./_advantages.scss"
import Advantage from "../advantage/Advanatge";

const Advantages = () => {
  return (
    <div className="advantages">
      <Advantage
        count={'20K+'}
        text={'subscribers'}
      />
      <Advantage
        count={'19,5K'}
        text={'successful cases'}
      />
      <Advantage
        count={'4.8/5'}
        text={'rating'}
      />
    </div>
  )
}

export default Advantages;