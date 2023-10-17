import Hh1 from "../comm/Hh1";
import Nav from "./nav";
import data from "./dataTaccident.json";
const Taccident = () => {
    // console.log(data.data[0]['사고유형_대분류']);
    let c1 = [];
    c1 = data.data.map((item, idx) => item['사고유형_대분류']);

    // c1 = c1.filter((v,i) => c1.indexOf(v) === i);
    c1 = [...new Set(c1)];
    console.log(c1);

    let c1Tag = c1.map((item, idx) =>
        <li key={`li`+idx}><button>{item}</button></li>
    );
    return (
        <main className="container">
            <article>
                <Hh1 title='도로교통공단_사고유형별 교통사고 통계' />
                <Nav nav={c1Tag}/>
                {/* <Nav nav={c2Tag} /> */}
            </article>
        </main>
    )
}

export default Taccident
