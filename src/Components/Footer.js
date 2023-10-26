import React from 'react'

function Footer() {
  return (
   <div id='footer' className='mt-5'>
     <div className='footer-top'>
       <div className='container mt-5'>
          <div className='row g-4'>
            <div className='col-md-4 '>
                <img src='/logo192.png'/>
            </div>
            <div className='col-md-2 text-white'>
               <h3 className='text-white'>Brand</h3>
               <ul className='list-unstyled'>
                <li><a>Home</a></li>
                <li><a>About</a></li>
                <li><a>Service</a></li>
                <li><a>Carrier</a></li>
               </ul>
            </div>
            <div className='col-md-2 text-white'>
               <h3 className='text-white'>Brand</h3>
               <ul className='list-unstyled'>
                <li><a>Home</a></li>
                <li><a>About</a></li>
                <li><a>Service</a></li>
                <li><a>Carrier</a></li>
               </ul>
            </div>
            <div className='col-lg-4 text-white'>
               <h3 className='text-white'>Brand</h3>
               <ul className='list-unstyled'>
                <li><a>Home</a></li>
                <li><a>About</a></li>
                <li><a>Service</a></li>
                <li><a>Carrier</a></li>
               </ul>
            </div>
          </div>
       </div>
    </div>
    <div className='footer-bottom'>
      <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    @copy Wright privacy terms & conditions
                </div>
                <div className='col-md-6'>
                <div className='social-icons '>
                    <a><i class="fa fa-facebook-official" aria-hidden="true"></i></a>
                    <a><i class="fa fa-whatsapp" aria-hidden="true"></i></a>
                    <a><i class="fa fa-twitter" aria-hidden="true"></i></a>
                    <a><i class="fa fa-envelope" aria-hidden="true"></i></a>
                </div>
                </div>
            </div>
      </div>
    </div>
   </div>
  )
}

export default Footer