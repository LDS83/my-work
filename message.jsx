class DisplayMessages extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            input: '',
            message: [],

        };

    }
    handleChange = (event ) => {
        this.setState({ input: event.target.value});
    };

    submitMessage = () => {
        const newMessage = this.state.input.trim();
        if(newMessage) {
            this.setState((prevSate) =>({
                messages: [...prevState.messages, newMessage],
                input: '',
            }));
        }
    };

    render() {
        return (
            <div>
                <h2>Type a new Message Here:</h2>
                <input
                type="text"
                value={this.state.input}
                onChange={this.handleChange}
                />
                <button onClick={this.submitMessage}>Add Message</button>
                <ul>
                    {this.state.messages.map((message, index)=>(
                        <li key={index}>{message}</li>
                    ))}
                </ul>
            </div>
        )
    }
}