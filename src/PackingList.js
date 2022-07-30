import { Component } from 'react';


export class PackingList extends Component {
    state = {
        userInput: "",
        yourList: []
    }
    onChangeEvent(e) {
        this.setState({userInput: e});
    }
    addItem(input) {
        if (input === "") {
            alert (".. Oops! enter your item")
        }
        else {
            let listArray = this.state.yourList;
            listArray.push(input);
            this.setState({yourList: listArray, userInput: ""})
            console.log(listArray)
        }
    }
    deleteItem() {
        let listArray = this.state.yourList;
        listArray = [];
        this.setState({yourList: listArray})
    }
    crossedWord(e) {
        const li = e.target;
        li.classList.toggle("crossed");
    }
    render() {
        return(
                <div className='box'>
                    <div>
                        <input type="text"
                        placeholder='Enter your items'
                        onChange={(e) => {this.onChangeEvent(e.target.value)}}
                        value={this.state.userInput}/>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <div>
                                <button onClick={() => this.addItem(this.state.userInput)} className="btn add">Add</button>
                            </div>
                            <div>
                                <button onClick={() => this.deleteItem(this.state.userInput)} className="btn delete">Delete</button>
                            </div>
                        </div>
                        <div className='col'>
                            <ul>
                                {this.state.yourList.map((item, index) => (
                                    <li onClick={this.crossedWord} key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
        )
    }
}