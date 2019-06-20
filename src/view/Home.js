import React, { Component } from 'react';
import './App.css';
import { actionTypes } from 'src/container/action';
import { connect } from 'react-redux';  // 新增 
import { Button } from 'antd';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleBtnClick = this.handleBtnClick.bind(this);
  }
  handleBtnClick() {
    const { dispatch } = this.props;  // 新增
    const action = {
      type: actionTypes.ADD_TEST,
      num: this.props.num
    };
    dispatch(action);
  }
  componentDidMount() {
    console.log(this)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p className="let-App-link">
            react + redux + redux-thunk + react-router + antd + babel-plugin-import 脚手架
          </p>
          <div>
            <Button onClick={this.handleBtnClick} type="primary">redux自增</Button>
            <h1 style={{ color: 'white'}}>{ this.props.num }</h1>
          </div>
        </header>
      </div>
    );
  }
}


// 新增
const mapStateToProps = (state) => {
  return {
    num: state.num
  };
}; 
// 修改
export default connect(mapStateToProps)(App);
