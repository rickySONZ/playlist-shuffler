import * as React from 'react';
import styled from 'styled-components';
import { loginUser } from '../../actions/auth';
import { connect, useDispatch } from 'react-redux';


const Login = (props) => {

    const dispatch: any = useDispatch()

    return (
        <>
            <div style={{margin: 'auto'}}>
                <LoginButton onClick={() => dispatch(loginUser())}>Login</LoginButton>
            </div>
        </>
    )
}

export default connect(null, null)(Login);

const LoginButton = styled.button`
    border-radius: 2px;
    height: 100px;
`