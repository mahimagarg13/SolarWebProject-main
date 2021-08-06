import './Style.css';
import React from 'react';
import Aboutus from "./Aboutus/Aboutus"
import Action from "./Aboutus/Action"
import OurTeam from "./Aboutus/OurTeam"
import Choose from './Home/Choose';
import Mission from './Aboutus/Mission';

function About() {
    return (
        <>
            <Aboutus />
            <Action />
            <Mission />
            <OurTeam />
            <Choose />

        </>
    );
}
export default About;