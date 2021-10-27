import axios from "axios"
import styled from "styled-components"
import { useParams, useHistory } from "react-router"
import {useState, useEffect} from 'react'


function Lyric ({className}) {
    const {artist,song} = useParams()
    const history = useHistory()   
    const [lyric, setLyric] = useState('')
    console.log('artist', artist);
    console.log('song', song);

    useEffect(()  => {
        async function getMusic() {
            const music = await axios(`https://api.lyrics.ovh/v1/${artist}/${song}`)
            await setLyric(music.data.lyrics)
            // await setLyric(music.data.lyrics.replace(/(?:\\[rn]|[\r\n]+)+/g, "<br>"))
            
    
        } 

        getMusic()

    }, [])
    

    return(
        <div className={className}>
            <div className="container">
                <div className="">
                    <h1>
                        <strong>
                            {artist}
                        </strong> - {song}
                    </h1>
                    <span><p>{lyric}</p></span>
                </div>
            </div>
        </div>
    )

}

export default styled(Lyric)`
    span{
        white-space: pre;
        text-align:center;
        font-weight:400;

    }
    .container{
        display:flex;
        justify-content:center;
    }
`