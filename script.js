const getQuote = async () => {
  const res = await fetch('https://type.fit/api/quotes')
  const quotes = await res.json();
  console.log(quotes);
}

getQuote();