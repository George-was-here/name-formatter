const nameInverter = function(name) {
  const localName = name && name.trim();
  if (localName === '') {
    return '';
  }

  if (!name) {
    throw new Error('name is undefined 😤');
  }

  const splitName = localName.split(' ').filter(str => str !== ' ' && str !== '' && !str.includes('.'));
  const honorificTitles = localName.split(' ').filter(str => str !== ' ' && str !== '' && str.includes('.'));
  const splitNameLength = splitName.length;
  const honorificTitlesLength = honorificTitles.length;

  if (honorificTitlesLength === 1 && splitNameLength === 0) {
    return '';
  }

  if (splitNameLength === 1) {
    if (honorificTitlesLength === 1) {
      return `${honorificTitles[0]} ${splitName[0]}`;
    }
    return splitName[0];
  }

  if (splitNameLength === 2) {
    if (honorificTitlesLength === 1) {
      return `${honorificTitles[0]} ${splitName[1]}, ${splitName[0]}`;
    }
    return `${splitName[1]}, ${splitName[0]}`;
  }

};

module.exports = { nameInverter };