import React from 'react';
import ContactForm from "./ContactForm/ContactForm";
import AddressBox from "./AddressBox/AddressBox";
import Map from "./Map/Map";

const ContactPage = () => {
    return (
        <div className='row'>
            <p className="newPoTitle paddingForDisclaimer mt-4">Contact</p>
            <div className="col-md-4 col-sm-12">
                <AddressBox></AddressBox>
                <Map></Map>
            </div>
            <div className="col-md-8 col-sm-12">
                <ContactForm></ContactForm>
            </div>
        </div>
    );
};

export default ContactPage;