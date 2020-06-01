import React,{Component} from 'react'
import Button from '@material-ui/core/Button'
import firebase from './firebase'

export default class Login extends Component{
    constructor(props){
        super(props);
        this.login = this.login.bind(this)

    }

    login(){
        let provider = new firebase.auth.GoogleAuthProvider();
firebase.auth().signInWithPopup(provider).then(result=>{
    Console.log(result);
}
    
    )
    }

    render(){
        return(
            <div>
                <Button variant = "contained" color="primary" onClick={this.login} >
                    Iniciar sesion
                </Button>

            </div>
        )
    }
}