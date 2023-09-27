// SignupForm.js
import React, { useState } from 'react';
import {
    SignupFormWrapper,
    FormContainer,
    FormTitle,
    FormLabel,
    InputField,
    SignupButton,
    FormControl,
    Warning
} from './DocSignUpCSS';
import axios from '../../Axios';
const SignupForm = () => {
    const [formData, setFormData] = useState({
        doctorId: '',
        doctorName: '',
        specialization: '',
        workAddress: '',
        mobileNumber: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const [SBool, setSBool] = useState(false)
    const [Err, setErr] = useState("")
    const handleSubmit = async (e) => {
        e.preventDefault();

        const {
            doctorId,
            doctorName,
            specialization,
            workAddress,
            mobileNumber,
            email,
            password
        } = e.target.elements;

        try {
            const response = await axios.post("/DSignup", {
                "_id": doctorId.value,
                "Name": doctorName.value,
                "Specialisation": specialization.value,
                "workAddress": workAddress.value,
                "mobileNumber": mobileNumber.value,
                "email": email.value,
                "pswd": password.value 
            });

            if (response.data.Status === true) {
                window.location.href = "/DocLogin";
            } else {
                setErr(response.data.Status);
                setSBool(true);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <SignupFormWrapper>
            <FormContainer>
                <FormTitle>Signup</FormTitle>
                <form onSubmit={handleSubmit}>
                    <FormControl>
                        <FormLabel htmlFor="doctorId">Doctor ID</FormLabel>
                        <InputField
                            type="text"
                            id="doctorId"
                            name="doctorId"
                            value={formData.doctorId}
                            onChange={handleChange}
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor="doctorName">Doctor Name</FormLabel>
                        <InputField
                            type="text"
                            id="doctorName"
                            name="doctorName"
                            value={formData.doctorName}
                            onChange={handleChange}
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor="specialization">Doctor Specialization</FormLabel>
                        <InputField
                            type="text"
                            id="specialization"
                            name="specialization"
                            value={formData.specialization}
                            onChange={handleChange}
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor="workAddress">Current Work Address</FormLabel>
                        <InputField
                            type="text"
                            id="workAddress"
                            name="workAddress"
                            value={formData.workAddress}
                            onChange={handleChange}
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor="mobileNumber">Mobile Number</FormLabel>
                        <InputField
                            type="text"
                            id="mobileNumber"
                            name="mobileNumber"
                            value={formData.mobileNumber}
                            onChange={handleChange}
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <InputField
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor="password">Password</FormLabel>
                        <InputField
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
                        <InputField
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                        />
                    </FormControl>
                    {SBool ? <Warning>{Err}</Warning> : null}
                    <SignupButton type="submit">Signup</SignupButton>
                </form>
            </FormContainer>
        </SignupFormWrapper>
    );
};

export default SignupForm;
