import * as React from 'react';
import Select from '../select/Select';
import './Form.scss';
//import Geosuggest from 'react-geosuggest';
//import '../../../node_modules/react-google-location/';

export interface IFormField {
    key: string;
    label?: string;
    type: 'text' | 'password' | 'email' | 'checkbox' | 'select' | 'date';
    placeholder?: string;
    value?: string;
}

export interface IFormDropDown extends IFormField {
    valueSet: string[];
}

export interface FormData {
    key: string;
    value: string;
}

interface IFormProps {
    title?: string;
    fields: IFormField[];
    submitLabel: string;
    onSubmit: (formData: FormData[]) => void;
}

interface IFormState {
    formData: FormData[];
}

export default class Form extends React.Component<IFormProps, IFormState> {

    public constructor (props: IFormProps) {
        super(props);

        let formData: FormData[] = new Array();

        this.props.fields.forEach((field: IFormField) => {
            formData.push({
                key: field.key,
                value: field.value !== undefined ? field.value : ''
            });
        });

        this.state = {
            formData: formData
        };
    }

    private onFieldChanged = (key: string, value: string) => {
        let newFormData: FormData[] = this.state.formData;
        newFormData.forEach((formData: FormData) => {
            if (formData.key === key)
                formData.value = value;
        });
        this.setState({
            formData: newFormData
        });
    }

    private renderFromField = (formField: IFormField) => { 

        let fieldLabel: JSX.Element = (                
            <> </>
        );

        if (formField.label !== undefined) {
            fieldLabel = (
                <div className='form-field-label'>
                    {formField.label}
                </div>
            );
        }

        let className: string = 'form-field-input';
        if (formField.type === 'checkbox')
            className = 'form-field-checkbox';

        let inputComponent: JSX.Element =
            <input 
                    key={this.props.title + '-' + formField.key}
                    className={className}
                    type={formField.type} 
                    placeholder={formField.placeholder !== undefined ? formField.placeholder : ''} 
                    onChange={(event: any) => {
                        this.onFieldChanged(formField.key, event.target.value)
                    }}
            />;

        return (
            <div className='form-field' key={this.props.title + '-' + formField.key}>
                {fieldLabel}
                {inputComponent}
            </div>
        ); 
    }

    private renderFromFields = (): JSX.Element[] => {
        let returnValue: JSX.Element[] = new Array();

        this.props.fields.forEach((field:IFormField) => {
            returnValue.push(this.renderFromField(field));
        });

        return returnValue;
    }

    private onSubmit = () => {
        this.props.onSubmit(this.state.formData);
    }

    public render () {

        let className: string = 'form';

        return (
            <div className={className}>
                <div className='form-title'>
                    {this.props.title}
                </div>
                <div className='from-field-container'>
                    {this.renderFromFields()}
                </div>
                <hr />
                <button className='button' type='button' onClick={this.onSubmit}> {this.props.submitLabel} </button>
            </div>
        ); 
    }

}