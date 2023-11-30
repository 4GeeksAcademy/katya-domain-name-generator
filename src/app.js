/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "my", "their", "his"];
  let adj = ["enormous", "gorgeous", "big", "little"];
  let noun = ["apple", "chair", "face", "road"];
  let domain = [".com", ".io", ".net", ".org"];

  document
    .querySelector("#generatorButton")
    .addEventListener("click", function(event) {
      pronoun.forEach(i => {
        adj.forEach(x => {
          noun.forEach(j => {
            domain.forEach(y => {
              let list = document.createElement("li");
              list.className = "text-primary";
              list.innerText = `${i}${x}${j}${y}`;
              document.querySelector("#domains").appendChild(list);
            });
          });
        });
      });
    });
};
