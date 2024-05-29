import React from "react";

// get 요청으로 백엔드로부터 객체 요소로 구성된 foodILike 배열을 받아왔다고 가정, 각 객체에는 id가 있음
const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg"
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg"
  },
  {
    id: 3,
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg"
  },
  {
    id: 4,
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg"
  }
];

function Food({ name, image }) {
  return (
    <div>
      <h3>I like {name}</h3>
      <img src={image} alt={name} />
    </div>
  )
}

function App() {
  return (
    <div>
      {foodILike.map(food => <Food key={food.id} name={food.name} image={food.image} />)}
    </div>
  )
}

export default App;