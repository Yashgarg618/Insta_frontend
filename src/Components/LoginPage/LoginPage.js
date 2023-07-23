import React,{Component} from "react";
import Grid from "@material-ui/core/Grid";
import './LoginPage.css';
import inst_image from "../../images/9364675fb26a.svg"
import insta_logo from "../../images/logoinsta.png"
import fb from '../../images/fb.png';
import appstore from '../../images/app.png';
import playstore from '../../images/play.png';
class LoginPage extends Component{
    constructor(props){
        super(props);
        this.state={}
    }
    render(){
        return(
            <div>
                <Grid container>
                    <Grid item xs={3}>
                    </Grid>
                    <Grid item xs={6}>
                        <div className="loginpage_main">
                            <div>
                                <img src={inst_image} width="450"/>
                            </div>
                        <div>
                        <div className='loginpage_rightcomponent'>
                        <img className="loginpage_logo" src={insta_logo} />
                            <div className="loginpage_signin">
                                <input className="loginpage_text" type="text"placeholder="Phone number, email or username"/>
                                <input className="loginpage_text" type="password"placeholder="Password"/>
                                <button className="login_button">Sign In</button>
                            </div>
                            <div className="login__ordiv">
                                <div className="login__dividor"></div>
                                <div className="login__or">OR</div>
                                <div className="login__dividor"></div>
                            </div>
                            <div className="login_fb">
                                <img src={fb} width="15px" style={{"marginRight":"5px"}}/>Log in with Facebook</div>
                                <div className="login_forgot">Forgot Password?</div>
                            
                        </div>
                        
                        <div className="loginpage__signupoption">
                            <div className="loginPage__signin">
                            Don't have an account? Sign up
                            </div>
                            <div className="loginpage__signup">
                            Get the app.
                            </div>
                            <div className="loginPage__option">
                                <img className="loginPage__dwing" src={appstore} width="136px" style={{ marginRight: '10px' }}/>
                                <img  src={playstore} width="136px"/>
                            </div>
                        </div>
                        </div>
                        </div>
                    </Grid>
                    <Grid item xs={3}>

                    </Grid>
                </Grid>
                </div>
        )
    }
}
export default LoginPage;