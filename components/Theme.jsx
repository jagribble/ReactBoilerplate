import React from 'react';
import {  makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Markdown from 'react-markdown';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import isMobile from 'is-mobile';

import { useThemeContextProvider } from './Providers/Theme';
import { SketchPicker } from 'react-color';

const useStyles = makeStyles({
  card: {
    margin: 10,
    padding: 10,
  },
  cardMobile: {
    margin: 5,
    padding:10,
  },
  demos: {
    margin: '5px 0px',
  }
});

export default function App() {
  const [selectedValue, setSelectedValue] = React.useState('option1');

  const classes = useStyles();
  const { getTheme, getType, getPrimary, getError, getSecondary, setPrimary, setSecondary, setError } = useThemeContextProvider();
  const source = `
  # Theme
  \`\`\`
  {
    palette: {
        type: '${getType() ? 'dark' : 'light'}',
        primary: {
            main: '${getPrimary()}',
        },
        secondary: {
            main: '${getSecondary()}',
        },
        error: {
            main: '${getError()}',
        }
      }
  }
  \`\`\`
  `;
  return (
      <Card className={isMobile ? classes.cardMobile : classes.card}>
        <Markdown source={source} />
        <Typography color="primary" variant="h4">Primary</Typography>
        <Grid container>
          <Grid item xs={12} sm={4}>
            <SketchPicker color={getPrimary()} onChangeComplete={(c) => setPrimary(c.hex)} />
          </Grid>
          <Grid item xs={12} sm>
            <Grid container spacing={10} justify="space-evenly" direction="column">
              <Grid item className={classes.demos}>
                <Button variant="contained" color="primary">Primary</Button>
              </Grid>
              <Grid item className={classes.demos}>
                <TextField label="Primary Color" color="primary" />
              </Grid>
              <Grid item className={classes.demos}>
                <FormControl component="fieldset" className={classes.formControl}>
                  <FormLabel component="legend">Options</FormLabel>
                  <RadioGroup aria-label="Options" name="options" value={selectedValue} onChange={(e) => setSelectedValue(e.target.value)}>
                    <FormControlLabel
                      value="option1"
                      control={<Radio color="primary" />}
                      label="Option 1"
                      labelPlacement="end"
                    />
                    <FormControlLabel
                      value="option2"
                      control={<Radio color="primary" />}
                      label="Option 2"
                      labelPlacement="end"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Typography color="secondary" variant="h4">Secondary</Typography>
        <Grid container>
          <Grid item xs={12} sm={4}>
            <SketchPicker color={getSecondary()} onChangeComplete={(c) => setSecondary(c.hex)} />
          </Grid>
          <Grid item xs={12} sm>
            <Grid container spacing={10} justify="space-evenly" direction="column">
              <Grid item className={classes.demos}>
                <Button variant="contained" color="secondary">Secondary</Button>
              </Grid>
              <Grid item className={classes.demos}>
                <TextField label="Secondary Color" color="secondary" />
              </Grid>
              <Grid item className={classes.demos}>
                <FormControl component="fieldset" className={classes.formControl}>
                  <FormLabel component="legend">Options</FormLabel>
                  <RadioGroup aria-label="Options" name="options" value={selectedValue} onChange={(e) => setSelectedValue(e.target.value)}>
                    <FormControlLabel
                      value="option1"
                      control={<Radio color="secondary" />}
                      label="Option 1"
                      labelPlacement="end"
                    />
                    <FormControlLabel
                      value="option2"
                      control={<Radio color="secondary" />}
                      label="Option 2"
                      labelPlacement="end"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Typography color="error" variant="h4">Error</Typography>
        <Grid container>
          <Grid item xs={12} sm={4}>
            <SketchPicker color={getError()} onChangeComplete={(c) => setError(c.hex)} />
          </Grid>
          <Grid item xs={12} sm>
            <Grid container spacing={10} justify="space-evenly" direction="column">
              <Grid item className={classes.demos}>
                <Card className={classes.card} raised>
                  <Typography color="error">This is some error text</Typography>
                </Card>
              </Grid>
              <Grid item className={classes.demos}>
                <TextField label="Error Color" error />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>
  );
}
