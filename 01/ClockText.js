import { useState, useEffect } from "react";

const ClockText = () => {
    const [dt, setDt] = useState(new Date().toLocaleTimeString());

    // 처음 한번만 실행
    useEffect(() => {
        const t = setInterval(() => {
            setDt(new Date().toLocaleTimeString())
        }, 1000)

        return () => {clearInterval(t)}
    }, []); 

    // 특정 변수가 바뀔 때 실행
    useEffect(() => {
        console.log(dt);
    }, [dt]);
    // let dt = new Date().toLocaleTimeString();
    // setInterval(() => {
    //     dt = new Date().toLocaleTimeString();
    //     console.log(dt);
    // }, 1000)
    return (
        <>
            <div>
                Hello, React !!
            </div>
            <div>현재 시간 : {dt}</div>
        </>
    );
}

export default ClockText;