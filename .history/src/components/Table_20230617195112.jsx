import Modal from '@/components/Modal';

function Thead() {
  return (
    <thead>
      <tr>
        <th>S.No</th>
        <th>Name</th>
        <th>Today's Attendence</th>
        <th>Requested PTO’s</th>
        <th>Approval Status</th>
        <th>Approval Link</th>
      </tr>
    </thead>
  );
}

function Tbody({ getData, user }) {
  return (
    <tbody>
      {getData &&
        getData.map((data, index) => (
          <>
            {data.name.toLowerCase() === user.username ||
            user.username === 'admin' ? (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{data.name}</td>
                <td>
                  {data.attendence}
                  <span
                    className={`form__field--toggle ${
                      data.attendence
                        ? 'form__field--toggle-present'
                        : 'form__field--toggle-absent'
                    }`}
                  ></span>
                </td>
                <td>{data.reason}</td>
                <td>
                  <span
                    className={data.approved ? 'pto-approved' : 'pto-pending'}
                  >
                    {data.approved ? 'Approved' : 'Pending'}
                  </span>
                </td>
                <td>
                  {data &&
                  !data.approved &&
                  user &&
                  user.username === 'admin' ? (
                    <Modal title="Approve" approve={true} data={data} />
                  ) : null}
                </td>
              </tr>
            ) : null}
          </>
        ))}
    </tbody>
  );
}

function Table({ user }) {
  const getPTOData = localStorage.getItem('ptoData');
  const getData = getPTOData ? JSON.parse(getPTOData) : null;
  return (
    <table className="table">
      <Thead />
      <Tbody getData={getData} user={user} />
    </table>
  );
}

export default Table;
