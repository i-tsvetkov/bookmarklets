var salt = window.crypto.getRandomValues(new Uint8Array(16));
var iv   = window.crypto.getRandomValues(new Uint8Array(16));
var hash = 'SHA-1';
var iterations = 1000;

function ab2hex(ab) {
  return Array.from(ab).map(x => (x < 16) ? '0' + x.toString(16) : x.toString(16)).join('');
}

function hex2ab(str) {
  return Uint8Array.from(str.match(/../g).map(x => parseInt(x, 16)));
}

function str2ab(str) {
  return (new TextEncoder).encode(str);
}

function get_key(password) {
  return window.crypto.subtle.importKey(
    "raw",
    str2ab(password),
    { name: "PBKDF2" },
    false,
    ["deriveKey"]
  ).then(function (masterKey) {
    return window.crypto.subtle.deriveKey(
      {
        name: "PBKDF2",
        salt: salt,
        iterations: iterations,
        hash: hash
      },
      masterKey,
      { name: "AES-CBC", length: 256 },
      false,
      ["encrypt", "decrypt"]
    );
  });
}

function encrypt(code) {
  return function (key) {
    return window.crypto.subtle.encrypt(
      { name: "AES-CBC", iv: iv },
      key,
      str2ab(code)
    );
  };
}

function decrypt(key) {
  window.crypto.subtle.decrypt(
    { name: "AES-CBC", iv: iv },
    key,
    hex2ab(code)
  ).then(function (plaintext) {
    eval((new TextDecoder).decode(plaintext));
  }).catch(function (error) {
    console.error(error);
    alert("decryption failed!");
  });
}

function generate(ciphertext) {
  return [ 'javascript: {'
         , 'var iv = "'   + ab2hex(iv)   + '";'
         , 'var salt = "' + ab2hex(salt) + '";'
         , 'var code = "' + ab2hex(new Uint8Array(ciphertext)) + '";'
         , 'var hash = "' + hash + '";'
         , 'var iterations = ' + iterations + ';'
         , hex2ab.toString()
         , str2ab.toString()
         , get_key.toString()
         , decrypt.toString()
         , 'salt = hex2ab(salt), iv = hex2ab(iv);'
         , 'get_key(window.prompt("password:")).then(decrypt);'
         , '};void(0);'
         ].join("\n");
}

