import * as React from 'react';
import "./ProfileView.scss";
import {User, getUserURL, Address, UserRegister} from '../../common/Client';
import Header from '../../components/header/Header';
import { FilterObject } from '../../common/Client';
import RequestService from '../../common/RequestService';
import { getCategoriesUrl } from '../../common/Client';



interface IState {
    //address: Address;
    user: User;
    error?: string;
}

export default class ProfileView extends React.Component<any, IState> {

    public constructor(props: any) {
        super(props);
        this.state = {
            user: {id:0, emailPhone: '', password:'', firstName:'', lastName:'', gender:"male", dateOfBirth:'', address: {addressId:0, addressString:''}}

        }
    }

    public componentDidMount() {
        this.loadUserFromServer();
    }

    public render() {
        return (
            <div className="explore">
                <Header />
            </div>
        );
    }

    private loadUserFromServer = () => {
        let token: string | null = localStorage.getItem('token');
        console.log('token', token);
        if (token !== null) {
            RequestService.doGET(getUserURL+"-1", undefined, undefined, token)!!
                .then((res: any) => {
                    let data: User = res.data;
            
                    this.setState({ user: data });

                })
                .catch((err)=>{
                    console.error(err);
                })
        } else {
            this.setState({error: 'You must login!'});
        }

    }
}