import React from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component{
    state = {count: 0}

 UNSAFE_componentWillMount = () => {
    console.log("------До  появления на экране------")
  }

  componentDidMount = () => {
    console.log("------После появления на экране------")
  }

  shouldComponentUpdate = (newProps, newState) =>{
        console.log(">>>>>>>>>>>>>", newProps, newState)

      if (this.state.count != newState.count){
          return true
      }else {
          return  false
      }

  }


    UNSAFE_componentWillUpdate = () => {
    console.log("------До  обновлния на экране------")
  }

   componentDidUpdate = () => {
    console.log("------После обновления на экране------")
  }

  onIncrease = () => {
        this.setState((oldState) =>{
            return{count:35 }
        })
  }

  onDecrease = () =>{
        this.setState((oldState) =>{
            return{count: oldState.count -1}
        })

  }

  render() {
    console.log("------Появление на экране------")

    return(
        <div>
          <p>{this.state.count}</p>
          <input type={"button"} value={"increment"} onClick={this.onIncrease}/>
          <input type={"button"} value={"decrement"} onClick={this.onDecrease}/>
        </div>
    )
  }
}


class App extends React.Component{
    state = {
        showCounter:true
    }

    onToggleCounter = () =>{
        this.setState((oldState) =>{
            return{
                showCounter: !oldState.showCounter
            }
        })
    }

    render() {
        const content = this.state.showCounter ? <Counter/>:null;
        return(
          <div>
              {content}
              <input type={"button"} value={"Toggle counter"} onClick={this.onToggleCounter}/>
          </div>
        )
    }

}


ReactDOM.render(
    <App />,
    document.getElementById('root')
)


