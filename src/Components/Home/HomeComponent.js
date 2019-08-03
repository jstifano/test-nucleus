import React, {Component} from 'react';
import './Home.css';
import axios from 'axios'
import PersonComponent  from '../Person/PersonComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

class HomeComponent extends Component{
    
    state = {
        topFive: [],
        isPerson: false,
        userInfo: {
            name: '',
            location: '',
            avatar_url: ''
        }
    }

    getAllUsers(){
        axios.get('https://api.github.com/users')
        .then(response => {
            let _users = [];
            for (let i = 0; i < response.data.length; i++) {
                if(i <= 4){
                    let obj = {
                        name: response.data[i].login,
                        avatar_url: response.data[i].avatar_url,
                        id: response.data[i].id
                    }
                    _users.push(obj);
                }
            }
            this.setState({topFive: _users});
        })    
    }

    getUserByName(user){
        axios.get('https://api.github.com/users/'+user.name)
        .then(response => {
            let obj = {
                name: response.data.name,
                avatar_url: response.data.avatar_url,
                location: response.data.location
            }
            this.setState({userInfo: obj, isPerson: true});
        })    
    }

    componentDidMount(){
        this.getAllUsers();
    }

    render(){
        return (
            <div>
                <nav className="navbar navbar-dark bg-dark" style={{heigth: 10, color: 'black'}}>
                    <div className="flex-container">
                        <div style={{position: 'relative', right: '37%', cursor: 'pointer'}} onClick={()=> {this.setState({isPerson: false})}}>
                            {
                                this.state.isPerson ? 
                                    <FontAwesomeIcon icon={faChevronLeft} style={{color: 'white', float: 'left'}} size="2x"/>
                                :
                                null
                            }
                            {this.state.isPerson ? <span className="flex-back-button ml-2" style={{position: 'relative', top: 4}}>Back</span> : null}
                        </div>
                        <div className="justify-self-start">
                            {
                                !this.state.isPerson ? 
                                    <span className="flex-home-span">Home</span>
                                :
                                    <span className="flex-home-span">Person</span>
                            }
                        </div>
                    </div>
                </nav>
                <div className="flex-container-content">
                    <div>
                        {
                            !this.state.isPerson ? 
                                <h1 className="display-6 pt-3">Top 5 GitHub Users!</h1>
                            :
                                null
                        }
                        {
                            !this.state.isPerson ? 
                                <p>Tab the username to see more information.</p>
                            :
                                null 
                        }
                    </div>
                </div>
                <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                    <div>
                        {
                            !this.state.isPerson ? 
                                this.state.topFive.map((userTop, index) => 
                                (
                                    <button 
                                        key={index} 
                                        className="btn btn-primary btn-lg ml-4" 
                                        style={{cursor: 'pointer', color: 'white', marginTop: 20}}
                                        onClick={()=> {
                                            this.getUserByName(userTop)
                                        }}
                                    >
                                        {userTop.name}
                                    </button>
                                ))
                            :
                                <PersonComponent user={this.state.userInfo} />
                        }
                    </div>
                </div>
                
            </div>
        );
    }
   
}

export default HomeComponent;