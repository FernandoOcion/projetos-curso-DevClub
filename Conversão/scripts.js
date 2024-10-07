const convertButton = document.querySelector(".convert-button")
const selectConvert = document.querySelector("#select-convert")
const selectConvert2 = document.querySelector("#select-convert2")


async function convertValues() {

    const inputCurrancyValue = document.querySelector(".input-currancy").value

    const data = await fetch ("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(Response => Response.json())

    const realToday = 1
    const dolarToday = data.USDBRL.low
    const euroToday = data.EURBRL.low
    const libraToday = 6.21
    const bitToday = data.BTCBRL.low


    const currencyValueReal = document.querySelector(".currency-value-real")
    const currencyValuedolar = document.querySelector(".currency-value-dolar")


    if (selectConvert.value == "dolar") {
        currencyValueReal.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrancyValue)
    }

    if (selectConvert.value == "euro") {
        currencyValueReal.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrancyValue)
    }

    if (selectConvert.value == "libra") {
        currencyValueReal.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrancyValue)
    }

    if (selectConvert.value == "bitcoin") {
        currencyValueReal.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrancyValue)
    }

    if (selectConvert.value == "real") {
        currencyValueReal.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrancyValue)
    }





    let x = document.querySelector(".input-currancy").value

    if (selectConvert.value == "real") {
        x = document.querySelector(".input-currancy").value * realToday
    }
    if (selectConvert.value == "bitcoin") {
        x = document.querySelector(".input-currancy").value * bitToday
    }
    if (selectConvert.value == "libra") {
        x = document.querySelector(".input-currancy").value * libraToday
    }
    if (selectConvert.value == "euro") {
        x = document.querySelector(".input-currancy").value * euroToday
    }
    if (selectConvert.value == "dolar") {
        x = document.querySelector(".input-currancy").value * dolarToday
    }






    if (selectConvert2.value == "dolar") {
        currencyValuedolar.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(x / dolarToday)
    }

    if (selectConvert2.value == "euro") {
        currencyValuedolar.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "EUR"
        }).format(x / euroToday)
    }

    if (selectConvert2.value == "libra") {
        currencyValuedolar.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "GBP"
        }).format(x / libraToday)
    }

    if (selectConvert2.value == "bitcoin") {
        currencyValuedolar.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(x / bitToday)
    }

    if (selectConvert2.value == "real") {
        currencyValuedolar.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BRL"
        }).format(x / realToday)
    }

}


function changeCurrency() {
    const boxCurrency = document.getElementById("change-currency")
    const BoxCurrencyTwo = document.getElementById("change-currancy-two")
    const currencyImg = document.querySelector(".currency-img")
    const currencyImg2 = document.querySelector(".currency-img2")



    if (selectConvert.value == "real") {
        boxCurrency.innerHTML = "Real"
        currencyImg.src = "./assets/brasil 2.png"
    }
    if (selectConvert.value == "dolar") {
        boxCurrency.innerHTML = "Dólar"
        currencyImg.src = "./assets/estados-unidos (1) 1.png"
    }
    if (selectConvert.value == "euro") {
        boxCurrency.innerHTML = "Euro"
        currencyImg.src = "./assets/Design sem nome 3.png"
    }
    if (selectConvert.value == "libra") {
        boxCurrency.innerHTML = "Libra"
        currencyImg.src = "./assets/libra 1.png"
    }
    if (selectConvert.value == "bitcoin") {
        boxCurrency.innerHTML = "Bitcoin"
        currencyImg.src = "./assets/bitcoin 1.png"
    }




    if (selectConvert2.value == "real") {
        BoxCurrencyTwo.innerHTML = "Real"
        currencyImg2.src = "./assets/brasil 2.png"
    }
    if (selectConvert2.value == "dolar") {
        BoxCurrencyTwo.innerHTML = "Dólar"
        currencyImg2.src = "./assets/estados-unidos (1) 1.png"
    }
    if (selectConvert2.value == "euro") {
        BoxCurrencyTwo.innerHTML = "Euro"
        currencyImg2.src = "./assets/Design sem nome 3.png"
    }
    if (selectConvert2.value == "libra") {
        BoxCurrencyTwo.innerHTML = "Libra"
        currencyImg2.src = "./assets/libra 1.png"
    }
    if (selectConvert2.value == "bitcoin") {
        BoxCurrencyTwo.innerHTML = "Bitcoin"
        currencyImg2.src = "./assets/bitcoin 1.png"
    }

    convertValues()

}



convertButton.addEventListener("click", convertValues)
selectConvert.addEventListener("change", changeCurrency)
selectConvert2.addEventListener("change", changeCurrency)