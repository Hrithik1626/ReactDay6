import React from 'react'

function All({allcard}) {
  return <div>
  <div className="mt-4"></div>
  <div className="row row-cols-1 row-cols-md-3 g-4">
    {allcard.map((card, index) => (
      <div className="col" key={index}>
        <div className="card">
          <img src={card.image} className="card-img-top" alt={card.alt} />
          <div className="card-body">
            <h5 className="card-title">{card.title}</h5>
            <p className="card-text">{card.description}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
}

export default All