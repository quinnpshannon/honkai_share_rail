import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { selectFullList } from '../../slices/characterSlice';
import CharacterCard from '../../components/CharacterCard'
const Column = styled.section`
display: flex;
flex-direction: column;`
const Container = styled.div`
display: flex;`
export default function Characters ({list, refer, lang, oList, setOList}) {
    // const LIST = list.filter((character) => )
      function filterByID(item) {
        let own = false;
        oList.forEach( owned => {
            console.log(`${owned.key} + ${item.key}`)
            owned.key == item.key ? own = true : false
        })
        return !own;
    }
      
      const LIST = list.filter(filterByID);
      console.log(LIST);
 return (
    <Container>
        <Column>
        <h1>Characters (full list)</h1>
        {LIST.map(s => (
            <CharacterCard key={s.key} character={s} refer={refer} lang={lang} onClick={(e)=>console.log(e.target)}/>
        ))}
        </Column>
        <Column>
        <h1>Characters (full list)</h1>
        {oList.map(s => (
            <CharacterCard key={s.key} character={s} refer={refer} lang={lang} onClick={(e)=>console.log(e.target)}/>
        ))}
        </Column>
    </Container>
 )   
}