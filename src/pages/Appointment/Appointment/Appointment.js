import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';
import HeaderAppointment from '../HeaderAppointment/HeaderAppointment';
const Appointment = () => {
    const [date, setDade] = React.useState(new Date());
    return (
        <div>
            <Navigation></Navigation>
            <HeaderAppointment date={date} setDate={setDade}></HeaderAppointment>
            <AvailableAppointment date={date}>/</AvailableAppointment>
        </div>
    );
};

export default Appointment;