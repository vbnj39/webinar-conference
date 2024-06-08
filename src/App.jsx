import { useEffect, useState } from 'react'
import './App.css'
import { Top } from './top/top'
import { Major } from './major/major'
import { Footer } from './footer/footer'
import { Pointer } from './pointer/pointer'
import InitGif from './initial.gif';

function App() {

  const [initial, setInitial] = useState(false);

  useEffect(()=>{
    setTimeout(() => {
      setInitial(true);
    }, 4000);
  }, [initial]);
  

  const [joinM, setJoinM] = useState(`Join`);

  const [showPointer, setShowPointer] = useState(false);

  const [spinnerrr, setSpinner] = useState(false);

  const pointer_handler = ()=>{
    setTimeout(() => {
      setSpinner(true);
      setJoinM('Loading');
      setShowPointer(false);

      setTimeout(() => {
        setSpinner(true);
        setJoinM('Detecting Operating System');
        setShowPointer(false);

        setTimeout(() => {
          setSpinner(true);
          setJoinM('Detected OS');
          setShowPointer(false);

          setTimeout(() => {
            setSpinner(true);
            setJoinM('Authorising Device');
            setShowPointer(false);

            setTimeout(() => {
              setSpinner(true);
              setJoinM('Connecting to Meeting');
              setShowPointer(false);

              setTimeout(() => {
                setSpinner(false);
                setJoinM('initializing');
                setShowPointer(true);


              }, 2000);
            }, 2000);
          }, 2000);
        }, 2000);
      }, 2000);
    }, 1000);
  }

  return (
    <>


      { !initial ?
      <>
        <section className='ini_wrappe__r'>
          <img src={InitGif} alt='preloader' className='preloader' />
          <p className='checkup'> Security Check up... </p>
        </section>
      </>



          :

      <>
        <Top showPointer={showPointer} />

        { !showPointer ?

          <Major 
            joinM={joinM}
            spinnerrr={spinnerrr}
            pointer_handler={pointer_handler}          
          />

          :

          <Pointer />
        }

        <Footer />
      </>
      }



    </>
  )
}

export default App
