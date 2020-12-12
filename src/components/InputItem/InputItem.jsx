import React, {Component} from 'react';
import style from './InputItem.module.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

export default class InputItem extends Component {

  static propTypes = {
    addItem: PropTypes.func.isRequired
  };

  state = {
    inputValue: '',
    error: false
  };

  changeInputValue = (e) => {
    const inputValue = e.target.value.toUpperCase()
    this.setState({
      inputValue
    });
  };

  formSubmit = (e) => {
    e.preventDefault();

    if (this.state.inputValue === '') {
      this.setState({
        error: true
      });
    }
    else {
      this.props.addItem(this.state.inputValue);
      this.setState({
        inputValue: '',
        error: false
      });
    }
  };

  render() {
    const {inputValue, error} = this.state;
    const errorText = error ? 'ERROR' : 'You can add new task here';
    const helpText = error ? 'This field cannot be empty.' : ' ';

    return (
      <form className={style.wrap}
            onSubmit={this.formSubmit}>
        <TextField
          value={inputValue}
          error = {error}
          helperText={helpText}
          label={errorText}
          onChange={this.changeInputValue}
          fullWidth
          variant="outlined"
        />
        <Button type='submit' variant="contained" color="primary">
          Add
        </Button>
      </form>
    );
  };
};
