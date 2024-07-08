import "./_advantages.scss"
import Advantage from "../advantage/Advanatge";

const Advantages = () => {
  return (
    <div className="advantages">
      <Advantage
        count={'20K+'}//данные с бэка
        text={'subscribers'}
      />
      <Advantage
        count={'19,5K'}//данные с бэка
        text={'successful cases'}
      />
      <Advantage
        count={'4.8/5'}//данные с бэка
        text={'rating'}
      />
    </div>
  )
}

export default Advantages;