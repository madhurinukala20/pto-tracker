import { useState } from 'react';
import { useContext } from 'react';
import { Context } from '@/context/user';
import Input from '@/components/Input';
import Button from '@/components/Button';

function Modal(props) {
  const data = props.data;
  const approveLink = props.approve;
  const user = useContext(Context);
  const [openModal, setOpenModal] = useState(false);
  const [id, setId] = useState(data ? data.id : null);
  const [name, setName] = useState(data ? data.name : user.username);
  const [attendence, setAttendence] = useState(data ? data.attendence : true);
  const [reason, setReason] = useState(data ? data.reason : '');
  const [approved, setApproved] = useState(data ? data.approved : false);

  const openModalForm = () => {
    setOpenModal(true);
  };

  const closeModalForm = () => {
    setOpenModal(false);
  };

  const formFields = [
    {
      label: 'Name',
      name: 'name',
      type: 'text',
      value: name,
      setValue: setName,
      disabled: user.username !== 'admin',
    },
    {
      label: 'Attendence',
      name: 'attendence',
      type: 'toggle',
      value: attendence,
      setValue: setAttendence,
    },
    {
      label: 'Reason',
      name: 'reason',
      type: 'text',
      value: reason,
      setValue: setReason,
    },
  ];

  if (user.username === 'admin') {
    formFields.push({
      label: 'Approved',
      name: 'approved',
      type: 'toggle',
      value: approved,
      setValue: setApproved,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const getPTOData = localStorage.getItem('ptoData');
    const getData = JSON.parse(getPTOData);

    const ptoData = {
      name: name,
      attendence: attendence,
      reason: reason,
      approved: approved,
    };

    if (approveLink) {
      for (let i = 0; i < getData.length; i++) {
        const getId = getData[i].id;
        if (id === getId) {
          ptoData.name = name;
          ptoData.attendence = attendence;
          ptoData.reason = reason;
          ptoData.approved = approved;

          getData[id - 1] = ptoData;
          localStorage.setItem('ptoData', JSON.stringify(getData));
        }
      }
      setOpenModal(false);
    } else {
      ptoData.id = getData.length + 1;
      getData.push(ptoData);
      localStorage.setItem('ptoData', JSON.stringify(getData));

      setName('');
      setAttendence('');
      setReason('');
      setApproved('');
      setOpenModal(false);
    }
  };

  return (
    <div className="">
      <span className="link" onClick={openModalForm}>
        {props.title}
      </span>
      <div className={`modal ${openModal ? 'modal--active' : ''}`}>
        <div className="modal__container">
          <div className="modal__title">
            <h4>{props.title}</h4>
            <span onClick={closeModalForm} className="close__modal">
              X
            </span>
          </div>
          <div className="modal__body">
            <form className="form" onSubmit={handleSubmit}>
              {formFields.map((field) => (
                <Input key={field.name} field={field} />
              ))}
              <Button
                data-testid="approve-button"
                type="submit"
                disabled={!reason}
              >
                {approveLink ? 'Approve' : 'Submit'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
