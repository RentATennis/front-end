import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { useNavigate } from 'react-router-dom';
import { StyledDivContainer } from './Styled';
import { UserContext } from '../../../contexts/UserContext';

export default function FadeMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [value, setValue] = React.useState<number>();
  const [valueDesloged, setValueDesloged] = React.useState<number>();
  const navigate = useNavigate()
  const open = Boolean(anchorEl);
  const {userLogout, user} = React.useContext(UserContext)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event:any) => {
    setValue(event.target.value)
    setAnchorEl(null);
};

const handleCloseDeslogged = (event:any) => {
    setValueDesloged(event.target.value)
    setAnchorEl(null);
};

const navigateUser = () => {
    if(value == 1){
        navigate('/profile')
    }
    else if(value == 0){
        userLogout()
    }
}

const navigateUserDeslogged = () => {
    if(valueDesloged == 2){
        navigate('/register')
    }
    else if(valueDesloged == 3){
        navigate('/login')
    }
}

navigateUserDeslogged()
navigateUser()
  console.log(value)

  return (
    <StyledDivContainer>
        {user?(
            <div>
                <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{
            color:'white',
            fontWeight:700,
            fontFamily:'Open Sans'
        }}
      >
        Menu
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose} value={1}>Perfil</MenuItem>
        <MenuItem onClick={handleClose} value={0}>Sair</MenuItem>
      </Menu>
            </div>
        ) :(
            <div>
                <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{
            color:'white',
            fontWeight:700,
            fontFamily:'Open Sans'
        }}
      >
        Menu
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleCloseDeslogged} value={2}>Cadastro</MenuItem>
        <MenuItem onClick={handleCloseDeslogged} value={3}>Login</MenuItem>
      </Menu>
            </div>
        )}
      
    </StyledDivContainer>
  );
}