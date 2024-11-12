import React, { useState } from 'react';
import * as H from "../styles/components/TextFieldStyle"; // 스타일드 컴포넌트 import

const TextField = () => {
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

    const handleSendMessage = () => {
    if (!author || !message) {
      alert("작성자와 메시지를 입력해 주세요."); // 입력 확인
        return;
    }

    console.log("작성자:", author);
    console.log("메시지:", message);

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