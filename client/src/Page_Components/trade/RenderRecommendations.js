import React, { Fragment } from 'react'

function RenderRecommendations(props) {
  // debugger
  // const { company, share_number, symbol, share_price } = props.holding
  const { companyName, latestPrice, changePercent, change, symbol } = props.holding;

  // debugger
  return (
    <Fragment>
      <div className="recommended-holdings">
        <div className="selected-holding card mt-3">
          <div className="card-head">
            <h2> {companyName}: {symbol}</h2>
            <div className="card-buttons">
              <button className="btn btn-danger">Buy</button>
              <button className="btn btn-danger">Sell</button>
            </div>
          </div>
          <hr />
          <div className="card-body">
            <div className="price">
              <strong>Current Price</strong>
              <p>{latestPrice}</p>
            </div>
            <div className="percent">
              <strong>Percent Change</strong>
              <p>{changePercent}</p>
            </div>
            <div className="change">
              <strong>Daily Gain/Loss</strong>
              <p>{change}</p>
            </div>
            <div className="shares-held">
              <strong>Shares Held</strong>
              <p>10</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default RenderRecommendations