import axios from 'axios'
import styled from 'styled-components'
import { useParams } from 'react-router'
import { useState, useEffect } from 'react'

function Lyric ({ className }) {
  const { artist, song } = useParams()
  const [lyric, setLyric] = useState('')
  console.log('artist', artist)
  console.log('song', song)

  useEffect(() => {
    async function getMusic () {
      const music = await axios(`https://api.lyrics.ovh/v1/${artist}/${song}`)
      await setLyric(music.data.lyrics)
      // await setLyric(music.data.lyrics.replace(/(?:\\[rn]|[\r\n]+)+/g, "<br>"))
    }

    getMusic()
  }, [])

  return (
        <div className={className}>
            <div className="topic">
                Lyric Detail
            </div>
            <div className="container">
                <div className="box">
                    <h1 className="name">
                        <strong>
                            {artist}
                        </strong> - {song}
                    </h1>
                    <div className="box-lyric">
                        <span><p>{lyric}</p></span>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default styled(Lyric)`
    
    span{
        white-space: pre;
        text-align:center;
        font-weight:500;
        font-size:20px;
    }
    .container{
        padding:0 50px;
        margin:auto;
        padding-bottom: 2%;
        
    }
    .topic {
        font-size:30px;
        margin-left:10%;
        margin-bottom:20px;
        padding-top:20px;
    }
    .box-lyric {
        background-color: rosybrown;
        padding:20px 0;
        border-radius:10px;
    }
    .name {
        border-bottom:1px solid #d4d4d4;
        text-align:center;
        padding-bottom:20px;
        margin-bottom:40px;
        color:#010334;
    }
`
