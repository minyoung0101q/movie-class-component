import React from "react";
import PropTypes from "prop-types";

// get 요청으로 백엔드로부터 객체 요소로 구성된 foodILike 배열을 받아왔다고 가정, 각 객체에는 id가 있음
const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",

  },
  {
    id: 2,
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
    rating: 4.3
  },
  {
    id: 3,
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
    rating: 4.9
  },
  {
    id: 4,
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
    rating: 2
  }
];

function Food({ name, image, rating }) {
  return (
    <div>
      <h3>I like {name}</h3>
      <h4>{rating}/5.0</h4>
      <img src={image} alt={name} />
    </div>
  )
}

// name, image, rating 등의 prop 타입을 확인
Food.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number
}

function App() {
  return (
    <div>
      {foodILike.map(food => // map 함수는 무기명(익명) 콜백 함수를 호출
        <Food
          key={food.id}
          name={food.name}
          image={food.image}
          rating={food.rating}
        />)}
    </div>
  )
}

export default App;