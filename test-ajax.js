// var stockSymbol = document.querySelector('#stock-list');

var currentDay = new Date();
var currentDayFormatted = currentDay.toISOString().split('T')[0];
var currentTimeHours = currentDay.getHours();
var currentTimeMinutes = currentDay.getMinutes();
var currentTimeSeconds = currentDay.getSeconds();
var currentTime = currentDayFormatted + ' ' + currentTimeHours + ':' + currentTimeMinutes + ':' + currentTimeSeconds;
var time = currentTime.toString();
console.log(time);

var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://www.alphavantage.co/query?function=OVERVIEW&symbol=IBM&apikey=HKX3MUJHRZLOUZ85');
xhr.send();

xhr.responseType = 'json';

xhr.addEventListener('load', handleLoadDataOne);

function handleLoadDataOne(event) {
  // console.log('xhr status: ', xhr.status);
  // console.log('xhr response: ', xhr.response);

  // Logs for Historical Price Data
  console.log('50DayMovingAverage: ', xhr.response['50DayMovingAverage']);
  console.log('200DayMovingAverage: ', xhr.response['200DayMovingAverage']);
  console.log('52WeekHigh: ', xhr.response['52WeekHigh']);
  console.log('52WeekLow: ', xhr.response['52WeekLow']);
  console.log('Analyst Target Price: ', xhr.response.AnalystTargetPrice);

  // Logs for Key Performance Indicators (KPIs)

  // Logs for Financial Ratios

  // Logs for Risk Measures

}

var xhrTwo = new XMLHttpRequest();

xhrTwo.open('GET', 'https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=demo');
xhrTwo.send();

xhrTwo.responseType = 'json';

xhrTwo.addEventListener('load', handleLoadDataTwo);

function handleLoadDataTwo(event) {
  // console.log('xhrTwo status: ', xhrTwo.status);
  // console.log('xhrTwo response: ', xhrTwo.response);

  console.log('StockSymbol: ', xhrTwo.response['Global Quote']['01. symbol']);

  // Logs for Stock Quote Data
  console.log('Open price: ', xhrTwo.response['Global Quote']['02. open']);
  console.log('high price: ', xhrTwo.response['Global Quote']['03. high']);
  console.log('low price: ', xhrTwo.response['Global Quote']['04. low']);
  console.log('current price: ', xhrTwo.response['Global Quote']['05. price']);
  console.log('volume: ', xhrTwo.response['Global Quote']['06. volume']);
  console.log('latest trading day: ', xhrTwo.response['Global Quote']['07. latest trading day']);
  console.log('previous close: ', xhrTwo.response['Global Quote']['08. previous close']);
  console.log('change: ', xhrTwo.response['Global Quote']['09. change']);
  console.log('change percent: ', xhrTwo.response['Global Quote']['10. change percent']);

  // Logs for KPIs

  // Logs for Financial Ratios

  // Logs for Risk Measures

}

var xhrProfitability = new XMLHttpRequest();

xhrProfitability.open('GET', 'https://www.alphavantage.co/query?function=OVERVIEW&symbol=IBM&apikey=HKX3MUJHRZLOUZ85');
xhrProfitability.send();

xhrProfitability.responseType = 'json';

xhrProfitability.addEventListener('load', handleLoadProfitability);

function handleLoadProfitability(event) {
  // console.log('xhr status: ', xhr.status);
  // console.log('xhr response: ', xhr.response);

  // Logs for Historical Price Data
  console.log('50DayMovingAverage: ', xhr.response['50DayMovingAverage']);
  console.log('200DayMovingAverage: ', xhr.response['200DayMovingAverage']);
  console.log('52WeekHigh: ', xhr.response['52WeekHigh']);
  console.log('52WeekLow: ', xhr.response['52WeekLow']);
  console.log('Analyst Target Price: ', xhr.response.AnalystTargetPrice);

  // Logs for Key Performance Indicators (KPIs)

  // Logs for Financial Ratios

  // Logs for Risk Measures

  // Profitability: ROA, ROE, Profit Margin

}

var xhrLiquiditySolvency = new XMLHttpRequest();

// Request from BALANCE SHEETS
xhrLiquiditySolvency.open('GET', 'https://www.alphavantage.co/query?function=BALANCE_SHEET&symbol=IBM&apikey=demo');
xhrLiquiditySolvency.send();

xhrLiquiditySolvency.responseType = 'json';

xhrLiquiditySolvency.addEventListener('load', handleLoadLiquiditySolvency);

function handleLoadLiquiditySolvency(event) {
  console.log('xhrLiquiditySolvency status: ', xhrLiquiditySolvency.status);
  console.log('xhrLiquiditySolvency response: ', xhrLiquiditySolvency.response);

  // Variables for Liquidity/Solvency Measures

  // Current Ratio
  var totalCurrentAssests = xhrLiquiditySolvency.response.annualReports[0].totalCurrentAssets;
  var totalCurrentLiabilities = xhrLiquiditySolvency.response.annualReports[0].totalCurrentLiabilities;
  var currentRatio = totalCurrentAssests / totalCurrentLiabilities;

  console.log('Current-Ratio: ', currentRatio);

  // Debt-to-Equity-Ratio
  var totalLiabilities = xhrLiquiditySolvency.response.annualReports[0].totalLiabilities;
  var totalShareholderEquity = xhrLiquiditySolvency.response.annualReports[0].totalShareholderEquity;
  var debtToEquityRatio = totalLiabilities / totalShareholderEquity;

  console.log('Debt-to-Equity-Ratio: ', debtToEquityRatio);

  // Total-Debt-to-Total-Assets-Ratio
  var shortTermDebt = xhrLiquiditySolvency.response.annualReports[0].shortTermDebt;
  var longTermDebt = xhrLiquiditySolvency.response.annualReports[0].longTermDebt;
  var totalAssets = xhrLiquiditySolvency.response.annualReports[0].totalAssets;
  var totalDebtToTotalAssests = shortTermDebt + longTermDebt / totalAssets;

  console.log('Total-Debt-to-Total-Assets: ', totalDebtToTotalAssests);

  // Quick Ratio
  var inventory = xhrLiquiditySolvency.response.annualReports[0].inventory;
  var quickRatio = totalCurrentAssests - inventory / totalCurrentLiabilities;

  console.log(quickRatio);

}
