const calculate = document.querySelector("#calculate");
const amount = document.getElementById("amount");
const firstOption = document.getElementById("firstCurrencyOption");
const secondOption = document.getElementById("secondCurrencyOption");
const result = document.getElementById("result");

runEvent();
function runEvent() {
    window.addEventListener("DOMContentLoaded",()=>{
        currentUSD()
        currentEUR()
        currentGBP()
        currentBTC()
        currentGOLD()
        currentSILVER()
    })
  calculate.addEventListener("click", exchange);
}

async function exchange() {
  const firstOptionValue =firstOption.value
  const secondOptionValue =secondOption.value

  const key = "dbe8c8af150a7dc4876ac3e1";
  const url = `https://v6.exchangerate-api.com/v6/${key}/latest/${firstOptionValue}`;

  try {
    const data = await (await fetch(url)).json();
    const amountNumber = Number(amount.value);
    const exchangeAamount =
      amountNumber * data.conversion_rates[secondOptionValue];
    result.value = exchangeAamount.toFixed(2);
    console.log(exchangeAamount);
  } catch (error) {
    console.log("Hata Oluştu", error);
  }
}

async function currentUSD() {
  const key = "dbe8c8af150a7dc4876ac3e1";
  const url = `https://v6.exchangerate-api.com/v6/${key}/latest/USD`;

  try {
    const data = await (await fetch(url)).json();
    const tryRate = data.conversion_rates.TRY;
    const usd = document.getElementById("live-priceUSD");
    usd.textContent = `₺${tryRate}`;
  } catch (error) {
    console.log("Hata", error);
  }
}

async function currentEUR() {
  const key = "dbe8c8af150a7dc4876ac3e1";
  const url = `https://v6.exchangerate-api.com/v6/${key}/latest/EUR`;

  try {
    const data = await (await fetch(url)).json();
    const tryRate = data.conversion_rates.TRY;
    const eur = document.getElementById("live-priceEUR");
    eur.textContent = `₺${tryRate}`;
  } catch (error) {
    console.log("Hata", error);
  }
}

async function currentGBP() {
  const key = "dbe8c8af150a7dc4876ac3e1";
  const url = `https://v6.exchangerate-api.com/v6/${key}/latest/GBP`;

  try {
    const data = await (await fetch(url)).json();
    const tryRate = data.conversion_rates.TRY;
    const gbp = document.getElementById("live-priceGBP");
    gbp.textContent = `₺${tryRate}`;
  } catch (error) {
    console.log("Hata", error);
  }
}
async function currentBTC() {
  const url = `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd`;

  try {
    const data = await (await fetch(url)).json();
    tryRate = data.bitcoin.usd;
    btc = document.getElementById("live-priceBTC");
    btc.textContent = `$${tryRate.toLocaleString()}`;
  } catch (error) {
    console.log("Hata", error);
  }
}
async function currentGOLD() {
  const url = `https://api.coingecko.com/api/v3/simple/price?ids=gram-gold&vs_currencies=try`;

  try {
    const data = await (await fetch(url)).json();
    tryRate = data["gram-gold"].try;
    gold = document.getElementById("live-priceGOLD");
    gold.textContent = `₺${tryRate}`;
  } catch (error) {
    console.log("Hata", error);
  }
}
async function currentSILVER() {
  const url = `https://api.coingecko.com/api/v3/simple/price?ids=gram-silver&vs_currencies=try`;

  try {
    const data = await (await fetch(url)).json();

    tryRate = data["gram-silver"].try;
    silver = document.getElementById("live-priceSILVER");
    silver.textContent = `₺${tryRate}`;
  } catch (error) {
    console.log("Hata", error);
  }
}

function setDate() {
  document.getElementById("date-text").textContent = new Date().toLocaleString(
    "tr-TR",
    {
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "numeric",
    }
  );
}
setDate();

change();
function change() {
  const repeat = document.getElementById("repeat");

  repeat.addEventListener("click", () => {
    const val1 = firstOption.value;
    const val2 = secondOption.value;

    firstOption.value = val2;
    secondOption.value = val1;
  });
}
