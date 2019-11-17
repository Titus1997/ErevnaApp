import * as React from 'react';
import './Getapp.scss';

interface IFooterProps {

}

interface IFooterState {

}

export default class Footer extends React.Component<IFooterProps, IFooterState> {

    public constructor(props: IFooterProps) {
        super(props);
    }

    public render() {
        return (
            <div className='getapp'>
                <p>Get the app</p>
                <div className='getapp-buttons'>
                    <a href='/' className='appstore'>
                        <img className="getapp-img" src='/assets/images/Download-on-the-App-Store-button.png' />
                    </a>
                    <a href='/' className='playstore'>
                        <img className="getapp-img" src='/assets/images/google-play-button.png' />
                    </a>
                </div>
            </div>
        );
    }

}