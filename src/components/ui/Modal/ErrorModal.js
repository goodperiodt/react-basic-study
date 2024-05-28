import React from "react";
import styles from "./ErrorModal.module.css";
import Card from "../Card";
import Button from "../Button/Button";
// portal 기능을 사용하기 위한 import
import ReactDOM from "react-dom";

const BackDrop = ({ onConfirm }) => {
  return <div className={styles.backdrop} onClick={onConfirm} />;
};

const ModalOverlay = ({ title, message, onConfirm }) => {
  return (
    // return을 반드시 해주어야 한다.
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{title}</h2>
      </header>
      <div className={styles.content}>
        <p>{message}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
};

// Modal을 사용하는 쪽에서 모달 제목과 메세지가 props로 전달될 것이다.
// onConfirm -> AddUsers쪽에서 상태관리하고 있는 모달 노출 여부를 제어하는 함수.
const ErrorModal = ({ title, message, onConfirm }) => {
  return (
    <>
      {/* 모달의 뒷 배경을 클릭하면 error 객체가 null이 되면서 모달창이 닫힌다. */}
      {/* ErrorModal안에 backdrop, Card, body도 모두 합쳐서 있기 때문에 분리한다. */}

      {/* ReactDOM.createPortal() 함수로 portal을 생성하고,
      컴포넌트와 해당 컴포넌트가 구현될 요소를 작성해준다.  */}
      {ReactDOM.createPortal(
        <BackDrop onConfirm={onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay title={title} message={message} onConfirm={onConfirm} />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default ErrorModal;
