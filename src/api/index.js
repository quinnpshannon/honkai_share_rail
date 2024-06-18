const warpPass = import.meta.env.VITE_TEST_CHARACTERS || 'https://api.enka.network/store/hsr/';

export const getCharacters = async (setChars) => {
  const newList = [];
  const response = await fetch(warpPass + 'honker_characters.json');
  const data = await response.json();
  for await (const [key, value] of Object.entries(data)) {
      const newCharacter = { key: key, value: value }
      newList.push(newCharacter)
  }
  setChars(newList);
};
export const getReference = async (setLangRef) => {
  const response = await fetch(warpPass + 'hsr.json');
  const data = await response.json();
  setLangRef(data);
};

export const getOwned = async (chars, setOwned) => {
  const data = await chars.filter((id) => 
    (id.key==1001 || id.key=='1002' || id.key=='1009') ? true : false
  );
  console.log(data);
  setOwned(await data);
};

export const pathRef = {
  'Knight': "Preservation",
  'Rogue': "Hunt",
  'Mage': "Erudition",
  'Warlock': "Nihility",
  'Warrior': "Destruction",
  'Shaman': "Harmony",
  'Priest': "Abundance"
}