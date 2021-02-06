import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

const Register =() => {
    const initialState = { name: '', email: '', password: '', cf_password: '' }
    const [userData, setUserData] = useState(initialState)
    const {name, email, password, cf_password } = userData

    const handleChangeInput = e => {
        const { name, value } = e.target
        setUserData({...userData, [name]: value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log(userData)
    }
    return (
        <div>
            <Head>
                <title>Registrar</title>
            </Head>

            <form className="mx-auto m-4" style={{maxWidth: '500px'}} onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name"
                    name="name" value={name} onChange={handleChangeInput}/>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                    name="email" value={email} onChange={handleChangeInput} />
                    <small id="emailHelp" className="form-text text-muted">Nunca compartilharemos seu e-mail com mais ninguém.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"
                    name="password" value={password} onChange={handleChangeInput} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword2">Confirm Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword2"
                    name="cf_password" value={cf_password} onChange={handleChangeInput} />
                </div>
               
                <button type="submit" className="btn btn-dark w-100">Registrar</button>
                <p className="m-2">
                    Você já tem uma conta?<Link href="/signin"><a style={{color: 'crimson'}}> Entre!</a></Link></p>
            </form>
        </div>
    )
}

export default Register;