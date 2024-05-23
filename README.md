# 리액트 프로젝트 시작하기

1. node.js 설치 (LTS 버전으로)
2. create-react-app 설치 (최초 1번)

- `$ npm install -g create-react-app`

3. react 프로젝트 생성

- `$ npx create-react-app 프로젝트이름`

4. react 프로젝트 실행

- `$ cd 프로젝트 폴더` `$ npm start`

# git clone시 주의사항

`$ npm install` 명령을 터미널에서 실행하여 node_modules 폴더(라이브러리)를 설치한다.
이유: node_modules 폴더는 github에 포함되어 있지 않기 때문에 다른 환경에서는 라이브러리 다운로드 및 설치가 필요하다.

# 추가 라이브러리 설치

1. styled-components: 동적 css 처리를 도와주는 라이브러리

- `$ npm install styled-components`

2. css 확장 라이브러리 sass

- `$ npm install sass`
