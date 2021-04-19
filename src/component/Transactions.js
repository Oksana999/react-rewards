import React from 'react';
import RewardsService from "../services/RewardsService";
import "./Transaction.css";

class Transactions extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            payments: [],
            points: 0
        }
    }

    componentDidMount() {
        RewardsService.getRewards(this.props.id,this.props.days).then((response) =>{
            this.setState({
                payments: response.data.payments,
                points: response.data.points
            })
        }).catch((error) =>{
            console.log(error);
        })
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.id !== this.props.id || prevProps.days !== this.props.days){
            RewardsService.getRewards(this.props.id,this.props.days).then((response) =>{
                this.setState({
                    payments: response.data.payments,
                    points: response.data.points
                })
            }).catch((error) =>{
                console.log(error);
            })
        }
    }

    render() {
        return (
            <div>
                <h2 className="text-center" className = "transactions">Transactions List </h2>
                <table className="table table-striped">
                    <thead>
                    <tr className="Tansactions-header">
                        <td>Transaction Id</td>
                        <td>Transaction time</td>
                        <td>Transaction amount</td>
                    </tr>
                    </thead>
                    <tbody>
                    {
                     this.state.payments &&   this.state.payments.map(
                            transaction =>
                            <tr key = {transaction.payment_id}>
                        <td>{transaction.paymentId}</td>
                        <td> {new Intl.DateTimeFormat('en-GB', {
                            month: 'long',
                            day: '2-digit',
                            year: 'numeric',
                            hour: 'numeric',
                            minute: 'numeric',
                            second: 'numeric'
                        }).format(new Date(transaction.createdAt))}</td>

                        <td>{transaction.amount}</td>
                        <td>{transaction.points}</td>
                        </tr>
                        )
                    }
                    </tbody>
                </table>
                <hr/>
                   <div className="App-points">
                    <span>Rewards :  </span>
                    <span>{this.state.points}</span>
                </div>

            </div>
        )
    }
}
export default Transactions;