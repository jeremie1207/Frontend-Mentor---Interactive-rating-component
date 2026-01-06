import { ranks, thanksState, form, rankValue } from "../constants/constant.js";

let rateValue;

export const removeDataState = () => {
  ranks.forEach(rank => {
    document.querySelector(`label[for="rank-${rank.value}"]`).removeAttribute("data-state");
  })
}


export const setActive =  id => {
  removeDataState();
  document.querySelector(`label[for="rank-${id}"]`).setAttribute("data-state", "active");
}

export const formHandler = e => {
  e.preventDefault();

  if(!rateValue) {
    alert('Please select a rating before submitting!');
    return;
  };

  thanksState.removeAttribute("hidden");
  form.classList.add("display-none");
}

export const rankHandler = rank => {
  rank.addEventListener('change', () => {
    rateValue = rank.value;
    setActive(rateValue);
    rankValue.textContent = rateValue;
  });
} 
