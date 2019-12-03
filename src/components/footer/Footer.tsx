import * as React from 'react';
import './Footer.scss';

interface IFooterProps {

}

interface IFooterState {

}

export default class Footer extends React.Component<IFooterProps, IFooterState> {

    public constructor(props: IFooterProps) {
        super(props);
    }

    public renderFooterButton = (label: string, url: string, loggged: boolean) => {
        var element = (<div></div>);
        if (localStorage.getItem("token") != null || loggged == false) {
            element = (<a href={url} className='footer-link'><div>
                {label}
            </div></a>
            );
        }
        return element;
    }

    public render() {
        return (
            <footer>
                <div className="footernav">
                    <div className='nav'>
                        {this.renderFooterButton('About Us', "/", false)}
                        {this.renderFooterButton('Support', "/", false)}
                    </div>
                    <span  className='registered-mark'>© 2019 Erevna</span>
                </div>
            </footer>
        );
    }

}