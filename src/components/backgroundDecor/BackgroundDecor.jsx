import "./_backgroundDecor.scss"

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