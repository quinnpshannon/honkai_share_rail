import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { selectFullList } from '../../slices/characterSlice';
import CharacterCard from '../../components/CharacterCard'

export default function Characters ({list, refer, lang}) {
    console.log(list[0]);
 return (
    <>
        <h1>Characters (full list)</h1>
        {list.map(s => (
            <CharacterCard key={s.key} character={s} refer={refer} lang={lang} />
            // <h6 key={s.key}>{s.key} list {refer[lang][s.value.AvatarName.Hash]}</h6>
            ))}
    </>
 )   
}