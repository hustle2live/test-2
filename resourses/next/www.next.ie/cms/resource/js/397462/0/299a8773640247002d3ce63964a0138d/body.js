const commonTag = document.createElement('script');
commonTag.src = 'https://static.nextdirect.com/resource/themes/next/js/commons-13920-3.js';
commonTag.defer = true

const nextTag = document.createElement('script');
nextTag.src = 'https://static.nextdirect.com/resource/themes/next/js/next-13922-15.js';
nextTag.defer = true

document.getElementsByTagName('head')[0].appendChild(commonTag);
document.getElementsByTagName('head')[0].appendChild(nextTag);