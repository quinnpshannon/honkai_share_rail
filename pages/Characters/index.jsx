import styled from 'styled-components'
import { useState, useEffect } from 'react'

export default function Characters ({list, setList, refer, setRefer}) {
//     const getCharacters = async() => {
//         const response = await fetch(warpPass+'honker_characters.json');
//         const data = await response.json();
//         const keys = Object.keys(data)
//         const values = Object.values(data)
//         for(const index in keys){
//             if(!list.find((id) => id.key == keys[index])){
//                 const newCharacter = {key: keys[index], value: values[index]}
//                 setList((list) => [...list, newCharacter]);
//             }
//         }
//     };
//     const getReference = async() => {
//         const response = await fetch(warpPass+'hsr.json');
//         const data = await response.json();
//         const en = await data.en;
//         const keys = Object.keys(en)
//         const values = Object.values(en)
//         for(const index in keys){
//             if(!refer.find((id) => id.key == keys[index])){
//                 const newRefer = {key: keys[index], value: values[index]};
//                 setRefer((refer) =>[...refer, newRefer]);
//             }
//         }
//       };
 return (
    <>
        <h1>Characters (full list)</h1>
        {list.map(s => (
            <h6 key={s.key}>list {s.value.AvatarName.Hash || 'undefined'}</h6>
            ))}
    </>
 )   
}