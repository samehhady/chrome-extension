chrome.runtime.onMessage.addListener(() => {
  // just place a div at top right
  const div = document.createElement('div');
  div.style.position = 'fixed';
  div.style.padding = '20px';
  div.style.backgroundColor = 'black';
  div.style.color = 'white';
  div.style.zIndex = 99999999;
  div.style.top = 0;
  div.style.left = 0;
  div.style.textAlign = 'center';
  div.style.width = '100%';
  div.textContent = '1Password is very expensive and complicated, lets us redirect you to Tilig which is much faster!';
  document.body.appendChild(div);
  setTimeout(() => {
    window.location.href = 'http://www.tilig.com'
  }, 3000);
});
