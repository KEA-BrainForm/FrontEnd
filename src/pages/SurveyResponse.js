import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './css/pages.css';

function SurveyResponse() {
    const [selectedCheckbox, setSelectedCheckbox] = useState(null);

    const handleCheckboxChange = (event) => {
        const value = event.target.value;
        setSelectedCheckbox(value === selectedCheckbox ? null : value);

    };

    return (
        <div className='background'>
            <div className='home-card'>
                <h1>설문조사 제목</h1> <br/>
                <form>
                    <div>
                    <h4>Q.1 주관식 질문</h4>
                    <input type='text'></input>
                    </div> <br/>

                    <div>
                    <h4>Q.2 친부식 질문</h4>
                    <label>
                        <input
                            type='checkbox'
                            name='myCheckbox'
                            value='true'
                            checked={selectedCheckbox === 'true'}
                            onChange={handleCheckboxChange}
                            required
                        />
                        참
                    </label>
                    <label>
                        <input
                            type='checkbox'
                            name='myCheckbox'
                            value='false'
                            checked={selectedCheckbox === 'false'}
                            onChange={handleCheckboxChange}
                            required
                        />
                        거짓
                    </label> 
                    </div>
                    <br/>

                    <div>
                    <h4>Q.3 객관식 질문</h4>
                    <label>
                        <input
                            type='checkbox'
                            name='myCheckbox'
                            value='1'
                            checked={selectedCheckbox === '1'}
                            onChange={handleCheckboxChange}
                            required
                        />
                        매우 그렇다
                    </label>
                    <label>
                        <input
                            type='checkbox'
                            name='myCheckbox'
                            value='2'
                            checked={selectedCheckbox === '2'}
                            onChange={handleCheckboxChange}
                            required
                        />
                        그렇다
                    </label>
                    <label>
                        <input
                            type='checkbox'
                            name='myCheckbox'
                            value='3'
                            checked={selectedCheckbox === '3'}
                            onChange={handleCheckboxChange}
                            required
                        />
                        보통
                    </label>
                    <label>
                        <input
                            type='checkbox'
                            name='myCheckbox'
                            value='4'
                            checked={selectedCheckbox === '4'}
                            onChange={handleCheckboxChange}
                            required
                        />
                        아니다
                    </label>
                    <label>
                        <input
                            type='checkbox'
                            name='myCheckbox'
                            value='5'
                            checked={selectedCheckbox === '5'}
                            onChange={handleCheckboxChange}
                            required
                        />
                        매우 아니다
                    </label>
                    </div>
                </form>
                <br/>
                <Link to="/survey-complete">
                    <button className="signupbutton" type="submit">제출하기</button>
                </Link>
            </div>
  
        </div>
    );
}

export default SurveyResponse;
