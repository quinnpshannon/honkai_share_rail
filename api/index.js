const warpPass = import.meta.env.VITE_TEST_CHARACTERS || 'https://api.enka.network/store/hsr/';

const getCharacters = async (characterList, setCharacterList) => {
  const response = await fetch(warpPass + 'honker_characters.json');
  const data = await response.json();
  for await (const [key, value] of Object.entries(data)) {
    if (!characterList.find((id) => id.key == key)) {
      const newCharacter = { key: key, value: value }
      setCharacterList((characterList) => [...characterList, newCharacter]);
    }
  }
};
const getReference = async (langRef, setLangRef) => {
  const response = await fetch(warpPass + 'hsr.json');
  const data = await response.json();
  setLangRef(await data.en);
};
export const buildList = async (chars, setChars, lang, setLang, compile) => {
  const compiledList = [];
  await getCharacters(chars, setChars);
  await getReference(lang, setLang);
  for await (const char of chars){
    const hash = char.value.AvatarName.Hash
    char.value.AvatarNameString=lang[hash];
    compiledList.push(char);
  }
  compile(compiledList);
};