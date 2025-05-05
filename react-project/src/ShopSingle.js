import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function ShopSingle({ handleCart, handleQty }) {

  const { id } = useParams();

  const [qty, setQty] = useState(1)

  // add to cart
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:500/products/${id}`)
      .then((res) => { return res.json() })
      .then((data) => {
        setProducts(data)
      })
  }, []);

  // const handleCart = (e) => {
  //   e.preventDefault();
  //   // console.log("called")
  // }

  // end add to cart

  return (
    <div>
      <section className="bg-light">
        <div className="container pb-5">
          <div className="row">
            <div className="col-lg-5 mt-5">
              {/* <div className="card mb-3">
                <img className="card-img img-fluid" src="assets/img/product_single_10.jpg" alt="Card image cap" id="product-detail" />
              </div> */}
              <div className="row">
                <div className="col-1 align-self-center">
                  {/* <a href="#multi-item-example" role="button" data-bs-slide="prev">
                    <i className="text-dark fas fa-chevron-left" />
                    <span className="sr-only">Previous</span>
                  </a> */}
                </div>

                <div id="multi-item-example" className="col-10 carousel slide carousel-multi-item" data-bs-ride="carousel">
                  <div className="carousel-inner product-links-wap" role="listbox">

                    <div className="carousel-item active">
                      <div className="row">
                        <div >
                            <img src={products.image} className="card-img img-fluid" ></img>
                        </div>
                        {/* <div className="col-4">
                          <a href="#">
                            <img className="card-img img-fluid" src="assets/img/product_single_02.jpg" alt="Product Image 2" />
                          </a>
                        </div>
                        <div className="col-4">
                          <a href="#">
                            <img className="card-img img-fluid" src="assets/img/product_single_03.jpg" alt="Product Image 3" />
                          </a>
                        </div> */}
                      </div>
                    </div>

                    <div className="carousel-item">
                      <div className="row">
                        <div className="col-4">
                          <a href="#">
                            <img className="card-img img-fluid" src="assets/img/product_single_04.jpg" alt="Product Image 4" />
                          </a>
                        </div>
                        <div className="col-4">
                          <a href="#">
                            <img className="card-img img-fluid" src="assets/img/product_single_05.jpg" alt="Product Image 5" />
                          </a>
                        </div>
                        <div className="col-4">
                          <a href="#">
                            <img className="card-img img-fluid" src="assets/img/product_single_06.jpg" alt="Product Image 6" />
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="carousel-item">
                      <div className="row">
                        <div className="col-4">
                          <a href="#">
                            <img className="card-img img-fluid" src="assets/img/product_single_07.jpg" alt="Product Image 7" />
                          </a>
                        </div>
                        <div className="col-4">
                          <a href="#">
                            <img className="card-img img-fluid" src="assets/img/product_single_08.jpg" alt="Product Image 8" />
                          </a>
                        </div>
                        <div className="col-4">
                          <a href="#">
                            <img className="card-img img-fluid" src="assets/img/product_single_09.jpg" alt="Product Image 9" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                <div className="col-1 align-self-center">
                  {/* <a href="#multi-item-example" role="button" data-bs-slide="next">
                    <i className="text-dark fas fa-chevron-right" />
                    <span className="sr-only">Next</span>
                  </a> */}
                </div>
              </div>
            </div>
            <div className="col-lg-7 mt-5">
              <div className="card">
                <div className="card-body">
                  <h1 className="h2">{products.name} </h1>
                  <p className="h3 py-2">$ {products.price}</p>
                  <p className="py-2">
                    <i className="fa fa-star text-warning" />
                    <i className="fa fa-star text-warning" />
                    <i className="fa fa-star text-warning" />
                    <i className="fa fa-star text-warning" />
                    <i className="fa fa-star text-secondary" />
                    <span className="list-inline-item text-dark">Rating 4.8 | 36 Comments</span>
                  </p>
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <h6>Brand:</h6>
                    </li>
                    <li className="list-inline-item">
                      <p className="text-muted"><strong>Easy Wear</strong></p>
                    </li>
                  </ul>
                  <h6>Description:</h6>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse. Donec condimentum elementum convallis. Nunc sed orci a diam ultrices aliquet interdum quis nulla.</p>
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <h6>Avaliable Color :</h6>
                    </li>
                    <li className="list-inline-item">
                      <p className="text-muted"><strong>White / Black</strong></p>
                    </li>
                  </ul>
                
                  <form >
                    <input type="hidden" name="product-title" defaultValue="Activewear" />
                    <div className="row">
                      <div className="col-auto">
                        <ul className="list-inline pb-3">
                          <li className="list-inline-item">Size :
                            <input type="hidden" name="product-size" id="product-size" defaultValue="S" />
                          </li>
                          <li className="list-inline-item"><span className="btn btn-success btn-size">S</span></li>
                          <li className="list-inline-item"><span className="btn btn-success btn-size">M</span></li>
                          <li className="list-inline-item"><span className="btn btn-success btn-size">L</span></li>
                          <li className="list-inline-item"><span className="btn btn-success btn-size">XL</span></li>
                        </ul>
                      </div>
                      <div className="col-auto">
                        <ul className="list-inline pb-3">
                          <li className="list-inline-item text-right">
                            Quantity
                            <input type="hidden" name="product-quanity" id="product-quanity" defaultValue={1} />
                          </li>
                          <li className="list-inline-item"><span onClick={() => { if (qty > 1) { setQty(qty - 1) } }} className="btn btn-success" id="btn-minus">-</span></li>
                          <li className="list-inline-item"><span className="badge bg-secondary" id="var-value">{qty}</span></li>
                          <li className="list-inline-item"><span onClick={() => { setQty(qty + 1) }} className="btn btn-success" id="btn-plus">+</span></li>
                        </ul>
                      </div>
                    </div>
                    <div className="row pb-3">
                      <div className="col d-grid">
                        <button type="submit" className="btn btn-success btn-lg" name="submit" value="buy">Buy</button>
                      </div>
                      <div className="col d-grid">
                        <button onClick={() => { handleCart(products); handleQty(qty) }} type="button" className="btn btn-success btn-lg" name="submit" value="addtocard">Add To Cart</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

  )
}

export default ShopSingle
