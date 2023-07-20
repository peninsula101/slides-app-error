import './index.css'

const SlideTab = props => {
  const {slideDetails, isActive, setActiveSlideId} = props
  const {heading, description, id} = slideDetails

  const onClickSlide = () => {
    setActiveSlideId(id)
  }

  const slideClassName = isActive ? 'highlight' : 'normal'

  return (
    <li className={slideClassName}>
      <button type="button" className="slide-card" onClick={onClickSlide}>
        <h1 className="slide-tab-head">{heading}</h1>
        <p className="slide-tab-info">{description}</p>
      </button>
    </li>
  )
}

export default SlideTab
