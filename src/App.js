import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
// import PropTypes from "prop-types";
import { withRouter } from 'react-router';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import "./App.css";
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
    // static propTypes = {
    //     match: PropTypes.object.isRequired,
    //     location: PropTypes.object.isRequired,
    //     history: PropTypes.object.isRequired
    // };

    render()
    {
        // const { match, location , history} = this.props;
        const { location } = this.props;
        return (
            <div className="special-font">
                <div className="w-100">
                    <img className="w-100 app-background" src={boston} alt="boston"/>
                    <div className="app-solid-background"></div>
                </div>
                <nav className="d-flex mx-auto justify-content-around align-items-end app-icon-bar">
                    <BannerIcon routePath="/" imageIcon={homeIcon} imageName="HOME" alt="home"/>
                    <BannerIcon routePath="/education" imageIcon={educationIcon} imageName="EDUCATION" alt="education"/>
                    <BannerIcon routePath="/work" imageIcon={workIcon} imageName="WORK" alt="work"/>
                    <BannerIcon routePath="/projects" imageIcon={projectsIcon} imageName="PROJECTS" alt="projects"/>
                    <BannerIcon routePath="/artwork" imageIcon={artworkIcon} imageName="ARTWORK" alt="artwork"/>
                    <BannerIcon routePath="/about" imageIcon={aboutIcon} imageName="ABOUT" alt="about"/>
                </nav>
                <TransitionGroup>
                    <CSSTransition
                        key={location.key}
                        classNames="flow"
                        timeout={600}
                    >
                        <Switch location={location} className="wrapper">
                            <Route exact path="/" component={Home}/>
                            <Route path="/education" component={Education}/>
                            <Route path="/work" component={Work}/>
                            <Route path="/projects" component={Projects}/>
                            <Route path="/artwork" component={Artwork}/>
                            <Route path="/about" component={About}/>
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            </div>
        );
    }
}

export default withRouter(App);
