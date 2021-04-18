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
                            <tr key = {transaction.payment_id}>
                        <td>{transaction.payment_id}</td>
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
            </div>
        )
    }
}
export default Transactions;