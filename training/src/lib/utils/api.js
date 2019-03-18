import React from "react";
import axios from "axios";

export default async function callApi(url, request, data) {
  try {
    const MyComponent = await axios({
      url,
      method: request,
      data
    });
    return MyComponent;
  } catch (err) {
    return err;
  }
}
