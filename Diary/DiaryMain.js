import React, { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import DiaryList from './DiaryList';
const DiaryMain = () => {
    const [diaryEntry, setDiaryEntry] = useState('');
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [writer, setWriter] = useState("");
    const [diaryList, setDiaryList] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const handleDiaryChange = (event) => {
      setDiaryEntry(event.target.value);
    };
    const handleDateChange = (date) => {
      setSelectedDate(date);
      searchDiaryByDate(date);
    };
    
    const handleWriterChange = (event) => {
        setWriter(event.target.value);
    };

    const handleAllClick = () => {
        if (refresh)
            setRefresh(false)
        else
            setRefresh(true)
    }
    const saveDiaryEntry = async () => {
        
        const formattedDate = formatDate(selectedDate);
        
        // 새로운 일기 항목 생성
        console.log("Request Payload:", JSON.stringify({ content: diaryEntry, regiDate: formattedDate }));
        try {
            const response = await fetch('/api/add', {
                method: 'POST',
                headers : {
                    'Content-Type' : 'application/json' 
                },
                body : JSON.stringify({content : diaryEntry, regiDate : formattedDate, writer: writer})
            });

            if (response.ok) {
                console.log("입력 성공")
                await searchDiaryByDate(selectedDate)
            }
            else{
                console.error("입력 실패")
            }
        } 
        catch (error) { 
            console.log("오류 발생" , error)
        }

        // // 일기 리스트 업데이트
        // setDiaryList([...diaryList, newDiaryEntry]);

        // 입력 필드 초기화
        setDiaryEntry('');
        
        // // 선택된 날짜 초기화 (오늘 날짜로 설정)
        // setSelectedDate(new Date());
}   
    const formatDate = (date) => {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    };

    useEffect(() => {
        console.log(formatDate(selectedDate), "selectedDate")
    },[selectedDate])

    const resetDiaryList = async () => {
        const shouldDelete = window.confirm("일기 목록을 모두 삭제하시겠습니까?");
        // 일기 리스트 초기화
        if (shouldDelete) {
        try {
            const response = await fetch('/api/delete', {
                method: 'DELETE'
            });
            if (response.ok) {
                console.log("삭제 성공")
            }
            
            else {
                console.log("삭제 실패")
            }
        }
        catch (error) {
            console.log("오류 발생" , error)
        }
      }
      else {
        console.log("사용자가 취소했습니다.")
        };

        if (refresh)
            setRefresh(false)
        else
            setRefresh(true)
    }
    const searchDiaryByDate = async (date) => {
        try {
          const formattedDate = formatDate(date);
          const response = await fetch(`/api/get?date=${formattedDate}`, {
            method: 'GET',
          });
    
          if (response.ok) {
            const data = await response.json();
            setDiaryList(data); 
          } else {
            console.log('목록을 불러오는데 실패했습니다.');
          }
        } catch (error) {
          console.log('오류 발생', error);
        }
      };
  return (
    <div className="App">
        <h1 className="font-['S-CoreDream-3Light'] text-2xl font-bold mb-2">프로젝트 임시 회의록</h1>

        <textarea
        rows="10"
        cols="50"
        placeholder="오늘의 회의록을 작성하세요."
        value={diaryEntry}
        onChange={handleDiaryChange}
        ></textarea>
        <br />
        <input style={{width : '25%', marginRight: '10px'}} type="text"  value={writer} placeholder='작성자를 입력해주세요.' onChange={handleWriterChange}/>
        <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="yyyy-MM-dd"
        /><span className="ml-3 font-['S-CoreDream-3Light'] hover:underline cursor-pointer" onClick={handleAllClick}>회의록 전체 보기</span>
        <div className='flex justify-center'>
        <div className='flex w-1/2'>
        <button className="w-1/2 font-['S-CoreDream-3Light']" onClick={saveDiaryEntry}>회의록 저장</button>
              {/* 일기 리스트 리셋 버튼 */}
        <button className="w-1/2 font-['S-CoreDream-3Light']" onClick={resetDiaryList}>회의록 전체 비우기</button>
        </div>
        </div>
        <DiaryList diaryList={diaryList} setDiaryList={setDiaryList} refresh={refresh}/>
  </div>
  )
}

export default DiaryMain
