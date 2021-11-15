import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Fetured from '../Fetured/Fetured';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <Fetured></Fetured>
            <AppointmentBanner></AppointmentBanner>
            <Testimonial></Testimonial>
            <Blog></Blog>
            <Contact></Contact>
        </div>
    );
};

export default Home;