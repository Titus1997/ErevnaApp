import * as React from 'react';
import AuthenticationView from './../../components/authentication/Authentication';
import './LandingPage.scss';
import Header from './../../components/header/Header';
import Footer from './../../components/footer/Footer';
import Getapp from './../../components/getapp/GetApp'; 

interface ILandingPageProps {

}

interface ILandingPageState {

}

export default class LandingPage extends React.Component<ILandingPageProps, ILandingPageState> {

    public constructor(props: ILandingPageProps) {
        super(props);
    }

    public renderAuthorization = () => {
        var element = (<div></div>);
        if (localStorage.getItem("token") == null) {
            element = (
                <div className='right landing-page-dialog authentication-box'>
                </div>);
        }
        return element;
    }

    public renderStartView = () => {
        return (<div></div>);
    }

    public render() {
        const homeImage = "/assets/images/insidechurch.jpg";
        if(localStorage.getItem("token") == null){       
            return (
                <div className='landing-page'>
                    {/*<Header />*/}
                        <div className='left landing-page-content home-background'>
                            {/*<h1> Erevna </h1>
                            <h3> Find nearby christian communities </h3>
                            <img src={homeImage} className='homeImg'/>*/}
                        </div>
                        <div className='right landing-page-content authentication-box'>
                            <AuthenticationView />
                            <Getapp/>
                        </div>
                    {/*<Footer />*/}
                </div>
            );
        }
        else{
            return ( <div>{this.renderStartView()}</div> );
        }
    }

}

