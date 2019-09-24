'use strict';

{
  // const strEng = 'Hello World!';
  // console.log(strEng);

  // const strTur = 'Merhaba Dunya!';
  // console.log(strTur);

  // const strDut = 'Hallo Wereld!';
  // console.log(strDut);

  // const strNed = 'Hallo Welt!';
  // console.log(strNed);

  // const strFra = 'Bonjour le monde!';
  // console.log(strFra);

  // const strSpa = 'Hola Mundo!';
  // console.log(strSpa);

  // const strChi = '你好，世界!';
  // console.log(strChi);

  // const strJap = 'こんにちは世界!';
  // console.log(strJap);

  // const strIta = 'Ciao mondo!';
  // console.log(strIta);

  // const strRus = 'Привет, мир!';
  // console.log(strRus);

  // The part up here was too long.
  // It is more practical to write with object data type as below.

  const languages = {
    eng: 'Hello World!',
    tur: 'Merhaba Dunya!',
    dut: 'Hallo Welt!',
    ned: 'Hallo Wereld!',
    fra: 'Bonjour le monde!',
    spa: 'Hola Mundo!',
    chi: '你好，世界!',
    jap: 'こんにちは世界!',
    ita: 'Ciao mondo!',
    rus: 'Привет, мир!',
  }

  console.log(languages);
  console.log(languages.eng);
  console.log(languages['tur']);
}
