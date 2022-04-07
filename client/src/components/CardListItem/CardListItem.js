import React from 'react';
import './style.css'
import masterCard from "../../assets/images/mastercard.png";
import american from "../../assets/images/amex.png";
import visa from "../../assets/images/visa.png";
import discover from "../../assets/images/discover.png";

const CardsListItem = ({item: {cardNumber, cardName, month, year}}) => {
    console.log( cardNumber.slice(0, 2))
    const changesBank = () => {
        if (
            cardNumber.slice(0, 2) === '51' ||
            cardNumber.slice(0, 2) === '52' ||
            cardNumber.slice(0, 2) === '53' ||
            cardNumber.slice(0, 2) === '54' ||
            cardNumber.slice(0, 2) === '55'
        ) {
            return (
                <img
                    className="creditCard__front__dataCard__header--bank"
                    src={masterCard}
                    alt="bank"
                    style={{ height: "40px" }}
                />
            );
        } else if (cardNumber.slice(0, 1) === '3') {
            return (
                <img
                    className="creditCard__front__dataCard__header--bank"
                    src={american}
                    alt="bank"
                />
            );
        } else if (cardNumber.slice(0, 1) === '4') {
            return (
                <img
                    className="creditCard__front__dataCard__header--bank"
                    src={visa}
                    alt="bank"
                />
            );
        }
        return (
            <img
                className="creditCard__front__dataCard__header--bank"
                src={discover}
                alt="bank"
            />
        );
    };
    return (
        <div className="CardListItem">
            <ul>
                <li>
                    <span>
            {cardNumber.slice(0, 4)}
          </span>
                    <span>****</span>
                    <span>****</span>
                    <span>
            {cardNumber.slice(12, 16)}
          </span>
                </li>
                <li>Username: {cardName}</li>
                <li>Month: {month}</li>
                <li>Year: {year}</li>
                <li>Bank holder: {changesBank()}</li>
            </ul>
        </div>
    );
};

export default CardsListItem;