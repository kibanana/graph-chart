import React, { Component } from 'react';
import { InputLabel, Select, MenuItem } from '@material-ui/core';

class YearSelect extends Component<{ min: string, max: string, value: string }, { value: string }> {
  constructor(props: any) {
    super(props);
    this.state = { value: this.props.value };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: any) {
    this.setState({ value: event.target.value });
    document.location.href = '/education/' + event.target.value;
  }

  render() {
    const optionArr = [];
    for (let i = Number(this.props.min); i <= Number(this.props.max); i++) {
      optionArr.push(<MenuItem value={i} key={i}>{i} 년도</MenuItem>)
    }
    if (optionArr.length <= 1) {
      return (
        <small><i>1년치 자료만 제공하는 통계입니다</i></small>
      )
    }
    return (
      <>
        <InputLabel id="year">통계 연도를 선택해주세요</InputLabel>
        <Select labelId="year" id="select" value={this.state.value} onChange={this.handleChange}>
          {optionArr}
        </Select>
      </>
    );
  }
}

export default YearSelect;