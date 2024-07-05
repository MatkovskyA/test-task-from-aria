import "./_advantage.scss"

const Advantage = ({count, text}) => {
  return (
    <div className="advantage">
      <span className="advantage-title">{count}</span>
      <span className="advantage-text">{text}</span>
    </div>
  )
}

export default Advantage;