import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

function Shop() {

  const [products, setProducts] = useState("");
  const { id } = useParams();

  useEffect(() => {
    fetch("http://localhost:500/products")
      .then((res) => { return res.json() })
      .then((data) => {
        // console.log(data)
        setProducts(data)
      })
  }, []);

  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-3">
            <h1 className="h2 pb-4">Categories</h1>
            <ul className="list-unstyled templatemo-accordion">
              <li className="pb-3">
                <a className="collapsed d-flex justify-content-between h3 text-decoration-none" href="#">
                  Gender
                  <i className="fa fa-fw fa-chevron-circle-down mt-1" />
                </a>
                <ul className="collapse show list-unstyled pl-3">
                  <li><a className="text-decoration-none" href="#">Men</a></li>
                  <li><a className="text-decoration-none" href="#">Women</a></li>
                </ul>
              </li>
              <li className="pb-3">
                <a className="collapsed d-flex justify-content-between h3 text-decoration-none" href="#">
                  Sale
                  <i className="pull-right fa fa-fw fa-chevron-circle-down mt-1" />
                </a>
                <ul id="collapseTwo" className="collapse list-unstyled pl-3">
                  <li><a className="text-decoration-none" href="#">Sport</a></li>
                  <li><a className="text-decoration-none" href="#">Luxury</a></li>
                </ul>
              </li>
              <li className="pb-3">
                <a className="collapsed d-flex justify-content-between h3 text-decoration-none" href="#">
                  Product
                  <i className="pull-right fa fa-fw fa-chevron-circle-down mt-1" />
                </a>
                <ul id="collapseThree" className="collapse list-unstyled pl-3">
                  <li><a className="text-decoration-none" href="#">Bag</a></li>
                  <li><a className="text-decoration-none" href="#">Sweather</a></li>
                  <li><a className="text-decoration-none" href="#">Sunglass</a></li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="col-lg-9">
            <div className="row">
              <div className="col-md-6">
                <ul className="list-inline shop-top-menu pb-3 pt-1">
                  <li className="list-inline-item">
                    <a className="h3 text-dark text-decoration-none mr-3" href="#">All</a>
                  </li>
                  <li className="list-inline-item">
                    <a className="h3 text-dark text-decoration-none mr-3" href="#">Men's</a>
                  </li>
                  <li className="list-inline-item">
                    <a className="h3 text-dark text-decoration-none" href="#">Women's</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 pb-4">
                <div className="d-flex">
                  <select className="form-control">
                    <option>Featured</option>
                    <option>A to Z</option>
                    <option>Item</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row">
              {products && products.map((product) => (
                <div key={product.id} className="col-md-4">
                  <div className="card mb-4 product-wap rounded-0">
                    <div className="card rounded-0">
                      <img className="card-img rounded-0 img-fluid" src={product.image} alt={product.name} />
                      <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                        <ul className="list-unstyled">
                          <li><a className="btn btn-success text-white" href="shop-single.html"><i className="far fa-heart" /></a></li>
                          <li><Link className="btn btn-success text-white mt-2" to={'/shopsingle/' + product.id}><i className="far fa-eye" /></Link></li>
                          <li><a className="btn btn-success text-white mt-2" href="shop-single.html"><i className="fas fa-cart-plus" /></a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="card-body">
                      <a href="shop-single.html" className="h3 text-decoration-none">{product.name}</a>
                      <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                        <li className='d-block m-auto'>{product.sizes.join(' / ')}</li>
                        <li className="pt-2">
                          <span className="product-color-dot color-dot-red float-left rounded-circle ml-1" />
                          <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1" />
                          <span className="product-color-dot color-dot-black float-left rounded-circle ml-1" />
                          <span className="product-color-dot color-dot-light float-left rounded-circle ml-1" />
                          <span className="product-color-dot color-dot-green float-left rounded-circle ml-1" />
                        </li>
                      </ul>
                      <ul className="list-unstyled d-flex justify-content-center mb-1">
                        <li>
                          <i className="text-warning fa fa-star" />
                          <i className="text-warning fa fa-star" />
                          <i className="text-warning fa fa-star" />
                          <i className="text-muted fa fa-star" />
                          <i className="text-muted fa fa-star" />
                        </li>
                      </ul>
                      <p className="text-center mb-0">$ {product.price}</p>
                      {/* <Link to={'/shopsingle/' + product.id }>Go to product</Link> */}
                    </div>
                  </div>
                </div>
              ))}

              {/* <div className="col-md-4">
            <div className="card mb-4 product-wap rounded-0">
              <div className="card rounded-0">
                <img className="card-img rounded-0 img-fluid" src="assets/img/shop_01.jpg" />
                <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                  <ul className="list-unstyled">
                    <li><a className="btn btn-success text-white" href="shop-single.html"><i className="far fa-heart" /></a></li>
                    <li><a className="btn btn-success text-white mt-2" href="shop-single.html"><i className="far fa-eye" /></a></li>
                    <li><a className="btn btn-success text-white mt-2" href="shop-single.html"><i className="fas fa-cart-plus" /></a></li>
                  </ul>
                </div>
              </div>
              <div className="card-body">
                <a href="shop-single.html" className="h3 text-decoration-none">Oupidatat non</a>
                <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                  <li>M/L/X/XL</li>
                  <li className="pt-2">
                    <span className="product-color-dot color-dot-red float-left rounded-circle ml-1" />
                    <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1" />
                    <span className="product-color-dot color-dot-black float-left rounded-circle ml-1" />
                    <span className="product-color-dot color-dot-light float-left rounded-circle ml-1" />
                    <span className="product-color-dot color-dot-green float-left rounded-circle ml-1" />
                  </li>
                </ul>
                <ul className="list-unstyled d-flex justify-content-center mb-1">
                  <li>
                    <i className="text-warning fa fa-star" />
                    <i className="text-warning fa fa-star" />
                    <i className="text-warning fa fa-star" />
                    <i className="text-muted fa fa-star" />
                    <i className="text-muted fa fa-star" />
                  </li>
                </ul>
                <p className="text-center mb-0">$250.00</p>
              </div>
            </div>
          </div> */}

            </div>
            <div div="row">
              <ul className="pagination pagination-lg justify-content-end">
                <li className="page-item disabled">
                  <a className="page-link active rounded-0 mr-3 shadow-sm border-top-0 border-left-0" href="#" tabIndex={-1}>1</a>
                </li>
                <li className="page-item">
                  <a className="page-link rounded-0 mr-3 shadow-sm border-top-0 border-left-0 text-dark" href="#">2</a>
                </li>
                <li className="page-item">
                  <a className="page-link rounded-0 shadow-sm border-top-0 border-left-0 text-dark" href="#">3</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-light py-5">
        <div className="container my-4">
          <div className="row text-center py-3">
            <div className="col-lg-6 m-auto">
              <h1 className="h1">Our Brands</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                Lorem ipsum dolor sit amet.
              </p>
            </div>
            <div className="col-lg-9 m-auto tempaltemo-carousel">
              <div className="row d-flex flex-row">
                <div className="col-1 align-self-center">
                  <a className="h1" href="#multi-item-example" role="button" data-bs-slide="prev">
                    <i className="text-light fas fa-chevron-left" />
                  </a>
                </div>
                <div className="col">
                  <div className="carousel slide carousel-multi-item pt-2 pt-md-0" id="multi-item-example" data-bs-ride="carousel">
                    <div className="carousel-inner product-links-wap" role="listbox">
                      <div className="carousel-item1 active">
                        <div className="row">
                          <div className="col-3 p-md-5">
                            <a href="#"><img className="img-fluid brand-img" src="assets/img/brand_01.png" alt="Brand Logo" /></a>
                          </div>
                          <div className="col-3 p-md-5">
                            <a href="#"><img className="img-fluid brand-img" src="assets/img/brand_02.png" alt="Brand Logo" /></a>
                          </div>
                          <div className="col-3 p-md-5">
                            <a href="#"><img className="img-fluid brand-img" src="assets/img/brand_03.png" alt="Brand Logo" /></a>
                          </div>
                          <div className="col-3 p-md-5">
                            <a href="#"><img className="img-fluid brand-img" src="assets/img/brand_04.png" alt="Brand Logo" /></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-1 align-self-center">
                  <a className="h1" href="#multi-item-example" role="button" data-bs-slide="next">
                    <i className="text-light fas fa-chevron-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>


  )
}

export default Shop
