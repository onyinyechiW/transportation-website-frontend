import {useState} from "react"
import'../loginPage/Login.css'
import my_log_in from '../loginPage/images/driving.jpg'

const Login = () =>{
    const IntialValue ={
        emailAddress:"",
        password:""
    }
    const[data,setData] = useState(IntialValue)

    const CollectIntialValue = async (event) =>{
        event.preventDefault();

        setData((state)=>({
            ...state,
            [event.target.name]: event.target.value
        }))
    }
    const handlesubmit = async (event) =>{
        event.preventDefault();
        const LoginData ={
            emailAddress:data.emailAddress,
            paassword:data.password
        }
        console.log(LoginData)

    }
    return(
        <div className="Big-container">
            <div className="login-contain">
                <div><img src={my_log_in} alt="login"></img></div>
                <div className="my-form">
                   <h1>Login</h1>
                 <form className="form" onSubmit={handlesubmit}>
                    <input type="email" name="email" placeholder="EmailAdress" onChange={CollectIntialValue} /><br/>
                    <input type="password" name="password" placeholder="Password" onChange={CollectIntialValue} /><br/>
                    <button className="submtBtn" onClick={handlesubmit}>login</button>

                 </form>
                </div>
            </div>

        </div>
    )
    


}
export default Login