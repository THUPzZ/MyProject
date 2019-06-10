import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../components/home'
import Project from '../components/project'
import Post from '../components/post'
import About from '../components/about'

export default () => (
  <Switch> 
    <Route exact path="/" component= { Home } />
    <Route exact path="/about" component={ About} />
    <Route exact path="/projects" component={ Project } />
    <Route exact path="/posts" component={ Post } />
  </Switch>
)