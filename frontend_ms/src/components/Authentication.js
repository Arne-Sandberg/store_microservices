import { Component } from 'react';
import axios from 'axios';


export function login(username, pass, cb) {
    if (localStorage.token) {
        if (cb) cb(true);
        return;
    }
    getToken(username, pass, (res) => {
        if (res.authenticated) {
            localStorage.token = res.token;
            if (cb) cb(true);
        } else {
            if (cb) cb(false);
        }
    })
}

export function logout() {
    delete localStorage.token;
}

export function loggedIn() {
    return !!localStorage.token;
}

export function getToken(username, password, cb) {
    axios.post('http://localhost:8001/api/obtain-auth-token/', {
        username: username,
        password: password
    })
        .then(function (response) {
            cb({
                authenticated: true,
                token: response.token,
                user_id: response.user_id
            })
        })
        .catch(function (error) {
            console.log(error);
        });
}

    // $.ajax({
    //     type: 'POST',
    //     url: '/api/obtain-auth-token/',
    //     data: {
    //         username: username,
    //         password: pass
    //     },
    //     success: function(res){
    //         cb({
    //             authenticated: true,
    //             token: res.token
    //         })
    //     }
    // })
