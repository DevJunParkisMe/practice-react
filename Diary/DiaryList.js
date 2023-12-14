import React, { useEffect } from 'react'
import { CiSquareRemove } from "react-icons/ci";
const DiaryList = ({diaryList, setDiaryList, refresh}) => {
    useEffect(() => {
        fetchDiscussList();
    }, [refresh]);
    const fetchDiscussList = async () => {
        try {
            const response = await fetch('/api/list', {
                method: 'GET'
            });

            if (response.ok) {
                const data = await response.json();
                const sortedData = data.sort((a, b) => new Date(b.regiDate) - new Date(a.regiDate));
                console.log(data, 'data')
                setDiaryList(sortedData);
            }
            else {      
                console.log("목록을 불러오는데 실패했습니다.")
            }
        }
        catch (error) {
            console.log("오류 발생", error)
        }
    }
    const handleDelClick = async (selectedSeq) => {
        const shouldDelete = window.confirm("선택하신 회의록을 삭제하시겠습니까?");
        console.log(selectedSeq,'selectedSeq')
        if (shouldDelete) {
        try {
            const response = await fetch(`/api/delone?seq=${selectedSeq}`, {
                method: 'DELETE'
            })

            if (response.ok) {
                console.log("삭제 성공")
            }
            else {
                console.log("삭제 실패")
            }

            fetchDiscussList()
        } catch (error) {
            console.log("오류 발생", error)
        }
        }
        else {
            console.log("사용자가 취소했습니다.")
            };
    }
    return (
        <div>
        <h2 className="font-['S-CoreDream-3Light'] font-bold">회의록 리스트</h2>
        <ul className='w-full mt-5 flex flex-col'>
        {diaryList.map((entry, index) => (
            <div key={index} className='text-left p-4 bo    rder-solid border-2 m-3 bg-white shadow-md'> 
            <strong>{entry.regiDate}</strong> <div className='flex '><span className=" font-['S-CoreDream-3Light'] font-bold text-xs">{entry.writer}</span><CiSquareRemove className='cursor-pointer' onClick={() => handleDelClick(entry.seq)} /></div>
            <div className="w-1/2 font-['S-CoreDream-3Light'] font-bold text-sm whitespace-pre-line">{entry.content}</div>
            </div>
        ))}
        </ul>
    </div>
    )
}

export default DiaryList
