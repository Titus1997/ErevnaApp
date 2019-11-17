import { string } from "prop-types";

export type Genders = 'male' | 'female';

const baseUrl: string = 'https://localhost:44331/api';
export const registerURL: string = baseUrl + "/Users/";
export const loginURL: string = baseUrl + "/Users";
export const getUserURL: string = baseUrl + "/Users";
export const getCategoriesUrl: string = baseUrl + "/categories";
export const putTool: string = baseUrl + "/tools";

export const getFiltersUrl: string = baseUrl + "/advertisements/filters" ;
/**
 * Dtos
 */
export interface Address{
    addressId: number;
    addressString?: string;
}

export interface UserLogin {
    emailPhone?: string;
    password?: string;
}

export interface UserRegister{
    emailPhone?: string;
    password?: string;
    firstName?: string;
    lastName?: string;
    gender?: Number;
    dateOfBirth?: string;
    address?: Address;
}

export interface User{
    id: number;
    emailPhone?: string;
    password?: string;
    firstName?: string;
    lastName?: string;
    gender?: Genders;
    dateOfBirth?: string;
    address?: Address;
}

export interface DistanceObject{
    location: Address;
    distance: number;
}

export interface FilterObject {
    searchFilter: string | null;
    addressFilter: string | null;
    distanceFilter?: DistanceObject;
}