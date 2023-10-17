import MyComN from "./MyComN";
const MyCom = () => {
    let n = 10 ;
    // let comTag;
    // if (n === undefined) {
    //     comTag = <div>값이 없습니다.</div>;
    // }
    // else {
    //     comTag = <MyComN num={n} n1={n*2} />;
    // }

    return (
        <main className="container">
            <article>
                <header>
                    MyCom
                </header>
                { // 삼항연산자
                /* {
                    n === undefined 
                    ? <div>값이 없습니다.</div> 
                    : <MyComN num={n} n1={n*2}/>
                } */}
                { // 변수
                /* {comTag} */}

                {// falsy 연산
                    // n && <MyComN num={n} n1={n*2}/>
                }
            </article>
        </main>
    );
}

export default MyCom;