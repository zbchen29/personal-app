import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css";

// Components
import Home from './home/Home';
import Education from './education/Education';
import Work from './work/Work';
import Projects from './projects/Projects';
import Artwork from './artwork/Artwork';
import About from './about/About';
import BannerIcon from './components/BannerIcon';

// Images
import boston from './background_boston.jpeg';
import homeIcon from './home/home_icon.png';
import educationIcon from './education/education_icon.png';
import workIcon from './work/work_icon.png';
import projectsIcon from './projects/projects_icon.png';
import artworkIcon from './artwork/artwork_icon.png';
import aboutIcon from './about/about_icon.png';

class App extends Component {
    render()
    {
        return (
            <div className="special-font">
                <div className="w-100 app-background">
                    <img className="w-100" src={boston}/>
                    <div className="app-solid-background"></div>
                </div>
                <nav className="d-flex mx-auto justifty-content-around align-items-end app-icon-bar">
                    <BannerIcon routePath="/" imageIcon={homeIcon} imageName="HOME"/>
                    <BannerIcon routePath="/education" imageIcon={educationIcon} imageName="EDUCATION"/>
                    <BannerIcon routePath="/work" imageIcon={workIcon} imageName="WORK"/>
                    <BannerIcon routePath="/projects" imageIcon={projectsIcon} imageName="PROJECTS"/>
                    <BannerIcon routePath="/artwork" imageIcon={artworkIcon} imageName="ARTWORK"/>
                    <BannerIcon routePath="/about" imageIcon={aboutIcon} imageName="ABOUT"/>
                </nav>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/education" component={Education}/>
                    <Route path="/work" component={Work}/>
                    <Route path="/projects" component={Projects}/>
                    <Route path="/artwork" component={Artwork}/>
                    <Route path="/about" component={About}/>
                </Switch>
            </div>
        );
    }
}

export default App;
