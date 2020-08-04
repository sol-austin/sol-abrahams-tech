import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import Homepage from './Homepage'
import Education from './Education'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import './Fade.css'

const AnimatedSwitch = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition
      key={location.key}
      classNames='fade'
      timeout={{
        enter: 500,
        exit: 100
      }}
      onExit={() => {
        window.scrollTo(0, 0)
      }}
    >
      <Switch location={location}>
        <Route path='/education' component={Education} />
        <Route path='/' component={Homepage} />
      </Switch>
    </CSSTransition>
  </TransitionGroup>
))

export default AnimatedSwitch
