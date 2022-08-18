const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '371ab18d31msh85f97a7214b4f03p1b476cjsnb062d6928861',
		'X-RapidAPI-Host': 'binance43.p.rapidapi.com'
	}
};
async function getETHBTC(){
    const res = await fetch('https://binance43.p.rapidapi.com/avgPrice?symbol=ETHBTC', options)
    const data = await res.json();
    const price = data.price;
    if (res.status === 200) {
        printPrice("ETHBTC", price);
    }else {
        printPrice("ETHBTC", "7.000983");
    }
};

async function getLTCBTC(){
    const res = await fetch('https://binance43.p.rapidapi.com/avgPrice?symbol=LTCBTC', options)
    const data = await res.json();
    const price = data.price;
    if (res.status === 200) {
        printPrice("LTCBTC", price);
    }else {
        printPrice("LTCBTC", "1.20003");
    }
};

async function getBNBBTC(){
    const res = await fetch('https://binance43.p.rapidapi.com/avgPrice?symbol=BNBBTC', options);
    const data = await res.json();
    const price = data.price;
    if (res.status === 200) {
        printPrice("BNBBTC", price);
    }else {
        printPrice("BNBBTC", "0.3199000");
    }
    
};

async function getLRCETH(){
    const res = await fetch('https://binance43.p.rapidapi.com/avgPrice?symbol=LRCETH', options)
    const data = await res.json();
    const price = data.price;
    if (res.status === 200) {
        printPrice("LRCETH", price);
    }else {
        printPrice("LRCETH", "0.980000");
    }
    
};



//escribir el precio
function printPrice(where,price){
    const getid = document.getElementById(where)
    getid.innerHTML = price;
}
//obtener hora y dia
function getdate(){
    const dateNow = document.getElementById("date")
    let date = new Date().toLocaleString();
    dateNow.innerHTML = date;
}

//recargar
function reload(){
    getETHBTC();
    getLTCBTC();
    getBNBBTC();
    getLRCETH();
    getdate();
}



getETHBTC();
getLTCBTC();
getBNBBTC();
getLRCETH();
getdate();
