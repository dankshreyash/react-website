import React from 'react'

function Contact() {
    return (
        <div className='contact'>
            <main>
                <h1>contact us</h1>
                <form>
                    <div>
                        <label>Name</label>
                        <input type='text' required placeholder='abc' />
                    </div>


                    <div>
                        <label>Email</label>
                        <input type='email' required placeholder='abc@xyz.com' />
                    </div>



                    <div>
                        <label>Mesage</label>
                        <input type='text' required placeholder='Tell us about your query' />
                    </div>





                <button  type='submit'>Submit</button>
                </form>
            </main>
        </div>
    )
}

export default Contact