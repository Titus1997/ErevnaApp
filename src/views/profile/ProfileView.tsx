import * as React from 'react';
import "./ProfileView.scss";
import {User, getUserURL, Address, UserRegister} from '../../common/Client';
import Header from './../../components/header/Header';
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
            //address: {addressId:0, addressString:'', city:'Cluj-Napoca', country:'Romania', longitude:23, latitude:46},
            user: {id:0, emailPhone: '', password:'', firstName:'', lastName:'', gender:"male", dateOfBirth:'', address: {addressId:0, addressString:''}}

        }
    }

    public componentDidMount() {
        this.loadUserFromServer();
    }

    public renderImage = ()=>{
        const malePath="/assets/images/male-user.jpg";
        const femalePath="/assets/images/female-user.jpg";
        var userImage = (<img src={malePath} className={"user-image"}></img>);
        if(this.state.user.gender == "female")
            userImage = (<img src={femalePath} className={"user-image"}></img>);
        return userImage;
    }

    public render() {
        return (
            <div className="profile">
                <Header />
                <div className='profile-container'>
                    <div className='profile-image-container'>{this.renderImage()}</div>
                    <div className='profile-details-container'>
                        <p className="profile-name"><b> {this.state.user.firstName}</b> <b>{this.state.user.lastName}</b></p>
                        <p><b>Email :</b> {this.state.user.emailPhone}</p>
                        <p><b>Birth date :</b> {this.state.user.dateOfBirth!!.slice(0,10)}</p>
                    </div>
                </div>
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
            this.setState({error: 'You must login to see users !'});
        }

    }
}