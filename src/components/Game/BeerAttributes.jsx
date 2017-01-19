import React from 'react'

const BeerAttributes = ({ beer }) => (
  <ul className="beer_details">
    <li>
      <span>{beer.attr.country}</span>&nbsp;Country
    </li>
    <li>
      <span>{beer.attr.type}</span>&nbsp;Style
    </li>
    <li>
      <span>{beer.attr.color}</span>&nbsp;Colour
    </li>
    <li>
      <span>{beer.attr.volume ? beer.attr.volume.replace('cL', '') : ' '}</span>&nbsp;cl
    </li>
    <li>
      <span>{beer.attr.alc}</span>&nbsp;°Alcohol
    </li>
    <li>
      <span>
        {beer.price
          ? `${parseFloat(beer.price)
            .toFixed(2)
            .toString()
            .replace('.', ',')}`
          : ' '
        }
      </span>&nbsp;
      <span>&#163;</span>
    </li>
  </ul>
)

BeerAttributes.proptTypes = {
  beer: React.PropTypes.object
}

export default BeerAttributes
