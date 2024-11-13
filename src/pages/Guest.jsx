import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as G from "../styles/GuestStyle";
import TextField from '../components/TextField';
import TextBox from "../components/TextBox"

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
                <G.Title>Guestbook</G.Title>
                <G.Line></G.Line>
                <TextField onNewComment={handleNewComment} />
                {datas.map((data) => (
                    <TextBox
                        key={data.id}
                        data={{
                            author: data.name, 
                            message: data.content 
                        }}
                    />
                ))}      
            </G.GuestContainer>
        </>
    );
}

export default Guest;
