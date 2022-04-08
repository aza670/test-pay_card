import React, {useEffect, useState} from 'react';
import axios from 'axios'
import CardListItem from "../CardListItem/CardListItem";
import './style.css'

const CardsList = () => {

    const [cards, setCards] = useState([])

    useEffect(() => {
        axios('/api/get-cards')
            .then(({data}) => setCards(data))
    }, [])

    return (
      <div className="CardsList">
        {
                cards.map((item) =>
                  <CardListItem key={ item._id } item={ item } />
                )
            }
      </div>
    );
};

export default CardsList;