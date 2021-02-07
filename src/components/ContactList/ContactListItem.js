import PropTypes from 'prop-types';
import { ListItem, Text, Button } from './ContactListItemStyles';

const ContactListItem = ({ name, number, deleteContact }) => {
  return (
    <ListItem>
      <Text>
        {name}: {number}
      </Text>
      <Button type="button" onClick={deleteContact}>
        Delete
      </Button>
    </ListItem>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactListItem;
