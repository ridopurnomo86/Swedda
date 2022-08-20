import React from "react";
import Link from "next/link";
import { OptionalText, OptionalLogin } from "./styles";

const OptionalContent = () => (
    <>
        <OptionalText>
            By signing up for Swedda, you agree to Swedda&nbsp;
            <Link href="/terms" passHref>
                <span className="underline">Terms of Service</span>
            </Link>
            &nbsp;&amp;&nbsp;
            <Link href="/policy" passHref>
                <span className="underline">Privacy Policy.</span>
            </Link>
        </OptionalText>
        <OptionalLogin>
            Already have a account?&nbsp;
            <Link href="/signin" passHref>
                <span className="underline">Sign in</span>
            </Link>
        </OptionalLogin>
    </>
);

export default OptionalContent;
