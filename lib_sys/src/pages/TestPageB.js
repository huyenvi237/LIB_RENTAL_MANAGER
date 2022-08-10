import {useLocation} from 'react-router-dom';
import React, { useRef, useEffect } from 'react';
import { useSpring, animated } from 'react-spring'; 
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

/*
function TestPageB() {

    const location = useLocation();
    const id = location.state.id;
    return (

        <>
            <h1>{id}</h1>

        </>
    )
}
*/
const Background = styled.div`
    width: 100%;
    heigth: 100%;
    background: rgba(0,0,0 0.8);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items:center;
`

const ModalWrapper = styled.div`
    width: 800px;
    height: 500px;
    box-shadow: 0 5px 16px rgba(0,0,0,0.2);
    background: #fff;
    color: #000;
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
    z-index: 10;
    border-radius: 10px;
`

const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-item: center;
    line-height: 1.8;
    color: #141414;

    p {
        margin-bottom: 1rem;
    }

    button {
        padding: 10px 24px;
        background: #141414;
        color: #fff;
        border: none;
    }
`

const CloseModalButton = styled(MdClose)`
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 32px;
    height: 32px;
    padding:0;
    z-index: 10;
`



export const TestPageB = ({ showModal, setShowModal }) => {

    const modalRef = useRef();
    const animation = useSpring({
        config: {
            duration: 250
        }, 
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0%)` : `translateY(-100%)`
    })

    const closeModal = e => {
        if(modalRef.current === e.target) {
            setShowModal(false);
        }
    }
    return (
        <>
            {showModal ? (
                <Background ref={modalRef} onClick={closeModal}>
                {/*<Background>*/}
                    <animated.div style={animation}>
                        <ModalWrapper showModal={showModal}>
                            <ModalContent>
                                <h1>Are you ready?</h1>
                                <p>Get something here</p>
                                <button>Join now</button>
                            </ModalContent>
                            <CloseModalButton 
                                aria-label='Close modal'
                                onClick={() => setShowModal(prev => !prev)}
                            />
                        </ModalWrapper>
                    </animated.div>
                </Background>
            )
            :
            null }
        </>
    )
}

//export default TestPageB;