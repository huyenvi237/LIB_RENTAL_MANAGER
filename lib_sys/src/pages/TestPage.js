import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { TestPageB } from './TestPageB';
import { Button, Container } from "../components/ModalStyle";



/*
function TestPage(){
/*
  const navigate = useNavigate();

  const toTestPageB=()=>{
    navigate('/testpageB',{state:{id:1,name:'sabaoon'}});
  }

  return (
    <>
      <div> <a onClick={()=>{toTestPageB()}}>Component B</a></div>
    </>
  );


    const [id, setId] = useState();
    const loadData = async () => {
      const response = await axios.get("http://localhost:3001/get")
      setId(response.data.data);
    }

    useEffect(() => {
      loadData();
    },[]);
    return (
      <>
        <h1>{id}</h1>
      </>
    )
}
*/


function TestPage() {
  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    setShowModal(prev => !prev);
  }

  return (
    <>
      <Container>
        <Button onClick={openModal}>I'm a modal</Button>
        <TestPageB showModal={showModal} setShowModal={setShowModal} />
      </Container>
    </>
  )
  
}

export default TestPage;