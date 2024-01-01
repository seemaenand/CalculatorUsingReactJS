import { useContext } from "react"
import { CalcContext } from "../context/CalcContext"

const Screen = () => {

    const { calc } = useContext(CalcContext);
    
  return (
    <div className="screen">3975249542</div>
  )
}

export default Screen