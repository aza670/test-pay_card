import {useNavigate} from "react-router-dom";
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Dropdown from "../Dropdown";
import styles from "./styles";
import backgroundCard from "../../assets/images/background.png";
import chipCard from "../../assets/images/chip.png";
import visa from "../../assets/images/visa.png";
import masterCard from "../../assets/images/mastercard.png";
import american from "../../assets/images/amex.png";
import discover from "../../assets/images/discover.png";

const CardForm = () => {
    const navigate = useNavigate();

    const {handleSubmit, values, handleChange, touched, errors, setFieldValue} = useFormik({
        initialValues: {
            cardNumber: '',
            cardName: '',
            month: '',
            cvv: '',
            year: '',
        },
        validationSchema: Yup.object({
            cardNumber: Yup.string()
                .max(16, 'Must be 16 characters')
                .required('Please enter card number'),
            cardName: Yup.string()
                .max(30, 'Must be 30 characters or less')
                .required('Please enter valid name'),
            month: Yup.string()
                .max(2, 'Must be 2 characters')
                .required('Required'),
            cvv: Yup.string()
                .max(3, 'Must be 3 characters')
                .required('Required'),
            year: Yup.string()
                .max(4, 'Must be 4 characters')
                .required('Required'),
        }),
        onSubmit: values => {
            axios.post('/api/add-card', values)
                .then(() => navigate('/'))
        },
    });

    const changesNumber = event => {
        let {value} = event.target
        value = value.replace(/[^0-9]/ig, '')
        setFieldValue('cardNumber', value)
    };
    const changesName = e => {
        let {value} = e.target
        value = value.replace(/[^A-Za-z- ]/ig, '')
        setFieldValue('cardName', value)
    };

    const itemsMonth = [
        {
            id: "month",
            key: "Month"
        },
        {
            id: "january",
            key: "01"
        },
        {
            id: "february",
            key: "02"
        },
        {
            id: "march",
            key: "03"
        },
        {
            id: "april",
            key: "04"
        },
        {
            id: "may",
            key: "05"
        },
        {
            id: "june",
            key: "06"
        },
        {
            id: "july",
            key: "07"
        },
        {
            id: "august",
            key: "08"
        },
        {
            id: "september",
            key: "09"
        },
        {
            id: "october",
            key: "10"
        },
        {
            id: "november",
            key: "11"
        },
        {
            id: "december",
            key: "12"
        }
    ];
    const itemsYear = [
        {
            id: "year",
            key: "Year"
        },
        {
            id: "2020",
            key: "2020"
        },
        {
            id: "2021",
            key: "2021"
        },
        {
            id: "2022",
            key: "2022"
        },
        {
            id: "2023",
            key: "2023"
        },
        {
            id: "2024",
            key: "2024"
        },
        {
            id: "2025",
            key: "2025"
        },
        {
            id: "2026",
            key: "2026"
        },
        {
            id: "2027",
            key: "2027"
        },
        {
            id: "2028",
            key: "2028"
        },
        {
            id: "2029",
            key: "2029"
        },
        {
            id: "2030",
            key: "2030"
        },
        {
            id: "2031",
            key: "2031"
        }
    ];
    const changesBank = () => {
        if (
            values.cardNumber.slice(0, 2) === 51 ||
            values.cardNumber.slice(0, 2) === 52 ||
            values.cardNumber.slice(0, 2) === 53 ||
            values.cardNumber.slice(0, 2) === 54 ||
            values.cardNumber.slice(0, 2) === 55
        ) {
            return (
              <img
                className="creditCard__front__dataCard__header--bank"
                src={ masterCard }
                alt="bank"
                style={ { height: "40px" } }
              />
            );
        } if (values.cardNumber.slice(0, 1) === 3) {
            return (
              <img
                className="creditCard__front__dataCard__header--bank"
                src={ american }
                alt="bank"
              />
            );
        } if (values.cardNumber.slice(0, 1) === 4) {
            return (
              <img
                className="creditCard__front__dataCard__header--bank"
                src={ visa }
                alt="bank"
              />
            );
        }
        return (
          <img
            className="creditCard__front__dataCard__header--bank"
            src={ discover }
            alt="bank"
          />
        );
    };
    const itemSelectMonth = props => {
        setFieldValue('month', props.key)
    };
    const itemSelectYear = props => {
        setFieldValue('year', props.key)
    };
    const cardFront = () => (
      <div className="creditCard__front">
        <img
          className="creditCard__front--background"
          src={ backgroundCard }
          alt="background"
        />
        <div className="creditCard__front__dataCard">
          <div className="creditCard__front__dataCard__header">
            <img
              className="creditCard__front__dataCard__header--chip"
              src={ chipCard }
              alt="chip"
            />
            {changesBank()}
          </div>
          <div className="creditCard__front__dataCard__body">
            <span>
              {values.cardNumber.slice(0, 4) === "" ? "####" : values.cardNumber.slice(0, 4)}
            </span>
            <span>{values.cardNumber.slice(4, 8) === "" ? "####" : "****"}</span>
            <span>{values.cardNumber.slice(8, 12) === "" ? "####" : "****"}</span>
            <span>
              {values.cardNumber.slice(12, 16) === ""
                ? "####"
                : values.cardNumber.slice(12, 16)}
            </span>
          </div>
          <div className="creditCard__front__dataCard__footer">
            <div className="creditCard__front__dataCard__footer--holder">
              <h1> Card Holder </h1>
              <span> {values.cardName} </span>
            </div>
            <div className="creditCard__front__dataCard__footer--expires">
              <h1> Expires </h1>
              <span>
                {values.month} / {values.year}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
    const cardBack = () => (
      <div className="creditCard__back">
        <img
          className="creditCard__back--background"
          src={ backgroundCard }
          alt="background"
        />
        <div className="creditCard__back__dataCard">
          <div className="creditCard__back__dataCard__header" />
          <div className="creditCard__back__dataCard__body">
            <h1>CVV</h1>
            <span>{values.cvv}</span>
          </div>
          <div className="creditCard__back__dataCard__footer" />
        </div>
      </div>
    );
    return (
      <div { ...styles() }>
        <div className="creditCard">{values.cvv === "" ? cardFront() : cardBack()}</div>
        <form className="cardForm" onSubmit={ handleSubmit }>
          <div className="cardForm__number">
            <span> Card Number </span>
            <input
              type="text"
              id="numberCard"
              name="cardNumber"
              onChange={ changesNumber }
              value={ values.cardNumber }
            />
            {touched.cardNumber && errors.cardNumber ? (
              <div className="cardForm__error">{errors.cardNumber}</div>
                       ) : null}
          </div>
          <div className="cardForm__name">
            <span> Card Name </span>
            <input
              type="text"
              maxLength="30"
              id="nameCard"
              name="cardName"
              onChange={ changesName }
              value={ values.cardName }
            />
            {touched.cardName && errors.cardName ? (
              <div className="cardForm__error">{errors.cardName}</div>
                       ) : null}
          </div>
          <div className="cardForm__expiration">
            <div className="cardForm__expiration__date">
              <span> Expiration date </span>
              <div className="cardForm__expiration__date--dropdown">
                <div>
                  <Dropdown
                    value="key"
                    textColor="#000000"
                    listItems={ itemsMonth }
                    onClick={ itemSelectMonth }
                    arrowColor="#000000"
                    listBgColor="#ffff"
                    itemHoverColor="#dee2e9"
                    defaultItem="month"
                  />
                  {touched.month && errors.month ? (
                    <div className="cardForm__error">{errors.month}</div>
                                   ) : null}
                </div>
                <div>
                  <Dropdown
                    value="key"
                    textColor="#000000"
                    listItems={ itemsYear }
                    onClick={ itemSelectYear }
                    arrowColor="#000000"
                    listBgColor="#ffff"
                    itemHoverColor="#dee2e9"
                    defaultItem="year"
                  />
                  {touched.year && errors.year ? (
                    <div className="cardForm__error">{errors.year}</div>
                                  ) : null}
                </div>
              </div>
            </div>
            <div className="cardForm__expiration--cvv">
              <span> CVV </span>
              <input
                type="number"
                maxLength="4"
                id="cvv"
                onChange={ handleChange }
                value={ values.cvv }
              />
              {touched.cvv && errors.cvv ? (
                <div className="cardForm__error">{errors.cvv}</div>
                           ) : null}
            </div>
          </div>
          <button className="cardForm--submit" type="submit">Submit</button>
        </form>
      </div>
    );
};

export default CardForm;
