import React, { useEffect, useState } from 'react'

// let cartvalue = JSON.parse(localStorage.getItem("product")) ?? [];

function Cart() {

  const [cartvalue, setCartValue] = useState([]);
  const [totalQty, setTotalQty] = useState(0);

  useEffect(() => {
    setCartValue(JSON.parse(localStorage.getItem("product")) ?? [])
  }, [])
  return (
    <div className='container mt-5'>
      <div className='row justify-content-center'>
        {cartvalue.map((value) => {
          return (
            <div className='col-xl-6'>
              <div className="card mb-3" key={value.id}>
                <div className="row">
                  <div className="col-md-4">
                    <img src={value.image} className="img-fluid rounded-start h-100 w-100" alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{value.name}</h5>
                      <p >$ {value.price}</p>
                      <p className="card-text">{value.size}</p>
                      <p className="card-text">{value.qty}</p>
                      <p className="card-text">This is a wider card content. This content is a little bit longer.</p>
                      <p className="card-text">Total: $ {Number(value.price) * Number(value.qty)}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}

        <h3>Subtotal: $ {cartvalue.reduce((acc, item) => acc + Number(item.price) * Number(item.qty), 0)}</h3>

      </div>
    </div>
  )
}

export default Cart
