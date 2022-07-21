import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate();
    const loginBack= (() => {
        navigate("/")
    })
    
    return (
        <div
        style={{
            textAlign:"center",
            fontSize:25,
            fontWeight:"bold",
            padding:25
        }}
        >
            <p style={{color: "red"}}>You've been log out. Please sign in again. </p>
            <button 
                onClick={loginBack}
                style={{
                    borderColor:"#66BFBF",
                    borderRadius:10
                }}
            >
                    ログインページへ
            </button>
        </div>
    )
}

export default ErrorPage;