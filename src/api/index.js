const warpPass = import.meta.env.VITE_TEST_CHARACTERS //|| 'https://api.enka.network/store/hsr/';

export const getCharacters = async () => {
  const newList = [];
  const response = await fetch(warpPass + 'honker_characters.json');
  const data = await response.json();
  for await (const [key, value] of Object.entries(data)) {
      const newCharacter = { key: key, value: value }
      newList.push(newCharacter)
    // if (!characterList.find((id) => id.key == key)) {
    //   const newCharacter = { key: key, value: value }
    //   setCharacterList((characterList) =>[...characterList, newCharacter]);
    // }
  }
  console.log(newList);
  return newList;
};
export const getReference = async (setLangRef, setLanguage) => {
  const langArray = [];
  const response = await fetch(warpPass + 'hsr.json');
  const data = await response.json();
  for (const [key, value] of Object.entries(data)) {
    langArray.push({key: key, value: value})
  }
  setLangRef(data);
  console.log(data);
};
// export const buildList = async (chars, setChars, lang, setLang) => {
//   const compiledList = [];
//   await getCharacters(chars, setChars);
//   await getReference(setLang);
//   for await (const char of chars){
//     const hash = char.value.AvatarName.Hash
//     char.value.AvatarNameString=lang[hash];
//     compiledList.push(char);
//   }
//   // return compiledList;
//   initFullList(compiledList);
// };