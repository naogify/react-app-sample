import React from 'react'
import PropTypes from 'prop-types'

export class App extends React.Component {
  state = { year: 2018 }

  proceedYear = () => this.setState({ year: this.state.year + 1 })

  /**
   * render
   * @return {ReactElement|null|false} render a React element.
   */
  render() {
    const { year } = this.state
    return (
      <div>
        <h1>{year + ' 年のカレンダーです'}</h1>
        <Calendar year={year} /> // `year` props が渡されている
        <button onClick={this.proceedYear}>{'次の年'}</button>
      </div>
    )
  }
}

class Calendar extends React.Component {
  /**
   * render
   * @return {ReactElement|null|false} render a React element.
   */
  render() {
    const year = this.props.year
    return <table>{'カレンダーの中身:' + year + '月'}</table>
  }
}

Calendar.propTypes = {
  year: PropTypes.number.isRequired,
}


const Calendar = props => {
  const year = props.year
  return <table>{'カレンダーの中身:' + year + '月'}</table>
}
*�