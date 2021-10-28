import axios from 'axios'
import { useHistory } from 'react-router';
import { useState, useEffect } from "react"
import {Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Swal from 'sweetalert2';


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
                setSong(res.data)
            }).catch((err)=> {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${err.response.data.message}`,
                  })
                history.push('/home')
            })
    }, [])

    return(
        <div className={className}>
            <div className="topic">
                Favorite
            </div>
            <div className="container2">
            <Row className="rowtest">
                <Col md={2}></Col>   
                <Col md={9} centered className="container2-box">
                    <Row>
                        {song.map((item) =>{
                            function sendDelete(e){
                                e.preventDefault()
                                Swal.fire({
                                    title: 'Are you sure?',
                                    text: "You won't be able to revert this!",
                                    icon: 'warning',
                                    showCancelButton: true,
                                    confirmButtonColor: '#3085d6',
                                    cancelButtonColor: '#d33',
                                    confirmButtonText: 'Yes, delete it!'
                                  }).then((result) => {
                                    if (result.isConfirmed) {
                                        axios.delete(`http://localhost:5000/api/routes/deleteFav/${item.id}/${item.user_id}`).then((res) => {
                                        Swal.fire(
                                            'Deleted!',
                                            'Your song has been deleted.',
                                            'success',
                                            window.location.reload(true)
                                        )                                              
                                    }).catch((err)=> {
                                        Swal.fire({
                                            icon: 'error',
                                            title: 'Oops...',
                                            text: 'Something went wrong!',
                                        })
                                    })
                                    }
                                  }) 
                            }
                            return(
                                <Col md={6} key={item.id} className="box">
                                    <Row>
                                        <Col>
                                        <Link to={`/lyric/${item.song_artist}&${item.song_name}`}><img src={item.image}></img></Link>
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
        margin-bottom:10px;
        border-radius:12px;
        width:100px;
        margin-left:12px;
        border:none;
        background-color:#b31b1b;
        transition: .2s ease-in;
    }

    .delete:hover{
        background-color:black;
        color:red;
    }

    .card-detail {
        height:170px;
    }

    .topic {
        font-size:30px;
        margin-left:10%;
        margin-bottom:25px;
        padding-top:20px;
    }
    
    .rowtest{
        width:100%
    }
`