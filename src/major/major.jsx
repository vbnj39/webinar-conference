
import { useState } from 'react';
import './major.css';
// import '../zoomnav/zoomnav.css'
import spinner from '../spin.gif'

export const Major = ({ joinM, spinnerrr, pointer_handler })=>{

    const femalePassport_url = `https://media.istockphoto.com/id/1432253979/photo/headshot-portrait-of-attractive-mixed-race-female-with-stylish-makeup.jpg?s=2048x2048&w=is&k=20&c=ZS4tqCo6jg83qOIY8IcR-xK59yh-qz8qMn7V-8eNOCM=`;

    const male_female_passport_url = `https://media.istockphoto.com/id/1321917819/photo/portrait-of-man-in-glasses-looking-at-camera.jpg?s=612x612&w=0&k=20&c=ZvE-mOrGtDbW8wCdGnWZ_YeoZxcoKEg_UPoX199XqcA=`
    
    

    return(<>
        <article className='user_wrapper_online'>

            <div className='user_details'>
                <img 
                    alt='user_online'
                    className='user_online'
                    src={male_female_passport_url}
                />

                <p className='office'>
                    Mr. Basma Gamila Dalia<br />
                    General Manager
                </p>
            </div>


            <div className='user_details'>
                <img 
                    alt='user_online'
                    className='user_online'
                    src={femalePassport_url}
                />

                <p className='office'>
                    Mrs. Nouf Amani <br />
                    Sales Representative
                </p>
            </div>


        </article>


        <div className='join_wrappe___r'>
            
            <button className='btn_join' onClick={pointer_handler}>
                { spinnerrr ? <img 
                    alt='spinner'
                    src={spinner}
                    className='spinner'
                /> : null }

                &#160;
                &#160;
                
                {joinM}
            </button>

        </div>


        <p className='onlinne' style={{
            marginTop:'45px'
        }}>
            If you are unable to join the meeting, visit 
            &#160;
            <span style={{color:'#2d8cff', fontWeight:'bold', cursor:'pointer', }} className='und'>zoom support Cennter</span> 
            &#160;
            
            for useful information
        </p>

    </>)
};