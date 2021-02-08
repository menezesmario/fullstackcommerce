import Head from 'next/head'
import Link from 'next/link'
import { useState, useContext } from 'react'
import { DataContext} from '../store/GlobalState';
import { postData } from '../utils/fetchData'

const Signin =() => {
    const initialState = { email: '', password: ''}
    const [userData, setUserData] = useState(initialState)
    const {email, password } = userData

    const {state, dispatch} = useContext(DataContext)

    const handleChangeInput = e => {
        const { name, value } = e.target
        setUserData({...userData, [name]:value})
        dispatch({ type: 'NOTIFY', payload: {} })
    }

    const handleSubmit = async e => {
        e.preventDefault()
        dispatch({ type: 'NOTIFY', payload: { loading: true} })

        const res = await postData('auth/register', userData)
        
        if(res.err) return dispatch({ type: 'NOTIFY', payload: {error: res.err} })

        return dispatch({ type: 'NOTIFY', payload: {success: res.msg} })
        
    }
    return (
        <div>
            <Head>
                <title>Entrar</title>
            </Head>

            <form className="mx-auto m-4" style={{maxWidth: '500px'}} onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
                    name="email" value={email} onChange={handleChangeInput} />
                    <small id="emailHelp" className="form-text text-muted">Nunca compartilharemos seu e-mail com mais ninguém.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"
                    name="password" value={password} onChange={handleChangeInput} />
                </div>
               
                <button type="submit" className="btn btn-dark w-100">Login</button>
                <p className="m-2">Você não tem uma conta?<Link href="/register"><a style={{color: 'crimson'}}> Cadastre-se</a></Link></p>
            </form>
        </div>
    )
}

export default Signin;