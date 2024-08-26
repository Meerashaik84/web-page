//import React from 'react'
import '../css/Login.css/'

export default function Login() {
  return (
    <div>
        <div className="container h-80">
<div className="row align-items-center h-100">
    <div className="col-3 mx-auto">
        <div className="text-center">
            <img id="profile-img" className="rounded-circle profile-img-card" src="https://i.imgur.com/6b6psnA.png" />
            <p id="profile-name" className="profile-name-card"></p>
            <form  className="form-signin">
                
            
                <input type="password" name="password" id="inputPassword" className="form-control form-group" placeholder="password" required />
                <button className="btn btn-lg btn-primary btn-block btn-signin" type="submit">enter</button>
            </form>
        </div>
    </div>
</div>
</div>
      
    </div>
  )
}
