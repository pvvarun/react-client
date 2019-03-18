import Dialog from "@material-ui/core/Dialog";
import React from "react";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import People from "@material-ui/icons/People";
import Email from "@material-ui/icons/Email";
import InputAdornment from "@material-ui/core/InputAdornment";
import { SharedSnackBarConsumer } from "../../../../contexts";

class EditDialog extends React.Component {
  constructor(props) {
    super(props);
    // console.log("---------------props are-------------", props);
    this.previousData = {
      name: props.data.name,
      email: props.data.email
    };
    this.state = {
      isAnythingChange: false,
      name: props.data.name,
      email: props.data.email
    };
  }

  handleChange = stateField => event => {
    this.setState(
      {
        [stateField]: event.target.value
      },
      () => {
        const { name, email } = this.state;
        if (
          this.previousData.name === name &&
          this.previousData.email === email
        ) {
          this.setState({
            isAnythingChange: false
          });
          return;
        }
        if (
          (!name || name === this.props.data.name) &&
          (!email || email === this.props.data.email)
        ) {
          this.setState({
            isAnythingChange: false
          });
          return;
        }
        this.setState({
          isAnythingChange: true
        });
      }
    );
  };

  render() {
    const { handle, stateVariable, printData, data } = this.props;
    const { name, email, isAnythingChange } = this.state;
    // console.log("-----state and props------", name, email, this.previousData.name, this.previousData.email);
    return (
      <Dialog open={stateVariable} onClose={() => handle()}>
        <DialogTitle>Edit Trainee</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <TextField
              fullWidth
              required
              onChange={this.handleChange("name")}
              id="outlined-name"
              label="Name"
              defaultValue={data.name}
              margin="normal"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <People />
                  </InputAdornment>
                )
              }}
            />
            <TextField
              fullWidth
              required
              onChange={this.handleChange("email")}
              id="outlined-email"
              label="Email"
              defaultValue={data.email}
              margin="normal"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email />
                  </InputAdornment>
                )
              }}
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handle()} color="primary">
            CANCEL
          </Button>
          <SharedSnackBarConsumer>
            {openSnackBar => (
              <Button
                onClick={() => printData(this.state, openSnackBar)}
                color="primary"
                variant="outlined"
                disabled={!isAnythingChange}
              >
                SUBMIT
              </Button>
            )}
          </SharedSnackBarConsumer>
        </DialogActions>
      </Dialog>
    );
  }
}
export default EditDialog;
