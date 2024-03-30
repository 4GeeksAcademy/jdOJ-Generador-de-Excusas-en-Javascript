/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
  console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {
  let pronoun = ["The", "He", "She", "They", "We"];
  let subject = ["Dog", "Racoon", "Hachi", "Tioahe", "Cat"];
  let action = ["took my", "stole my", "yelled at my", "bit my", "hit me"];
  let possetion = ["cellphone", "homework", "cocacola", "dinner", "car"];
  let where = [
    "on the street",
    "in my work",
    "in the office",
    "in the subway",
    "in the mall"
  ];

  let proIndex = Math.floor(Math.random() * pronoun.length);
  let subIndex = Math.floor(Math.random() * subject.length);
  let actIndex = Math.floor(Math.random() * action.length);
  let possIndex = Math.floor(Math.random() * possetion.length);
  let wheIndex = Math.floor(Math.random() * where.length);

  return (
    pronoun[proIndex] +
    " " +
    subject[subIndex] +
    " " +
    action[actIndex] +
    " " +
    possetion[possIndex] +
    " " +
    where[wheIndex]
  );
};
