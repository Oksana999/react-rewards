import React from 'react';
import UserService from "../services/TransactionService";

class Transactions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            transactions: []
        }
    }

    componentDidMount() {
        UserService.getTransactions().then((response) =>{
            this.setState({transactions: response.data})
        });
    }
    render() {
        return (
            <div>
                <h1 className="text-center">Transactions List </h1>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <td>Transaction Id</td>
                        <td>Transaction time</td>
                        <td>Transaction amount</td>
                        <td>Rewards</td>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.transactions.map(
                            transaction =>
                            <tr key = {transaction.id}>
                        <td>{transaction.id}</td>
                        <td>{transaction.date}</td>
                        <td>{transaction.amount}</td>
                        <td>{transaction.points}</td>
                        </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Transactions;