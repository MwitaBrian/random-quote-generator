const getQuote = async () => {
  const res = await fetch('https://type.fit/api/quotes')
  const quotes = await res.json();
  const num = Math.floor(Math.random()*quotes.length);
  const item = quotes[num];
  console.log(item);
}

getQuote();