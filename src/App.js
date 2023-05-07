import React, { useState } from 'react';

function App() {

  // const brandName = document.querySelector('.brand-name')

  // function rotateText() {
  //   brandName.innerHTML = brandName.innerText.split("").map(
  //     (char, i) =>
  //     `<span style="transform: rotate(${i*20})deg">${char}</span>`
  //   ).join("")
  // }

  // rotateText()

  return (
    <div className="background">

      <div className="bg-row">

        <div className="bg-elem">
          <div className="circle">            
            <div className="icon"></div>
            <div className="brand-name">
              Simple Meal
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default App;
