import Filter from 'components/Contacts/Filter/Filter';
import Form from 'components/Contacts/Form/Form';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/Contacts/operations';

import ListContacts from 'components/Contacts/ListContacts/ListContacts';

function Contacts() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <title>Your contacts</title>
      <Form />
      <Filter />
      <ListContacts />
    </>
  );
}
export default Contacts;
