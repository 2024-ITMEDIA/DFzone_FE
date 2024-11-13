import React, { useState } from 'react';
import * as H from "../styles/components/TextFieldStyle"; // 스타일드 컴포넌트 import
import axios from 'axios';

const TextField = ({onNewComment}) => {
  const [author, setAuthor] = useState(''); // 작성자 상태 선언
  const [message, setMessage] = useState(''); // 메시지 상태 선언

    const handleAuthorChange = (event) => {
    const value = event.target.value;
    if (value.length <= 10) { // 글자 수 제한 (10자 이내)
        setAuthor(value);
    }
    };

    const handleMessageChange = (event) => {
    const value = event.target.value;
    if (value.length <= 150) { // 글자 수 제한 (150자 이내)
        setMessage(value);
    }
    };

    const handleSendMessage = async () => {
      // e.preventDefault()

      if (!author || !message) {
        alert("작성자와 메시지를 입력해 주세요."); // 입력 확인
          return;
      }

      try {
        const response = await axios.post(`${import.meta.env.VITE_API}/comment/comments/`,{
          "name": author,
          "content": message
        });

        if (response.status === 201) {
          console.log("댓글이 성공적으로 등록되었습니다.");
          onNewComment();
        }
      } catch (error) {
        console.error('서버와의 통신 중 오류 발생:', error);
      }

    

    // 메시지를 전송한 후 상태 초기화
    setAuthor('');
    setMessage('');
    };

    return (
    <H.Container>
        <H.NameBox
        type="textarea"
        value={author}
        onChange={handleAuthorChange} // 작성자 입력 이벤트 연결
        placeholder="작성자 (10자 이내)"
        />
        <H.TextBox
        as="textarea"
        value={message}
        onChange={handleMessageChange} // 메시지 입력 이벤트 연결
        placeholder="방명록을 남겨주세요. (150자 이내)"
        />
        <H.SendButton 
        onClick={handleSendMessage} 
        disabled={!author || !message} // 작성자와 메시지가 모두 입력되어야 활성화
        >
        메세지 전송
        </H.SendButton>
    </H.Container>
    );
};

export default TextField;