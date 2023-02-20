import { useEffect, useState } from "react";
import React from "react";
import Skeleton  from "react-loading-skeleton";

const Product = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        // console.log(filter);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);
  const Loading = () => {
    return <>
    <div className="col-md-3">
        <Skeleton height={350}/></div>
       < div className="col-md-3">
        <Skeleton height={350}/></div>
        < div className="col-md-3">
        <Skeleton height={350}/></div> 
        < div className="col-md-3">
        <Skeleton height={350}/></div>
        </>;
  };
  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button className="btn btn-outline-dark me-2" onClick={()=>setFilter(data)}>ALL</button>
          <button className="btn btn-outline-dark   me-2">LivingRoom</button>
          <button className="btn btn-outline-dark    me-2">Kitchen</button>
          <button className="btn btn-outline-dark   me-2">Bathroom</button>
          <button className="btn btn-outline-dark me-2">Garden</button>
          <button className="btn btn-outline-dark me-2">Eletrnic</button>
        </div>
        {filter.map((product)=> {
            return (
                <>
              
                <div className="col-md-3 mb-4">

                   <div className="card h-100 text-center p-4" key={product.id}>
                    <img src= {product.img} className=
                    "card-img-top" alt={product.title}
                    height="250px"/>
                    <div className="card-body">
                        <h5 className="card-tittle mb-0">
                            {product.title.substring(0,12)}...</h5>
                    <p className="card-text lead fw-blod">
                        ${product.price}
                    </p>
                    <a href="#" className="btn btn-outline-primary">
                        Buy Now
                        </a>
                    </div>
                   </div>
                   </div>
                    </>
            )
        })}
      </>
    );
  };
  return (
    <div>
      <div className="container my-5 py-5 ">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Lates Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center"></div>
        {loading ? <Loading /> : <ShowProducts />}
      </div>
    </div>
  );
};
export default Product;