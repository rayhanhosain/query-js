const queryAnsDivs = document.querySelectorAll(".query-ans-div");

queryAnsDivs.forEach((queryAnsDiv) => {
  let queryTxtAndSignDiv = queryAnsDiv.querySelector(".query-txt-and-sign");
  let ansDiv = queryAnsDiv.querySelector(".ans");
  let plusMinusDiv = queryAnsDiv.querySelector(".plus-minus");

  queryTxtAndSignDiv.addEventListener("click", () => forClick());

  // plusMinusDiv.addEventListener("click", () => forClick());

  function forClick () {
      if (plusMinusDiv.innerText === "+") {
        plusMinusDiv.innerText = "-";
        ansDiv.classList.add('ans-diplay')
      } else {
        plusMinusDiv.innerText = "+";
        ansDiv.classList.remove('ans-diplay')
      }
  }
});


