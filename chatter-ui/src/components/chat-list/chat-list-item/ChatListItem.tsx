import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { ListItemButton } from '@mui/material';
import { ChatFragmentFragment as Chat } from '../../../gql/graphql';
import Router from '../../Routes';

interface IChatListProps {
  chat: Chat,
  selected: boolean;
}

const ChatListItem = ({ chat, selected }: IChatListProps) => {
  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemButton 
          onClick={() => Router.navigate(`/chats/${chat._id}`)}
          selected={selected}
        >
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary={chat?.name}
            secondary={
              <>
                <Typography
                  component="span"
                  variant="body2"
                  sx={{ color: 'text.primary', display: 'inline' }}
                >
                  Ali Connors
                </Typography>
                {" — I'll be in your neighborhood doing errands this…"}
              </>
            }
          />
        </ListItemButton>
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  )
}

export default ChatListItem;