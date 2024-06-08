
import { ZoomNav } from '../zoomnav/zoomnav';
import './top.css';
import { IoSearchSharp } from "react-icons/io5";


export const Top = ({ showPointer })=>{
    
    return(<>
        <div className="top">
            <div className='tp_contn__t'>

                        <IoSearchSharp className='search_ico__n'/>
                <div className='tp_contn__tfjffh'>
                    <span>
                    </span>

                    <span 
                        style={{
                        cursor:'pointer'
                        }}
                        className='con_cont'
                    >
                        
                        Search
                    </span>
                    &#160;
                    &#160;
                    &#160;

                    <span style={{cursor:'pointer'}}>Support</span>
                    &#160;
                    &#160;
                    &#160;

                    <span style={{cursor:'pointer'}}>1.888.799.9666</span>
                    &#160;
                    &#160;
                    &#160;

                    <span style={{cursor:'pointer'}}>Request a Demo</span>
                </div>

            </div>

        </div>


        <ZoomNav showPointer={showPointer} />

    </>)
};