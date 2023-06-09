import React, {useState} from 'react'
import axios from 'axios'


const baseUrl = process.env.REACT_APP_BASE_URL

const Login = () => {

    const [formData, setFormData] = useState({
        userName:'salam',
        password: 'salam'
    }) 

    const getInputValue = (e:{target:{name:string, value: string}})=>{

        setFormData({...formData, [e.target.name]: e.target.value})
        console.log('formData:  ',formData)
    }

    const sendData = ()=> {
axios.post(`${baseUrl}/login`, formData,
{
      
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin': '*'
    },
  
}
 )
.then(res=>console.log(res))
    }



  return (
    <div className='flex items-center justify-center h-screen'>
        <div className="w-full max-w-xs">
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
        Username
      </label>
      <input onChange={getInputValue}  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" name='userName'/>
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
        Password
      </label>
      <input onChange={getInputValue} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" name='password'/>
      <p className="text-red-500 text-xs italic">Please choose a password.</p>
    </div>
    <div className="flex items-center justify-between">
      <button onClick={sendData} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Sign In
      </button>
      <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        Forgot Password?
      </a>
    </div>
  </form>
  <p className="text-center text-gray-500 text-xs">
    &copy;2020 Acme Corp. All rights reserved.
  </p>
</div>
    </div>
  )
}

export default Login