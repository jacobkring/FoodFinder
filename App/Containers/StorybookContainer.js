//@flow
import React, { Component } from 'react'
// Styles
import StorybookUI from "../../storybook/storybook";
import LogoTitle from "../Components/LogoTitle";

export default class StorybookContainer extends Component {
  static navigationOptions = {
    headerTitle: <LogoTitle />,
    headerMode: 'card'
  };
  render () {
    return (

      <StorybookUI/>

    )
  }
}
