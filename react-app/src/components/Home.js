import { useState, useEffect } from "react"
import axios from 'axios'
import styled from "styled-components"
import {Row, Col} from 'react-bootstrap'
import { Link } from "react-router-dom"


function Home({className}) {
    const [input, setInput] = useState('')
    const [search, setSearch] = useState('')
    const [music, setMusic] = useState([])
    
    useEffect(()=> {
        if(search){
            axios.get(`https://api.lyrics.ovh/suggest/${input}`).then((res) => {
                setMusic(res.data.data)             
            })
        }else {
            axios.get('https://api.lyrics.ovh/suggest/selena').then((res) => {
                setMusic(res.data.data)       
            })
        }
        console.log(music);
    },[search])

    function submit(){
        setSearch(input)
    }

    return(
        <div className={className}>
            <div className="container1">
               <div className="container-box">
                    <label className="search">Search</label>
                    <div>
                        <input type="text" placeholder="  Search Artist or Song" name="searchBox" onChange={(event)=> setInput(event.target.value)}></input>
                    </div>
                    <div>
                        <button type="submit" value="submit" onClick={submit}>Find</button>
                    </div>
               </div>
            </div>
            <div className="container2">
                <Row>
                <Col md={2}></Col>   
                <Col md={9} centered className="container2-box">
                    <Row>
                        {music.map((item) => {
                            return(
                                <Col md={6} key={item.id} className="box">
                                    <Row>
                                        <Col>
                                            <img src={item.album.cover_medium}></img>
                                        </Col>
                                        <Col>
                                            <div className="card-detail">
                                            <Row>                      
                                                <span className="head">Song : <span className="text">{item.title}</span></span>
                                            </Row>
                                            <Row>
                                                <span className="head">Album : <span className="text">{item.album.title}</span></span>
                                                
                                            </Row>
                                            <Row>
                                                <span className="head">Artist: <span className="text">{item.artist.name}</span></span> 
                                            </Row>
                                            <Row>
                                                <span className="head">Preview : <a className="text" href={item.preview}>Listen!</a> </span>
                                            </Row>
                                            </div>
                                            <Row>
                                                <Link to={`/lyric/${item.artist.name}&${item.title}`}><button className="lyric">Get Lyric</button></Link>
                                            </Row>
                                            
                                        </Col>
                                    </Row>
                                </Col>
                            )
                        })}
                    </Row>
                </Col>
                </Row>
            </div>
        </div>
    )
}

export default styled(Home)`
    background-color:#efefef;
    .container1 {
        width:100%;
        display:flex;
        justify-content:center;
        padding-top: 3rem;
        padding-bottom: 4rem;
    }
    .container-box {
        text-align:center;
        width:100%;
    }
    .container-box label {
        color:#010334;
        font-size:56px;
        margin-bottom:10px;
        font-family:Fat-Frank, Arial, sans-serif;
        font-weight:700;

    }
    .container-box input[type=text] {
        width:50%;
        height:3rem;
        margin-bottom:10px;
        border-radius:5px;
    }
    .container-box button {
        margin-top:10px;
        width: 10%;
        height: 2.5rem;
        color:white;
        background-color:black;
    }

    .box {
        margin-bottom: 25px;
    }
    .head{
        font-size:18px;
        font-weight:600;
        margin-bottom:5px;
    }
    .text{
        font-weight:100;
        font-size:16px;
    }
    .lyric{
        border-radius:12px;
        width:100px;
    }
    .card-detail {
        height:170px;
    }
`