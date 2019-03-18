import Dialog from "@material-ui/core/Dialog";
import React from "react";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import { SharedSnackBarConsumer } from "../../../../contexts";

class RemoveDialog extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // const { deleteEditor } = this.state;
    const { handle, stateVariable, printData } = this.props;
    return (
      <Dialog open={stateVariable} onClose={() => handle()}>
        <DialogTitle id="form-dialog-title">Remove Trainee</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Do you really want to remove the Trainee?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handle()} color="primary">
            CANCEL
          </Button>
          <SharedSnackBarConsumer>
            {openSnackBar => (
              <Button
                onClick={() => printData(openSnackBar)}
                color="primary"
                variant="outlined"
              >
                DELETE
              </Button>
            )}
          </SharedSnackBarConsumer>
        </DialogActions>
      </Dialog>
    );
  }
}
export default RemoveDialog;
