import React from "react";
import Image from "next/image";
import Button from "../../../../src/components/Button";
import {  SignupSectionContainer, Text, TextContent, Title } from "./styles";

const SignupSection = () => (
    <SignupSectionContainer>
        <Image
            src={"https://source.unsplash.com/IWngN5UWUbU"}
            width={600}
            height={350}
            quality="100"
            alt="pic"
            className="image"
            objectFit="cover"
        />
        <TextContent>
            <Title>Start For Free</Title>
            <Text>
                If you’ve made it this far, you must be at least a little curious. 
                Sign up and take the first step toward your goals.
            </Text>
            <Button direction="/signup" backgroundColor="#000000" width="100%">Sign Up</Button>
        </TextContent>
    </SignupSectionContainer>
);

export default SignupSection;