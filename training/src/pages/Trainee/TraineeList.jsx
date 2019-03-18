import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Trainee from "./Trainee";
import trainee from "./data/trainee";
import { SimpleTable } from "../../components/Table";
import { RemoveDialog, EditDialog } from "../Trainee/components/";

class TraineeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orderBy: "",
      order: "desc",
      deleteDialog: false,
      editDialog: false,
      data: "",
      page: 0
    };
  }

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleSelect = id => {
    this.props.history.push(`/trainee/${id}`);
    // console.log("-------------------props value------------------", this.props, id);
  };

  handleSort = (fieldName, order) => {
    // console.log("-------------------fieldName is------------------", fieldName);
    order = order === "desc" ? "asc" : "desc";
    this.setState({ order, orderBy: fieldName });
  };

  handleEditDialogOpen = (data, event) => {
    event.stopPropagation();
    this.setState({ editDialog: true, data });
  };

  handleRemoveDialogOpen = (data, event) => {
    event.stopPropagation();
    this.setState({ deleteDialog: true, data });
  };

  deleteCloseDialog = () => {
    this.setState(previousState => ({
      deleteDialog: !previousState.deleteDialog
    }));
  };

  editCloseDialog = () => {
    this.setState(previousState => ({
      editDialog: !previousState.editDialog
    }));
  };
  printData = openSnackBar => {
    const fourteenFebDate = "2019-02-14T18:15:11.778Z";
    const { createdAt } = this.state.data;
    console.log(this.state.data);
    createdAt >= fourteenFebDate
      ? openSnackBar("success", "Trainee deleted successfully")
      : openSnackBar("error", "Cannot delete Trainee");
    this.setState({ deleteDialog: false, editDialog: false });
  };

  printEditedData = (dataChanged, openSnackBar) => {
    const { data } = this.state;
    const obj = { name: '', email: ''};
    obj.name = dataChanged.name || data.name;
    obj.email = dataChanged.email || data.email;
    console.log(obj);
    openSnackBar("success", "Trainee successfully edited");
    this.setState({ editDialog: false });
  };

  render() {
    const { deleteDialog, editDialog } = this.state;
    const { order, orderBy } = this.state;
    const TraineeListArray = [];
    trainee.forEach(element =>
      TraineeListArray.push(
        <Link component={RouterLink} to={`trainee/${element.id}`}>
          <li>{element.name}</li>
        </Link>
      )
    );
    return (
      <>
        <Trainee />
        <SimpleTable
          id="id"
          data={trainee}
          columns={[
            {
              field: "name",
              label: "Name",
              align: "center"
            },
            {
              field: "email",
              label: "Email Address",
              format: value => value && value.toUpperCase()
            },
            {
              field: "createdAt",
              label: "Date",
              align: "right",
              format: "getFormattedDate"
            }
          ]}
          actions={[
            {
              icon: <EditIcon />,
              handler: this.handleEditDialogOpen
            },
            {
              icon: <DeleteIcon />,
              handler: this.handleRemoveDialogOpen
            }
          ]}
          orderBy={orderBy}
          order={order}
          onSort={this.handleSort}
          onSelect={this.handleSelect}
          count={100}
          page={this.state.page}
          rowsPerPage={3}
          onChangePage={this.handleChangePage}
        />
        {/* {TraineeListArray} */}
        <RemoveDialog
          handle={this.deleteCloseDialog}
          stateVariable={deleteDialog}
          printData={this.printData}
        />
        <EditDialog
          handle={this.editCloseDialog}
          stateVariable={editDialog}
          printData={this.printEditedData}
          data={this.state.data}
        />
      </>
    );
  }
}

export default TraineeList;
