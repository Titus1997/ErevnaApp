import * as React from 'react'
import './Authentication.scss';
import { LoginForm, RegisterForm } from '../form/StaticForms';
// import axios from 'axios';

export type TabType = 'login' | 'register';

interface IAuthenticationProps {
    tabToRender ?: TabType;
}

interface IAuthenticationState {
    tabToRender: TabType;
}

export default class AuthenticationView extends React.Component <IAuthenticationProps, IAuthenticationState> {

    public constructor (props: IAuthenticationProps) {
        super(props);

        this.state = {
            tabToRender: this.props.tabToRender !== undefined ? this.props.tabToRender : 'login',
        };
    }

    public changeTab (tab:TabType) {
        this.setState({
            tabToRender: tab
        });
    }

    public render () {

        let tabButtonClass: string = 'tab-button';

        // Predefined login form from ../components/form/StaticFroms
        let loginForm = LoginForm;
        // Predefined register form from ../components/form/StaticFroms
        let registerForm = RegisterForm;

        return (
            <div className='auth-view'>
                <div className='content'>
                    {this.state.tabToRender === 'login' ? loginForm : registerForm} 
                </div>
                
                {this.state.tabToRender === 'login' ? 
                <div>Don't have an account?
                    <div onClick={() => {this.changeTab('register')}} color="blue">Register</div>
                </div> :  
                <div>Already have an account?
                    <div onClick={() => {this.changeTab('login')}} color="blue">Login</div> 
                </div>
                }
            </div>
        );
    }

}