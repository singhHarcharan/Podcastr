import GoogleButton from 'react-google-button'

export default function Login() {
    return (
        <div className="login-page"
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                // backgroundColor: "#f5f5f5"
                background: "url('https://c4.wallpaperflare.com/wallpaper/738/744/882/music-vinyl-simple-background-minimalism-wallpaper-preview.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}>
            <div className="login-container"
                style={{
                    width: "400px",
                    height: "400px",
                    padding: "20px",
                    backgroundColor: "white",
                    borderRadius: "8px",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                }}>
                <h2>Login</h2>
                <form
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                        width: "100%"
                    }}  >
                    <div className="form-group" style={{display: "flex", flexDirection: "column", gap: "10px"}}>
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" style={{border: "1px solid #ccc", borderRadius: "4px", padding: "10px"}} id="username" placeholder="Enter username" />
                    </div>
                    <div className="form-group" style={{display: "flex", flexDirection: "column", gap: "10px"}}>
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" style={{border: "1px solid #ccc", borderRadius: "4px", padding: "10px"}} id="password" placeholder="Enter password" />
                    </div>
                    <button type="submit" className="btn btn-primary" style={{backgroundColor: "#F18774", border: "none", padding: "10px", borderRadius: "4px", cursor: "pointer", width: "100%"}}>Login</button>
                </form>
                <div className="signup-link"
                    style={{
                        marginTop: "10px",
                        textAlign: "center"
                    }}>
                    Don't have an account? <a href="/signup">Sign Up</a>
                </div>
                <div className="signin-with-google"
                    style={{
                        marginTop: "10px",
                        textAlign: "center",
                        cursor: "pointer",
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                    <GoogleButton
                        onClick={() => { console.log('Google button clicked') }}
                    />
                </div>
            </div>
        </div>
    );
}