## 도파민 자유지대
덕성여자대학교 IT미디어공학전공 제12회 졸업전시회 '도파민 자유지대' 웹사이트 프론트엔드 레포

<br>
<br>

### 💻 프로젝트 스택 및 라이브러리

<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white"/> <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white"/> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white"/> <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"> <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=Vite&logoColor=white"> <img src="https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=Yarn&logoColor=white">
<br>
<img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white"> <img src="https://img.shields.io/badge/ReactRouter-CA4245?style=for-the-badge&logo=ReactRouter&logoColor=white"> <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white">
<br>

#### Yarn + Vite 사용 방법
- `yarn install` 또는 `yarn` : yarn 설치
- `yarn add <package>` : 패키지 다운로드
- `yarn build` : 프로젝트 빌드 (dist 폴더)

#### Styled-components 사용 예시
```
>>> MainStyle.jsx

export const Main = styled.div`   // div태그를 Main이라는 이름으로 작명
    width: 100vw;
    height: 100vh;
`;

>>> Main.jsx

import * as M from "../styles/MainStyle";   // 상단에 스타일컴포넌트가 정의된 js파일 전체 임포트

return (
        <>
            <M.Main>메인</M.Main>  // Main으로 작명한 div태그를 컴포넌트처럼 사용
        </>
    );

```

<br>
<br>

### 📁 프로젝트 폴더 구조

```
DFzone_FE
├── README.md
├── node_modules
├── package.json
├── yarn.lock
├── eslint.config.js
├── vite.config.js
├── index.html
├── public
│   ├── favicons
│   └── fonts
└── src
    ├── main.jsx
    ├── index.css
    ├── App.jsx
    ├── App.css
    ├── assets
    │   └── lottie
    ├── components
    ├── img
    ├── pages
    ├── styles
    └── lib
```
- assets/lottie - lottie json파일
- public
    - favicons
    - 폰트(otf)
- src
    - components - 라우팅 페이지 외 모든 기능 및 컴포넌트
    - img - 사용되는 모든 이미지
    - pages - 라우팅 페이지
    - styles - CSS(Styled-components 등)
    - lib - 컬러 팔레트
<br>
<br>

### ⚒️ 컨벤션

#### Git Flow

- main ← feature

> - main branch : 배포 및 전체 개발 브랜치 (feature이 merge되는 브랜치)
> - feature branch: 페이지/기능 별 브랜치 (ex. feat/main)

```
git checkout -b feat/main   // feat/main 브랜치 생성 및 이동
git checkout main   // main 브랜치 이동
git push origin feat/main   // feat/main 브랜치에 커밋 푸시
```


#### Commit Style

- Feat : 새로운 기능 추가
- Fix : 버그 수정
- Design : UI(CSS) 수정
- Typing Error : 오타 수정
- Mod : 폴더 구조 이동 및 파일 이름 수정
- Add : 파일 추가 (ex- 이미지 추가)
- Del : 파일 삭제
- Refactor : 코드 리펙토링
- Begin : 프로젝트 세팅

```
git add .   // staging 영역에 모든 변경사항 저장
git add src/pages/Main.jsx   // staging 영역에 Main.jsx의 변경사항 저장
git commit -m "Feat : 메인 페이지 구현"   // <커밋 메시지>와 함께 커밋 생성

// vscode의 '소스 제어' 탭에서 명령어 없이도 add 및 commit 가능
```

#### Code Styling

- camelCase
    - 변수명, 함수명에 적용
    - 첫글자는 소문자로 시작, 띄어쓰기는 붙이고 뒷 단어의 시작을 대문자로
        - ex- handleDelete
    - 언더바 사용 X (클래스명은 허용)