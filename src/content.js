import React, {useState} from 'react'
import { Switch, Route } from 'react-router-dom'
import HomeComponent from './Home'
import ProjectsComponent from './Projects'
import ContactUsComponent from './contact-us'
import AboutUsComponent from './About-us'
import AssigmentComponent from './Assigment'
import BlogsComponent from './Blogs'
export default function Content() {
    const [result, resultState] = useState(4)
    return(
        <Switch className="content">
            <Route path="/Home">
                <HomeComponent></HomeComponent>
            </Route>
            <Route path="/Projects">
                <ProjectsComponent></ProjectsComponent>
            </Route>
            <Route path ="/ContactUs">
                <ContactUsComponent></ContactUsComponent>
            </Route>
            <Route path ="/AboutUs">
                <AboutUsComponent></AboutUsComponent>
            </Route>
            <Route path= "/Assigment">
                <AssigmentComponent></AssigmentComponent>
            </Route>
            <Route path= "/Blogs">
                <BlogsComponent></BlogsComponent>

            </Route>
        </Switch>
   ) 
}