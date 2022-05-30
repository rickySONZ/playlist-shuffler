import * as React from 'react';
import styled from 'styled-components';
import { loginUser } from '../../actions/auth';


export const Login = (props) => {

    return (
        <>
            <div>
                <LoginButton onClick={loginUser}>Login</LoginButton>
            </div>
        </>
    )
}

const LoginButton = styled.button`
    border-radius: 2px;
    height: 100px;
`