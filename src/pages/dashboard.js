import { useContext } from 'react';
import { Context } from '@/context/user';
import Layout from '@/components/Layout';
import Table from '@/components/Table';
import Modal from '@/components/Modal';
import Welcome from '@/components/Welcome';

export default function Dashboard() {
  const user = useContext(Context);

  return (
    <div>
      {user ? (
        <Layout>
          <Welcome user={user} />
          <Modal title="Add New PTO">Add New Pto</Modal>
          <Table user={user} />
        </Layout>
      ) : null}
    </div>
  );
}
