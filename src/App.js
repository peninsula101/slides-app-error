import {Component} from 'react'

import Header from './components/Header'
import SlideTab from './components/Slide Tab'

import './App.css'

// This is the list used in the application. You can move them to any component needed.
const initialSlidesList = [
  {
    id: 'cc6e1752-a063-11ec-b909-0242ac120002',
    heading: 'Welcome',
    description: 'Rahul',
  },
  {
    id: 'cc6e1aae-a063-11ec-b909-0242ac120002',
    heading: 'Agenda',
    description: 'Technologies in focus',
  },
  {
    id: 'cc6e1e78-a063-11ec-b909-0242ac120002',
    heading: 'Cyber Security',
    description: 'Ethical Hacking',
  },
  {
    id: 'cc6e1fc2-a063-11ec-b909-0242ac120002',
    heading: 'IoT',
    description: 'Wireless Technologies',
  },
  {
    id: 'cc6e20f8-a063-11ec-b909-0242ac120002',
    heading: 'AI-ML',
    description: 'Cutting-Edge Technology',
  },
  {
    id: 'cc6e2224-a063-11ec-b909-0242ac120002',
    heading: 'Blockchain',
    description: 'Emerging Technology',
  },
  {
    id: 'cc6e233c-a063-11ec-b909-0242ac120002',
    heading: 'XR Technologies',
    description: 'AR/VR Technologies',
  },
]

// Replace your code here
class App extends Component {
  state = {
    slidesList: [],
    activeSlideId: initialSlidesList[0].id,
  }

  componentDidMount() {
    this.setState({
      slidesList: [...initialSlidesList],
    })
  }

  setActiveSlideId = id => {
    this.setState({activeSlideId: id})
  }

  renderLeftToolBar = () => {
    const {slidesList, activeSlideId} = this.state

    return (
      <div className="left-tool-bar-section">
        <div className="new-add-section">
          <button type="button" className="add-btn">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-plus-icon.png"
              alt="new plus icon"
              className="plus-icon"
            />
            New
          </button>
        </div>
        <ol className="slides-container">
          {slidesList.map(eachSlide => (
            <SlideTab
              slideDetails={eachSlide}
              key={eachSlide.id}
              setActiveSlideId={this.setActiveSlideId}
              isActive={activeSlideId === eachSlide.id}
            />
          ))}
        </ol>
      </div>
    )
  }

  renderSlideSection = () => {
    const {activeSlideId, slidesList} = this.state
    // console.log(activeSlideId)
    // console.log(slidesList)
    const reqSlide = slidesList.filter(
      eachSlide => activeSlideId === eachSlide.id,
    )
    console.log(reqSlide[0])
    // console.log(typeof reqSlide[0])
    const {heading, description} = reqSlide[0]

    return (
      <div className="slide-section">
        <div className="home-slide-card">
          <h1 className="home-slide-head">{heading}</h1>
          <p className="home-slide-info">{description}</p>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="slide-page-bg">
        <Header />
        <div className="content-section">
          {this.renderLeftToolBar()}
          {this.renderSlideSection()}
        </div>
      </div>
    )
  }
}

export default App
