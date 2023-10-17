import style from './Lotto.module.css';
import { useState, useEffect } from 'react';
import LottoNums from './LottoNums';
const Lotto = () => {
    // let numArr = [];
    // const [lottoTag, setLottoTag] = useState([]);

    // const getNum = () => {
    //     numArr = [];
    //     while (numArr.length !== 7) {
    //         let num = Math.floor(Math.random() * 45) + 1;
    //         if (!numArr.includes(num)) numArr.push(num);
    //     }
    //     console.log(numArr);

    //     // lottoTag = numArr.map((item) => 
    //     // <div className={style.lottoNum}>{item}</div>
    //     // );

    //     setLottoTag(numArr.map((item) =>
    //         <div className={style.lottoNum}>{item}</div>
    //     ));
    //     console.log(lottoTag);
    // }
    const [nums, setNums] = useState();
    const buttonClick = () => {
        let temp = [];
        while(temp.length < 7) {
            let n = Math.floor(Math.random() * 45) + 1;
            if (temp.indexOf(n) < 0) temp.push(n);
        }

        setNums(temp);
    }
    useEffect(() => {
        console.log("nums = ", nums);
    }, [nums])


    return (
        <main className="container">
            <article>
                <header>
                    <h1>로또 생성기</h1>
                </header>
                <div className={style.lottoBox}>
                   { nums ? <LottoNums nums={nums}/> : "숫자가 없습니다"}
                </div>
                <footer>
                    {/* <button onClick={getNum}>생성하기</button> */}
                    <button onClick={() => buttonClick()}>생성하기</button>
                </footer>
            </article>
        </main>
    );
}

export default Lotto;