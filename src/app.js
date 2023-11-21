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

  for (let i = 0; i < pronoun.length; i++) {
    for (let x = 0; x < adj.length; x++) {
      for (let j = 0; j < noun.length; j++) {
        for (let y = 0; y < domain.length; y++) {
          let list = document.createElement("li");
          list.className = "text-primary";
          list.innerText = `${pronoun[i]}${adj[x]}${noun[j]}${domain[y]}`;
          document.querySelector("#domains").appendChild(list);
        }
      }
    }
  }
};
