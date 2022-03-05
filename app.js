const paraAdvice = document.querySelector("#advice");
const spanId = document.querySelector("#id");
const button = document.querySelector("button");

async function getAdvice() {
  try {
    let res = await fetch("https://api.adviceslip.com/advice");
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

async function postAdvice() {
  let data = await getAdvice();
  let {id, advice} = data.slip;
  spanId.textContent = id;
  paraAdvice.innerHTML = "&ldquo;" + advice + "&rdquo;";
}

postAdvice();

button.addEventListener("click", () => {
  postAdvice();
});
