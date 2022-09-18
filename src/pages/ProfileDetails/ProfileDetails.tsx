/* eslint-disable no-param-reassign */
import { FC } from 'react';
import { Avatar, Box, Typography, IconButton } from '@mui/material';
import StarPurple500OutlinedIcon from '@mui/icons-material/StarPurple500Outlined';
import CurrencyYenOutlinedIcon from '@mui/icons-material/CurrencyYenOutlined';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { palette } from '@styles/palette';

import { User } from '@types';

export const ProfileDetails: FC = () => {
  const { id } = useParams();
  const users = useSelector((state: any) => state.users);

  const user = users.find((item: User) => item.id === Number(id));

  return (
    <Box display="flex" flexDirection="column" mt="16px">
      <Box mt="32px">
        <Typography variant="h4" mb="12px">
          Profile
        </Typography>
        <Box
          sx={{
            padding: '12px 16px',
            background: palette.backgrounds.primary,
            borderRadius: '12px',
            position: 'relative',
          }}
        >
          <Box display="flex" alignItems="center">
            <Avatar
              sizes="70px"
              sx={{ height: '80px', width: '80px', mr: '16px' }}
              src={user.imageUrl}
            />
            <Box>
              <Typography variant="h7">{user.userName}</Typography>
              <br />
              <Typography>{user.email}</Typography>
              <Box display="flex" alignItems="center">
                <StarPurple500OutlinedIcon />
                {user.score}
                <CurrencyYenOutlinedIcon />
                {user.coinAmount}
              </Box>
            </Box>
          </Box>
          <IconButton sx={{ position: 'absolute', top: '12px', right: '16px' }}>
            <SettingsSuggestOutlinedIcon />
          </IconButton>
        </Box>
        <Box display="flex" mt="24px" alignItems="center" justifyContent="space-between">
          <Typography variant="h4">List of your deals</Typography>
        </Box>
      </Box>
    </Box>
  );
};
