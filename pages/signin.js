import Head from 'next/head'
import Link from 'next/link'

const Signin =() => {
    return (
        <div>
            <Head>
                <title>Entrar</title>
            </Head>

            <form className="mx-auto m-4" style={{maxWidth: '500px'}}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    <small id="emailHelp" className="form-text text-muted">Nunca compartilharemos seu e-mail com mais ninguém.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
               
                <button type="submit" className="btn btn-dark w-100">Login</button>
                <p className="m-2">Você não tem uma conta?<Link href="/register"><a style={{color: 'crimson'}}> Cadastre-se</a></Link></p>
            </form>
        </div>
    )
}

export default Signin;