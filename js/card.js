const cardTemplate = document.querySelector('#card').content.querySelector('.popup');
const mapContainer = document.querySelector('#map-canvas');
/*  {
    "author": {
      "avatar": "img/avatars/user02.png"
    },
    "offer": {
      "title": "Маленькая квартирка рядом с парком",
      "address": "102-0075 Tōkyō-to, Chiyoda-ku, Sanbanchō",
      "price": 77116,
      "type": "palace",
      "rooms": 1,
      "guests": 1,
      "checkin": "20:00",
      "checkout": "6:00",
      "photos": [
        "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/ashim-d-silva-zL_urJ_3bDM.jpg"
      ]
    },
    "location": {
      "lat": 35.65935818784681,
      "lng": 139.78305159450522
    }
  },*/
const renderPopup = (popupElement, offer) => {
  popupElement.querySelector('.popup__title').textContent = offer.offer.title;
  popupElement.querySelector('.popup__text--address').textContent = offer.offer.address;
  popupElement.querySelector('.popup__text--price').textContent = offer.offer.price;
  popupElement.querySelector('.popup__type').textContent = offer.offer.type;
  popupElement.querySelector('.popup__text--capacity').textContent = offer.offer.rooms;
  popupElement.querySelector('.popup__text--capacity').textContent = offer.offer.guests;
};

const showPopup = (data) => {
  const cardElement = cardTemplate.cloneNode(true);
  renderPopup(cardElement, data);
  mapContainer.append(cardElement);
};

const renderCard = (offer) => {
  showPopup(offer);
};

export{renderCard};
