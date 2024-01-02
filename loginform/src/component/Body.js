import { useRef, useState } from "react";

function Body() {
    const [ text, setText ] = useState("");
    const [ change, setChange ] = useState(false);

    const textRef = useRef();

    const handleOnchange = (e) => {
        setText(e.target.value);
    };

    const handleOnClick = () => {
        setChange(text.length < 5 ? "다시 입력해주세요" : "통과되었습니다");
    };

    return (
        <div>
            <input ref = {textRef} value = {text} onChange = {handleOnchange} />
            <button onClick = {handleOnClick}>작성완료</button>
            <div style = {{color: "red"}}>{change}</div>
        </div>
    )
}

export default Body;
