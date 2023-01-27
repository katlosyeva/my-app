import classes from "./Order.module.css";

import PhotoForm from "../reusable/PhotoForm";
import { useState, useEffect } from "react";
import { useRef } from "react";
import LoadingSpinner from "../UI/Spinner";
import OrderGeneralInfoHeader from "../reusable/OrderGeneralInfoHeader";
// import { click } from "@testing-library/user-event/dist/click";
const itemPrice = {
  "9X13": 5,
  "10X15": 8,
};
const Order = (props) => {
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(0);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef();
  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "katelosyeva");
    setLoading(true);
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dyd1c5tkf/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    setImage(
      image
        ? [
            ...image,
            {
              id: file.secure_url,
              value: false,
              format: "9X13",
              paper: "Матовий",
              ramka: "Без рамки",
              number: 1,
              // kadruvannya: "В обріз",
            },
          ]
        : [
            {
              id: file.secure_url,
              value: false,
              format: "9X13",
              paper: "Матовий",
              ramka: "Без рамки",
              number: 1,
              // kadruvannya: "В обріз",
            },
          ]
    );

    setPrice(price + 5);
    setLoading(false);
  };
  const onBtnClick = () => {
    fileInputRef.current.click();
  };

  const changeCheckboxStateHandler = (event) => {
    setImage(
      image.map((object) => {
        const { value } = object;
        if (object.id === event.target.id) {
          return { ...object, value: !value };
        } else {
          return { ...object };
        }
      })
    );
  };

  const setImageProperties = (properties) => {
    setImage(
      image.map((object) => {
        if (object.value === true) {
          return {
            ...object,
            format: properties.format,
            paper: properties.paper,
            ramka: properties.ramka,
            number: properties.number,
            // kadruvannya: properties.kadruvannya,
          };
        } else {
          return { ...object };
        }
      })
    );
    calculatePrice();
  };

  const imagesDeleteHandler = () => {
    setImage("");
    setPrice(0);
  };

  const calculatePrice = () => {
    setPrice(() => {
      const sum = image.reduce((accum, currentValue) => {
        console.log("hello", accum, currentValue);

        return accum + itemPrice[currentValue.format] * currentValue.number;
      }, 0);

      return sum;
    });
  };
  useEffect(() => {
    if (image && image.length) {
      calculatePrice();
    }
  }, [image]);

  const renderTable = () => {
    let template = [];
    for (let key in itemPrice) {
      template.push(
        <div key={key} class="row gx-5 border-info justify-content-center">
          <div class="col-6">
            <div className={classes.border}>{key}</div>
          </div>
          <div class="col-3">
            <div className={classes.border}>{itemPrice[key]}</div>
          </div>
        </div>
      );
    }
    return template;
  };

  return (
    <div>
      <OrderGeneralInfoHeader
        onPressingDelete={imagesDeleteHandler}
        number={image.length}
        orderPrice={price}
        buttonState={image}
      />
      {image ? (
        <PhotoForm onChoosingProperties={setImageProperties}></PhotoForm>
      ) : (
        ""
      )}
      <div className={classes.photoContainer}>
        <div class="p-2">
          {image ? (
            loading ? (
              <LoadingSpinner />
            ) : (
              image.map((imageObject) => (
                <div className={classes.imageContainer}>
                  <div>
                    <input
                      class="align-baseline form-check-input"
                      type="checkbox"
                      value={imageObject.value}
                      id={imageObject.id}
                      onChange={changeCheckboxStateHandler}
                    />
                    <span class="pe-1">{imageObject.format}</span>
                    <span class="pe-1">{imageObject.paper}</span>
                  </div>

                  <img
                    src={imageObject.id}
                    key={imageObject.id}
                    style={{ width: "150px", height: "100px" }}
                  />

                  <div>
                    <span class="pe-1">{imageObject.ramka}</span>
                    <span class="pe-1">{imageObject.number}шт.</span>
                    {/* <span class="pe-1">{imageObject.kadruvannya}</span> */}
                  </div>
                </div>
              ))
            )
          ) : (
            <span></span>
          )}

          <img
            className={classes.downloadImage}
            src="/assets/add image.png"
            onClick={onBtnClick}
          />

          <input
            type="file"
            name="file"
            placeholder="Upload"
            onChangeCapture={uploadImage}
            ref={fileInputRef}
            style={{ display: "none" }}
          />
        </div>
      </div>
      <div class="container">
        <div class="border-top border-info border-bottom">
          <div class="row gx-5  justify-content-center">
            <div class="col-6">
              <div className={classes.heading}>Формат</div>
            </div>

            <div class="col-3">
              <div className={classes.heading}>Ціна за шт.</div>
            </div>
          </div>

          <div>{renderTable()}</div>
        </div>
      </div>
    </div>
  );
};

export default Order;
