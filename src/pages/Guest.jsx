import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as G from "../styles/GuestStyle";
import TextField from '../components/TextField';
import TextBox from "../components/TextBox";
import Title from "../components/Title";

function Guest() {
    const [datas, setDatas] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API}/comment/comments/`);
            setDatas(response.data);
        } catch (error) {
            console.error('데이터 조회 중 오류 발생:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);


    const handleNewComment = () => {
        fetchData();  // 댓글 전송 후 다시 데이터 갱신
    };

    return (
        <>
            <G.GuestContainer>
                <Title title="Guestbook"/>
                <TextField onNewComment={handleNewComment} />
                <G.Div>
                    {datas.map((data) => (
                        <TextBox
                            key={data.id}
                            data={{
                                author: data.name, 
                                message: data.content 
                            }}
                        />
                    ))}     
                </G.Div> 
            </G.GuestContainer>
        </>
    );
}

export default Guest;
