const form = document.querySelector(".rank_form");
const ranks = document.querySelectorAll("input[name='rank']");
const rankValue= document.querySelector('.rank_value');
const thanksState = document.querySelector('.thanks');

let rateValue;

const removeDataState = () => {
  ranks.forEach(rank => {
    document.querySelector(`label[for="rank-${rank.value}"]`).removeAttribute("data-state");
  })
}


const setActive =  id => {
  removeDataState();
  document.querySelector(`label[for="rank-${id}"]`).setAttribute("data-state", "active");
}

const formHandler = e => {
  e.preventDefault();

  if(!rateValue) {
    alert('Please select a rating before submitting!');
    return;
  };

  thanksState.removeAttribute("hidden");
  form.classList.add("display-none");
}

const rankHandler = rank => {
  rank.addEventListener('change', () => {
    rateValue = rank.value;
    setActive(rateValue);
    rankValue.textContent = rateValue;
  });
} 


ranks.forEach(rankHandler);
form.addEventListener("submit", formHandler);


