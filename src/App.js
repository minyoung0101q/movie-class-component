import React from "react";

function Food(props) { // 구조 분해 할당 : 객체나 배열의 속성을 쉽게 추출
  console.log(props);
  return (
    <div>
      <h3>I like {props.favorite}</h3>
      <h3>{props.good}</h3>
    </div>
  )
}

function App() {
  return (
    <div>
      <h1>I love you.</h1>
      <Food favorite="kimchi" good="you" />
      <Food favorite="ramen" />
      <Food favorite="smagiopsal" />
      <Food favorite="chukumi" />
    </div>
  )
}

export default App;