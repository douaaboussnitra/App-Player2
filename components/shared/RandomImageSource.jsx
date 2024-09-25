import React, { useEffect, useLayoutEffect, useState } from 'react';
const RandomImageSource = (index) => {
  switch (index) {
    case 1:
      return require('../../assets/images/avatars/1.png');
    case 2:
      return require('../../assets/images/avatars/2.png');
    case 3:
      return require('../../assets/images/avatars/3.png');
    case 4:
      return require('../../assets/images/avatars/4.png');
    case 5:
      return require('../../assets/images/avatars/5.png');
    case 6:
      return require('../../assets/images/avatars/6.png');
    case 7:
      return require('../../assets/images/avatars/7.png');
    case 8:
      return require('../../assets/images/avatars/8.png');
    case 9:
      return require('../../assets/images/avatars/9.png');
    case 10:
      return require('../../assets/images/avatars/10.png');
    // Add cases for other filenames...

    default:
      return require('../../assets/images/avatars/1.png'); // Fallback image

  }
};


export default RandomImageSource;
