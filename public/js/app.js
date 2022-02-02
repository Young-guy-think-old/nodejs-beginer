console.log("Hello log");

const handleFetchWeatherByAddress = (address) => {
  message1.textContent = "Loading...";
  message2.textContent = "";
  fetch(`/weather?address=${address}`).then((response) => {
    response?.json()?.then((data) => {
      message1.textContent = "";
      if (data.error) {
        return (message2.textContent = data.error);
      }
      message2.textContent = `Location: ${data.location}`;
      return (message2.textContent = `Forecast: ${data.forecast}`);
    });
  });
};

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const message1 = document.querySelector("#message-1");
const message2 = document.querySelector("#message-2");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = search.value;
  handleFetchWeatherByAddress(location);
});
