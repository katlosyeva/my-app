import React from "react";
import { useParams } from "react-router-dom";
import OrderGuide from "../UI/product-page/OrderGuide";
import TablePrices from "../UI/shared/TablePrices";
import classes from "./ProductPage.module.css";
import { useLoaderData } from "react-router-dom";

const ProductPage = (props) => {
  const servicesList = useLoaderData();
  const params = useParams();
  let currentService = servicesList.filter(
    (service) => service.id === params.productId
  );

  if (currentService) {
    return (
      <div className="bg-secondary pb-5">
        <div className="container">
          <div className={`${classes.gap} row`}>
            <div className="col-sm-12 col-md-6">
              <div>
                <img
                  className={classes.img}
                  src={currentService[0].img}
                  alt="product_image"
                />
              </div>
            </div>

            <div className="col-sm-12 col-md-6">
              <h3 className="classes.title">{currentService[0].title}</h3>
              <p className="classes.description">
                {currentService[0].description}
              </p>
            </div>
          </div>

          <TablePrices
            table={currentService[0].table}
            firstcolName="Послуги"
            secondcolName="Вартість"
          />
        </div>
        <OrderGuide />
      </div>
    );
  }
};

export default ProductPage;

// export async function loader() {
//   const response = await fetch(
//     "https://new-project-fef7d-default-rtdb.firebaseio.com/servicesList.json"
//   );
//   return response
// }
