import React from 'react';
import Registration from "../Registration/Registration";
import RegistrationP2 from "../Registration/RegistrationP2";
import RegistrationP3 from "../Registration/RegistrationP3";
import './MultiStepsRegistrationForm.css'
import Stepper from "../../Steppers/Stepper";
import styled from 'styled-components';


const MultiStepsRegistrationForm = () => {

    return (
        <div>
            <Stepper>
                <Stepper.Steps>
                    <Stepper.Step id="first" name="General
Information">
                        <StepBody>
                            <Registration/>
                        </StepBody>
                    </Stepper.Step>
                    <Stepper.Step id="second" name="Authorized Person’s
Information">
                        <StepBody>
                            <RegistrationP2/>
                        </StepBody>
                    </Stepper.Step>
                    <Stepper.Step id="third" name="Attachments
Upload">
                        <StepBody>
                            <RegistrationP3/>
                        </StepBody>
                    </Stepper.Step>
                </Stepper.Steps>
            </Stepper>
        </div>
    );
};
const StepBody = styled.div`
  
`

export default MultiStepsRegistrationForm;