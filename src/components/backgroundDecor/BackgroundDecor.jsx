import "./_backgroundDecor.scss"

// import bitcoin from "../../assets/icons/Bitcoin.svg"
// import litecoin from "../../assets/icons/Litecoin.svg"
// import etherium from "../../assets/icons/Ethereum.svg"
import { Decor } from "../decor/Decor"

export const BackgroundDecor = () => {
  return (
    <div className="backgroundDecor">
      <Decor styles={"decor-bitcoin"}/>
      <Decor styles={"decor-litecoin"}/>
      <Decor styles={"decor-etherium"}/>
    </div>
  )
}