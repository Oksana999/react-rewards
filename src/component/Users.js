import React from 'react';
import UserService from "../services/UserService";
import "./User.css"

 export class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Yana Lubova',
            id: '',
            users: [],
            days: 30
        }
    }

    componentDidMount() {
        UserService.getTransactions().then((response) =>{
            this.setState({users: response.data})
        });
    }

    render() {
        const handleChange = (e) =>{
            console.log(this.state.users);
          const userId =   this.state.users.filter(user => user.name === e.target.value)[0].userId;
          this.props.setId(userId)
            this.setState({value:e.target.value})
        }
        const handleChangeDays = (e) =>{
            console.log(this.state.days);
            this.setState({days:parseInt(e.target.value)})
            this.props.setDays(parseInt(e.target.value));
        }
        return (
            <div>
                <div id="App">
                    <div className="select-container">
                        <label>Select User : </label>
                        <select value={this.state.value} onChange={handleChange}>
                            this.state.users.map(
                            user =>
                            {this.state.users.map(user => (
                                <option key = {user.id} value={user.name}>{user.name}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label>Select Period : </label>
                        <select value={this.state.days} onChange={handleChangeDays}>
                            <option value='30'>30 days</option>
                            <option value='90'>90 days</option>
                        </select>
                    </div>
                </div>
            </div>
        )
    }
}
