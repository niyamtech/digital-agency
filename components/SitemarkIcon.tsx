
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const LogoText = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '1.8rem',
  letterSpacing: '0.15em',
  fontFamily: `'Poppins', 'Roboto', 'Helvetica', 'Arial', sans-serif`,
  color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
  userSelect: 'none',
  cursor: 'default',
  background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
}));

export default function SitemarkIcon() {
  return <LogoText variant="h5" noWrap>VIDYA</LogoText>;
}

