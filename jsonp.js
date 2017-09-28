function JSONP({url, params = {}, callbackKey, callback}) {
  params[callbackKey] = 'jsonpCallback';
  window.jsonpCallback = callback;
  const paramKeys = Object.keys(params);
  const paramString = paramKeys.map(key => `${key} = ${params[key]}`).join('&');
  const script = document.createElement('script');
  console.log(`${url}?${paramString}`);
  script.setAttribute('src', `${url}?${paramString}`);
  document.body.appendChild(script);
}

JSONP({url:'http://localhost:4000/api/book'});