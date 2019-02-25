
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'sans-serif',
      'cursive',
      'Comic Sans Ms',
    ].join(','),
    fontSize: 12,
  },
});

export default theme;
