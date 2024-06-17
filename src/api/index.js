const warpPass = import.meta.env.VITE_TEST_CHARACTERS //|| 'https://api.enka.network/store/hsr/';

export const getCharacters = async (setChars) => {
  const newList = [];
  const response = await fetch(warpPass + 'honker_characters.json');
  const data = await response.json();
  for await (const [key, value] of Object.entries(data)) {
      const newCharacter = { key: key, value: value }
      newList.push(newCharacter)
  }
  setChars(newList);
  // return newList;
};
export const getReference = async (setLangRef) => {
  const response = await fetch(warpPass + 'hsr.json');
  const data = await response.json();
  setLangRef(data);
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