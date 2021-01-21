import React, { useEffect, useState } from 'react'
// import { getHoldings } from '../http-utilities/instructionsUtilities'
import { Link } from 'react-router-dom'
import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap'

function RenderMostActiveStocks(props) {
  const [shares, setShares] = useState(0);
  const [holdings, setHoldings] = useState([]);
  const [holdingStyleColor, setHoldingStyleColor] = useState('');
  const [positiveSign, setPositiveSign] = useState(false);

  useEffect(() => {

    // getHoldings()
    //   .then(holdingsData => setHoldings(holdingsData))
    //   .catch(err => console.error('error get holdings', err));

    const isHoldingNegativeOrPositive = () => {
      if (String(changePercent).charAt(0) === '-') {
        setHoldingStyleColor('red');
        setPositiveSign(false)
      } else {
        setHoldingStyleColor('green')
        setPositiveSign('+')
      }
    }

    isHoldingNegativeOrPositive();
  }, []);

  // useEffect(() => {
  //   const compareSelectedHoldingToExistingList = () => {
  //     const holdingExist = holdings.find(holding => holding.symbol == props.recommendedHolding.symbol);
  //     if (holdingExist) {
  //       setShares(holdingExist.shares);
  //     }
  //   }

  //   compareSelectedHoldingToExistingList();
  // }, [holdings]);

  const { companyName, latestPrice, changePercent, change, symbol } = props.mostActiveStock;

  return (

    // <div className="recommended-holding">
    <div className="active-container card mt-3">
      <Card style={{ width: '18rem' }}>
        <Card.Body className="active-header p-0">
          <Card.Title className="border-0 m-0 active-title text-center"> {companyName}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem><strong>Symbol: </strong>{symbol}</ListGroupItem>
          <ListGroupItem><strong>Price: </strong><span className={holdingStyleColor}>${latestPrice.toFixed(2)}</span> </ListGroupItem>
          <ListGroupItem><strong>Percent Change: </strong><span className={holdingStyleColor}>{positiveSign}{changePercent.toFixed(3)}%</span> </ListGroupItem>
          <ListGroupItem><strong>Daily Gain/Loss: </strong><span className={holdingStyleColor}>{positiveSign}${change}</span></ListGroupItem>
        </ListGroup>
        <Card.Body className="p-1 d-inline text-center">
          <Link to={{
            pathname: "/main",
            search: `?symbol=${symbol}`
          }}>
            <Button variant="outline-primary w-100" size="md" >Click to Trade {symbol}</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
    // </div>
  )
}


export default RenderMostActiveStocks
