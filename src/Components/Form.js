import React from 'react'

function Form() {
  return (
    <div className='container' id='contact'>
       <form>
       <div className='row g-4 text-center justify-content-center'>
           <div className='col-lg-12'>
              <h1 className='mt-5'>Contact us</h1>
              <hr/>
              <p>OpenAI has made several versions of the GPT model, starting with
              GPT-1, and iterating through GPT-2 and GPT-3. While GPT-3 was a
              significant advancement.</p>
           </div>
           <div className='col-lg-5'>
              <input type='text' className='form-control' placeholder='Name'/>
           </div>
           <div className='col-lg-5'>
              <input type='email' className='form-control' placeholder='Email'/>
           </div>
           <div className='col-lg-10'> 
           <textarea name='' placeholder='Message' className='form-control' cols='30' rows='5'>
            
           </textarea>
           </div>
           <div className='col-lg-10 d-grid'>
            <button className='btn btn-primary'>Submit</button>
           </div>
        </div>
       </form>
    </div>
  )
}

export default Form