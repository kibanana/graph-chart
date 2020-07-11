import React, { Component } from 'react';

class YearSelect extends Component<{ min: string, max: string, value: string }, { value: string }> {
  constructor(props: any) {
    super(props);
    this.state = { value: this.props.value };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: any) {
    this.setState({value: event.target.value});
    document.location.href = '/' + event.target.value;
  }

  render() {
    const optionArr = [];
    for (let i = Number(this.props.min); i <= Number(this.props.max); i++) {
      optionArr.push(<option value={i} key={i}>{i} 년도</option>)
    }
    if (optionArr.length <= 1) {
      return (
        <small><i>1년치 자료만 제공하는 통계입니다</i></small>
      )
    }
    return (
      <form>
        <label>
          통계 연도를 선택해주세요
          <br />
          <select value={this.state.value} onChange={this.handleChange}>
            {optionArr}
          </select>
        </label>
      </form>
    );
  }
}

export default YearSelect;