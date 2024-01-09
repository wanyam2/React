import "./body.css";

const body = () =>  {
    return (
    <div className="Body">
        <input type = "text" id = "user_id" size = "10" placeholder="아이디"></input>
        <input type = "password" id = "user_pw" size = "10" placeholder="비밀번호"></input>
        <input type = "submit" value="login"></input>
    </div>
    );
}

export default body;