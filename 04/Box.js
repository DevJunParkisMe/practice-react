import { useState, useEffect } from "react";
import style from './Box.module.css';
const Box = () => {
    const [boxList, setBoxList] = useState();
    const [listTag, setListTag] = useState();
    const [detail, setDetail] = useState();
    const showDetail = (item) => {
        console.log(item)
        setDetail("영화명: " + item.movieNm + ", 개봉일: " + item.openDt);
    }

    // 컴포넌트 생성 시 한번만 실행 
    useEffect(() => {
        let url = "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20230908"
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                setBoxList(data.boxOfficeResult.dailyBoxOfficeList);
            })
            .catch(err => console.log(err));
    }, []);

    // state 변수가 변경될 때마다 실행
    useEffect(() => {
        console.log(boxList);
        if (boxList) {
            setListTag(boxList.map((item, idx) =>
                <tr key={'mv'+idx}>
                    <td>{item.rank}</td>
                    <td onClick={() => showDetail(item)}>{item.movieNm}</td>
                    <td>{parseInt(item.salesAmt).toLocaleString('ko-KR')}</td>
                    <td>{
                        item.rankInten == 0 
                        ? "-" 
                        : item.rankInten > 0 
                            ? "▲ " + item.rankInten
                            : "▼ " + Math.abs(item.rankInten)
                        }</td>
                </tr>
            ));
        }
    }, [boxList])

    return (
        <main className="container">
            <article>
                <header><h1>일일 박스 오피스</h1></header>
                <table>
                    <thead>
                        <tr>
                            <th>순위</th>
                            <th>영화명</th>
                            <th>매출액</th>
                            <th>증감</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listTag}
                    </tbody>
                </table>

                <footer>
                    <div className={style.detail}>{detail}</div>
                </footer>
            </article>
        </main>
    );
}

export default Box;