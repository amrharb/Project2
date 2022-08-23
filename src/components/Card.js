import React from 'react'
function Card(props) {
    let instructor="";
    for (let i = 0; i < props.detail.instructors.length; i++) {
      if(instructor.length)instructor+=',';
      instructor+=props.detail.instructors[i].name;
      }
  return (
    <figure>
        <img class="container-fluid" src={props.detail.image} alt="python course"></img>
        <figcaption>
            <span>
              <p><b>{props.detail.title}</b></p>
          </span>
        <p>{instructor}</p>
        <p>
            <span className="p-2">{props.detail.rating.toFixed(1)}</span>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star-half-stroke"></i>
        </p>
        <p><b>E£{props.detail.price}</b></p>
        </figcaption>
    </figure>
  )
}

export default Card