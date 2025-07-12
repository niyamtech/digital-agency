import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import AppAppBar from '../AppAppBar';
import MainContent from '../MainContent';
import Latest from '../Latest';
import Footer from '../Footer';
import AppTheme from '../shared-theme/AppTheme';
import Article from '../Article';
export default function Blog(props: { disableCustomTheme?: boolean }) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />

      <AppAppBar />
      <Container
        maxWidth="lg"
        component="main"
        sx={{ display: 'flex', flexDirection: 'column', my: 16, gap: 4 }}
      >
        <Article />
        {/* <MainContent />
        <Latest /> */}
      </Container>
      <Footer />
    </AppTheme>
  );
}
