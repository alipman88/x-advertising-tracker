(() => {
  const index = new Set();

  // continually scroll down
  const scrollInterval = window.setInterval(() => {
    window.scrollBy(0, 500);
  }, 500);

  // log ads every 2.5 seconds
  const logInterval = window.setInterval(() => {
    const ads = [...document.getElementsByTagName('span')]
      .filter(e => e.innerText == 'Ad');

    for (const ad of ads) {
      if (index.has(ad)) break;

      index.add(ad);

      let el = ad;
      while (el.innerText === 'Ad') { el = el.parentElement; }

      fetch('https://x-advertising-tracker-79141fdedf53.herokuapp.com/impressions', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ad: el.innerText }),
      })

      console.log(el.innerText);
      ad.innerText = 'Ad Logged';
    }
  }, 2_500);

  // stop after about half a minute
  const timeLimit = 1_000 * (15 + Math.ceil(30 * Math.random()));
  window.setTimeout(() => {
    clearInterval(scrollInterval);
    clearInterval(logInterval);
    console.log('Finished logging ads.')
  }, timeLimit);

  // refresh page every 15 minutes or so
  const timeOut = 1_000 * (600 + Math.ceil(600 * Math.random()));
  window.setTimeout(() => {
    window.location.reload();
  }, timeOut);
})();
