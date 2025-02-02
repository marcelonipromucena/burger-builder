import reducer from './auth';
import * as actionTypes from '../actions/actionTypes';
import { isTSAnyKeyword } from '@babel/types';

describe('auth reducer', () => {
    it('shouuld return  the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            token: null,
            userId: null,
            error: null,
            loading: false,
            authRedirectPath: '/'
        });
    });
    it('shouuld store the token uponn login', () => {
        expect(reducer(
            {
                token: null,
                userId: null,
                error: null,
                loading: false,
                authRedirectPath: '/'
            },
            {
                type: actionTypes.AUTH_SUCCESS,
                idToken: 'some-token',
                userId: 'some-user-id',
            })).toEqual({
                token: 'some-token',
                userId: 'some-user-id',
                error: null,
                loading: false,
                authRedirectPath: '/'
            });
    });
});
