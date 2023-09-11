import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import AvatarGroup from '@mui/material/AvatarGroup'
import Avatar from '@mui/material/Avatar'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
const Menu_Styles = {
  color: 'primary.main',
  bgcolor: 'white',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '& .MuiSvgIcon-root': {
    color: 'primary.main'
  },
  '&:hover': {
    bgcolor: 'primary.50'
  }
}

function BoardBar() {
  return (
    <Box sx={{
      width: '100%', height: (theme) => theme.trelloCustom.boardBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      overflowX: 'auto',
      px: 2,
      borderTop: '1px solid #00bfa5'
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip
          sx={Menu_Styles}
          icon={<DashboardIcon />}
          label="anhbipro811 MERN Trello"
          clickable
        // onClick={() => {}} tuong duong voi clickable
        />
        <Chip
          sx={Menu_Styles}
          icon={<VpnLockIcon />}
          label="Public/Private Workspaces"
          clickable
        // onClick={() => {}} tuong duong voi clickable
        />
        <Chip
          sx={Menu_Styles}
          icon={<AddToDriveIcon />}
          label="Add to Google Drive"
          clickable
        // onClick={() => {}} tuong duong voi clickable
        />
        <Chip
          sx={Menu_Styles}
          icon={<BoltIcon />}
          label="Automation"
          clickable
        // onClick={() => {}} tuong duong voi clickable
        />
        <Chip
          sx={Menu_Styles}
          icon={<FilterListIcon />}
          label="Filter"
          clickable
        // onClick={() => {}} tuong duong voi clickable
        />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button variant='outlined' startIcon={<PersonAddIcon/>}>Invite</Button>
        <AvatarGroup max={5} sx={{
          '& .MuiAvatar-root': {
            width: 34,
            height: 34,
            fontSize: '16px'
          }
        }}>
          <Tooltip title='Tran Quoc Bi'>
            <Avatar
              alt="Tran Quoc Bi"
              src="https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-6/272155655_1282402798839039_2197456276899617005_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=1b51e3&_nc_ohc=RARttOENQkIAX8q6NH_&_nc_ht=scontent.fdad3-6.fna&oh=00_AfBN1xqgOnes7keWC9No6PbbBZHzu3doxP_PANN30KXfUw&oe=65045656" />
          </Tooltip>

          <Tooltip title='Tran Quoc Bi'>
            <Avatar
              alt="Tran Quoc Bi"
              src="https://scontent.fdad3-6.fna.fbcdn.net/v/t1.6435-9/186459457_1126042097808444_71763404316523814_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=174925&_nc_ohc=p8Jl7sUlyBcAX8zPrjk&_nc_ht=scontent.fdad3-6.fna&oh=00_AfAH4i7d81Il-mr8Nzn8OmtgMgVTVdfxw8jZngOIoUrXEQ&oe=65269350" />
          </Tooltip>
          <Tooltip title='Tran Quoc Bi'>
            <Avatar
              alt="Tran Quoc Bi"
              src="https://scontent.fdad3-6.fna.fbcdn.net/v/t1.6435-9/108986231_915996018813054_5162481796584069682_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=174925&_nc_ohc=xBntpRcRTk4AX9E7_I6&_nc_ht=scontent.fdad3-6.fna&oh=00_AfDIxZXxTQunOL_41tzdBhadt0M6LafAu6Prm7RLMiTZpQ&oe=65268FB0" />
          </Tooltip>
          <Tooltip title='Tran Quoc Bi'>
            <Avatar
              alt="Tran Quoc Bi"
              src="https://scontent.fdad3-6.fna.fbcdn.net/v/t1.6435-9/84676070_803291946750129_2759037169329766400_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_ohc=Ftrbbp5hn_sAX-spVL5&_nc_ht=scontent.fdad3-6.fna&oh=00_AfD31fjNCvgaB0HJDeLj3MSpFMLLBEsBpxkeoBZV-dFsdw&oe=65268174" />
          </Tooltip>
          <Tooltip title='Tran Quoc Bi'>
            <Avatar
              alt="Tran Quoc Bi"
              src="https://scontent.fdad3-6.fna.fbcdn.net/v/t1.6435-9/76947459_745319705880687_5318052553429090304_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_ohc=gBMIs9l6Ip4AX8-rum0&_nc_ht=scontent.fdad3-6.fna&oh=00_AfB_1tVrRYPZxo-j1yElz9AalVvRx8QFC_4DfhjzqMF09Q&oe=6526844E" />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar