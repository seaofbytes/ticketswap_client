import React, { Component } from 'react'

export default class Pagination extends Component {
  render() {
    const { totalEvents, eventsPerPage } = this.props
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalEvents / eventsPerPage); i++) {
      pageNumbers.push(i)
    }
    console.log(totalEvents, eventsPerPage, pageNumbers, 'FROM PAGINATION')
    return (
      <div>
        <p style={{ color: 'white' }}>{'<<<'}</p>
        <nav>
          <ul className="pagination">
            {pageNumbers.map(number => (
              <li key={number} className="page-item">
                <a
                  onClick={() => this.props.paginate(number)}
                  className="page-link"
                >
                  {number}
                </a>
              </li>
            ))}
          </ul>
        </nav>{' '}
        <p style={{ color: 'white' }}>{'>>>'}</p>
      </div>
    )
  }
}
