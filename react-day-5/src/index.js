import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const users = [
    { username: 'Jerry', age: 21, gender: 'male' },
    { username: 'Tomy', age: 22, gender: 'male' },
    { username: 'Lily', age: 19, gender: 'female' },
    { username: 'Lucy', age: 20, gender: 'female' }
]

class User extends Component {
    render () {
        const { user } = this.props
        return (
            <div>
                <div>姓名：{user.username}</div>
                <div>年龄：{user.age}</div>
                <div>性别：{user.gender}</div>
                <hr />
            </div>
        )
    }
}

class Index extends Component {
    render () {
        return (
            <div>
                {users.map((user, i) => <User key={i} user={user} />)}
            </div>
        )
    }
}

ReactDOM.render(
    <Index />,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
