import './css/managesurvey.css';
import search from '../images/search.png';
import filter from '../images/filter.png';
import Chat from './chat';

const createdSurvey = [
    { id: 1, name: "생성한 설문 제목 1", ddate: "2023/04/23 (진행중)"},
    { id: 2, name: "생성한 설문 제목 2", ddate: "2023/05/04 (진행중)"},
    { id: 3, name: "생성한 설문 제목 3", ddate: "2023/02/24 (마감)"}
];

const answeredSurvey = [
    { id: 1, name: "응답한 설문 제목 1", ddate: "2023/04/25 (진행중)"},
    { id: 2, name: "응답한 설문 제목 2", ddate: "2023/05/02 (진행중)"},
    { id: 3, name: "응답한 설문 제목 3", ddate: "2023/02/11 (마감)"}
]
const Managesurvey = () => {
    return (
        <div className='background1'>
            <h2>생성한 설문 목록</h2><br />
            <table>
                <colgroup>
                    <col className="col1" />
                    <col className="col2" />
                    <col className="col3" />
                    <col className="col4" />
                    <col className="col5" />
                    <col className="col6" />
                    <col className="col7" />
                </colgroup>
                <thead>
                    <tr>
                        <th style={{ textAlign: 'left' }}><img src={search} alt="돋보기"/><button>검색</button>&nbsp;&nbsp;&nbsp;<img src={filter} alt="필터"/><button>필터</button></th>
                    </tr>
                </thead>
                <tbody>
                    {createdSurvey.map((survey) => (
                        <tr key={survey.id}>
                            <td>Q{survey.id}</td>
                            <td>{survey.name}</td>
                            <td>
                                <button>통계</button>
                            </td>
                            <td>
                                <button>수정</button>
                            </td>
                            <td>
                                <button>삭제</button>
                            </td>
                            <td>
                                <button>공유</button>
                            </td>
                            <td>{survey.ddate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h2><br/><br/>응답한 설문 목록</h2><br />
            <table>
                <colgroup>
                    <col className="col1" />
                    <col className="col2" />
                    <col className="col3" />
                    <col className="col4" />
                    <col className="col5" />
                    <col className="col6" />
                    <col className="col7" />
                </colgroup>
                <thead>
                    <tr>
                        <th style={{ textAlign: 'left' }}><img src={search} alt="돋보기"/><button>검색</button>&nbsp;&nbsp;&nbsp;<img src={filter} alt="필터"/><button>필터</button></th>
                    </tr>
                </thead>
                <tbody>
                    {answeredSurvey.map((survey) => (
                        <tr key={survey.id}>
                            <td>Q{survey.id}</td>
                            <td>{survey.name}</td>
                            <td>
                                <button>통계</button>
                            </td>
                            <td>
                                <button>수정</button>
                            </td>
                            <td>
                                <button>삭제</button>
                            </td>
                            <td>
                                <button>공유</button>
                            </td>
                            <td>{survey.ddate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Chat></Chat>
        </div>
    );
}

export default Managesurvey;
