// Default parameters

function greeting(name) {
  if (name === undefined) {
    name = 'friend';
  }
  return `Hi, ${name}`;
}

greeting();

///////////////////////////////////////////////////
function greeting2(name = 'friend', language = 'ja') {
  if (language = 'en') {
  return `Hi, ${name}`;
  }
  if (language = 'ja') {
  return `Konnichiwa, ${name}`;
  }
  return 'Chào bạn'
}

greeting2('Minh');