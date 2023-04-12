import styles from './Modal.module.css';
import { createPortal } from 'react-dom';

const Backdrop = (props) => {
    return (
        <div className={styles.backdrop} />
    );
};

const ModalOverlay = (props) => {
    return (
        <div className={styles.modal}>
            <div className={styles.content}>
                {props.children}
            </div>
        </div>
    );
};


const portalElement=document.getElementById('overlays');
const Modal = (props) => {
    return (
        <>
        {createPortal( <Backdrop />,portalElement)}
        {createPortal(  <ModalOverlay>{props.children} </ModalOverlay>,portalElement)}
        </>
    )
};


export default Modal;