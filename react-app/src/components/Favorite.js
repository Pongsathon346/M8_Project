import axios from 'axios'
import { useHistory } from 'react-router';
import { useState, useEffect } from "react"
import {Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styled from 'styled-components';


function Favorite({className}) {
    const [song, setSong] = useState([])
    const history = useHistory()

    let id;
    let users = JSON.parse(localStorage.getItem('user'));
    if(users === null){
        history.push('/')
    }else{
       id = users.id
    }

    useEffect(async () => {
        await axios.get(`http://localhost:5000/api/routes/getFav/${id}`).then((res) => {
            if(!res.data){
                alert('No favorite song!')
            }else {
                setSong(res.data)
            }
       })
    }, [])

    return(
        <div className={className}>
            <div className="container2">
            <Row>
                <Col md={2}></Col>   
                <Col md={9} centered className="container2-box">
                    <Row>
                        {song.map((item) =>{
                            function sendDelete(){
                                axios.delete(`http://localhost:5000/api/routes/deleteFav/${item.id}/${item.user_id}`).then((res) => {
                                    alert(res.data.message)
                                    window.location.reload(true)
                                })
                            }
                            return(
                                <Col md={6} key={item.id} className="box">
                                    <Row>
                                        <Col>
                                            <img src={item.image}></img>
                                        </Col>
                                        <Col>
                                            <div className="">
                                                <div className="card-detail">
                                                <Row>                      
                                                    <span className="head">Song : <span className="text">{item.song_name}</span></span>
                                                </Row>
                                                <Row>
                                                    <span className="head">Album : <span className="text">{item.song_album}</span></span>
                                                    
                                                </Row>
                                                <Row>
                                                    <span className="head">Artist: <span className="text">{item.song_artist}</span></span> 
                                                </Row>
                                                <Row>
                                                    <span className="head">Preview : <a className="text" href={item.song_preview}>Listen!</a> </span>
                                                </Row>
                                                </div>
                                                <Row>
                                                    <button className="delete" onClick={sendDelete}>Delete</button>
                                                </Row>
                                            </div>
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

export default styled(Favorite)`
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
    .delete{
        border-radius:12px;
        width:100px;
        margin-left:12px;
    }
    .card-detail {
        height:170px;
    }
`