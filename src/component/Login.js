import React from "react";
import { Form, Input, Button, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link,useHistory} from "react-router-dom";
import axios from "axios";

import { BASE_URL } from "../constants";

function Login(props) {
    const { handleLoggedIn } = props;
    // const history=useHistory();

    const onFinish = (values=[123,123]) => {
        //step 1 collect data
        //step 2 send login request to server
        //step 3
        const { username, password } = values;
        if(username==123&&password==123){
        message.success("Login succeed!");
            const flag=true;
        }
        else{
            console.log("login failed: ");
            message.error("Login failed!");
        }
    }
    //     const opt = {
    //         method: "POST",
    //         url: `${BASE_URL}/signin`,
    //         data: {
    //             username: username,
    //             password: password
    //         },
    //         headers: { "Content-Type": "application/json" }
    //     };
    //     axios(opt)
    //         .then((res) => {
    //             if (res.status === 200) {
    //                 const { data } = res;
    //                 handleLoggedIn(data);
    //                 message.success("Login succeed! ");
    //             }
    //         })
    //         .catch((err) => {
    //             console.log("login failed: ", err.message);
    //             message.error("Login failed!");
    //         });
    // };

    return (
        <Form name="normal_login" className="login-form" onFinish={onFinish}>
            <Form.Item
                name="username"
                rules={[
                    {
                        required: true,
                        message: "Please input your Username!"
                    }
                ]}
            >
                <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Username"
                />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                    {
                        required: true,
                        message: "Please input your Password!"
                    }
                ]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>

            <Form.Item>
                {/*<Button type="primary" htmlType="submit" className="login-form-button" onClick={()=>history.push("/explore")}>*/}
                {/*    Log in*/}
                {/*</Button>*/}
                <Link to="/explore">login</Link>
            </Form.Item>
            <Form.Item>
                Or <Link to="/register">register now!</Link>
            </Form.Item>
        </Form>
    );
}

export default Login;

