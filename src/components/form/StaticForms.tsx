import * as React from 'react';
import Form, { IFormDropDown } from './Form';
import {Address, loginURL, registerURL, UserLogin, UserRegister} from "../../common/Client";
import {Redirect} from "react-router";
import { createBrowserHistory } from 'history';

export let RegisterForm:JSX.Element = 
    <Form
        key = 'register-form'
        title = ''
        submitLabel = 'Next'
        fields = {[
            {key: 'Phone', label: 'Email or Phone', type: 'text', placeholder: 'email@example.com'},
            {key: 'password', label: 'Password', type: 'password', placeholder: 'password'},
            {key: 're-password', label: 'Retype Password', type: 'password', placeholder: 'retype password'},
            {key: 'firstname', label: 'First Name', type: 'text', placeholder: 'first name'},
            {key: 'lastname', label: 'Last Name', type: 'text', placeholder: 'last name'},
            {key: 'terms', type: 'checkbox', label: 'Terms and conditions'},
        ]}
        onSubmit = {(formData) => {
            formData.forEach(element => {
                console.log(element);
            });
            var invite:string = '';
            var address: Address = {addressId:0, addressString:''};
            var userregister:UserRegister = {emailPhone: '', password:'', firstName:'', lastName:''};
            formData.forEach(element => {
                switch (element.key) {
                    case "emailPhone": userregister.emailPhone = element.value; break;
                    case "password": userregister.password = element.value; break;
                    case "firstName": userregister.firstName = element.value; break;
                    case "lastName": userregister.lastName = element.value; break;
                }
            });

            fetch(registerURL, {
                method: "PUT",
                headers: {
                    Accept: "application/json",
                    'Content-Type': "application/json"
                },
                body: JSON.stringify(userregister)
            })
                .then(res => {
                    if (res.ok) {
                        console.log("registered");
                        window.location.reload();
                    } else {
                        console.log("not registered\n");
                        throw Error(res.statusText);
                    }
                })
                .catch(error => console.error(error));
        }}
    />;

export let LoginForm:JSX.Element = 
    <Form 
        key = 'login-form'
        title = ''
        submitLabel = 'Login'
        fields = {[
            {key: 'emailPhone', label: 'Email or Phone', type: 'text', placeholder: 'email'},
            {key: 'password', label: 'Password', type: 'password', placeholder: 'password'},
            {key: 'rememberMe', type: 'checkbox', label: 'Remember me'},
        ]}
        onSubmit = {(formData) => {

            var userlogin:UserLogin = {emailPhone: '', password:''};
            formData.forEach(element => {
                switch (element.key) {
                    case "emailPhone": userlogin.emailPhone = element.value; break;
                    case "password": userlogin.password = element.value; break;
                }
            });

            fetch(loginURL, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    'Content-Type': "application/json"
                },
                body: JSON.stringify(userlogin)
            })
                .then(res => {
                    if (res.ok) {
                        return res.json();
                    } else {
                        console.log("not logged\n");
                        throw Error(res.statusText);
                    }
                })
                .then(json => {
                    localStorage.setItem('token', json.toString());
                    console.log("logged in\n");
                    const history = createBrowserHistory({forceRefresh:true});
                    history.push("/profile");
                })
                .catch(error => console.error(error));
        }}
    />;