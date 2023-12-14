const Table = ({tr}) => {
  return (
    <table className="table-auto">
        <thead>
            <tr>
            <th>항목명</th>
            <th>예측 시간</th>
            <th>항목값</th>
            </tr>
        </thead>
        <tbody>
            {tr}
        </tbody>
    </table>
  )
}

export default Table
