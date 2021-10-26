import { useState, useEffect } from "react";
import axios from 'axios'
function Home() {
    const [input, setInput] = useState('')
    const [search, setSearch] = useState('')
    const [music, setMusic] = useState([])
    
    useEffect(()=> {
        if(search){
            axios.get(`https://api.lyrics.ovh/suggest/${input}`).then((res) => {
                setMusic(res.data.data)             
            })
        }else {
            axios.get('https://api.lyrics.ovh/suggest/wave').then((res) => {
                setMusic(res.data.data)       
            })
        }
        console.log(music);
    },[search])

    function submit(){
        setSearch(input)
    }

    return(
        <div>
            <div className="container1">
                <label>Search</label>
                <div>
                    <input type="text" placeholder="Search Artist or Song" name="searchBox" onChange={(event)=> setInput(event.target.value)}></input>
                </div>
                <div>
                    <button type="submit" value="submit" onClick={submit}>Submit</button>
                </div>
            </div>
            <div className="container2">
                {music.map((item) => {
                    return(
                        <div>
                            <div>
                                <img src={item.album.cover_medium}></img>
                            </div>
                            <div>
                                {item.artist.name} :
                                {item.title}    
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Home