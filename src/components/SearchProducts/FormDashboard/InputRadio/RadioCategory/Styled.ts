import { Radio } from '@mui/material';
import styled from 'styled-components';

const StyledRadio = styled(Radio)`
  color: var(--color-primary); /* Define a cor do ícone do input radio */
  &.Mui-checked {
    color: var(--color-primary); /* Define a cor do ícone quando o input radio está selecionado */
  }
`;

export default StyledRadio