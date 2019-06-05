import React from 'react';

class Login extends React.Component {

  render() {
    
    return (
      <div style={{ height: '100vh', overflowY: 'hidden' }}>
        <div className="header">
          <span className="header__title">Organigrama</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <form className="form-signin" style={{ width: "400px", height: "480px", padding: '70px 40px', margin: '120px 40px', border: 'solid 1px lightgrey', borderRadius: '2px' }}>
            {/* <img className="mb-4" src="/" alt="logo" style={{width:"72", height:"72"}}/> */}
            <h1 className="h3 mb-3 font-weight-normal">Identificate</h1>
            <label htmlFor="inputEmail" className="sr-only">Usuario</label>
            <input type="email" id="inputEmail" className="form-control" placeholder="Usuario" required=""  style={{ marginTop: '10px' }} />
            <label htmlFor="inputPassword" className="sr-only">Contraseña</label>
            <input type="password" id="inputPassword" className="form-control" placeholder="Contraseña" required="" style={{ marginTop: '20px' }} />
            <div className="checkbox mb-3">
              {/* <label>
              <input type="checkbox" value="remember-me" style={{marginTop:'20px'}}/> Remember me
            </label> */}
            </div>
            <button className="btn btn-lg btn-primary btn-block" type="submit" style={{ marginBottom: '30px' }}>Acceder</button>
            <button className="btn btn-lg btn-primary btn-block" id="google-signup" style={{ display: 'block', marginBottom: '30px', backgroundColor:'grey', border: 'none' }}>
               <i className="fab fa-google" aria-hidden="true" style={{ paddingRight: '10px' }}></i> 
              Sign up with Google </button>
            <small className="mt-5 mb-3 text-muted" style={{ fontSize: '10px' }} >BBVA IT © TODOS LOS DERECHOS RESERVADOS</small>
          </form>
        </div>
      </div>
    )
  }
}
export default Login;