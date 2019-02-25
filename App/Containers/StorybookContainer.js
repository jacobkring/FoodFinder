//@flow
import React, { Component } from 'react'
// Styles
import StorybookUI from "../../storybook/storybook";
import LogoTitle from "../Components/LogoTitle";

type Props = {
  navigation: Object
}

export default class StorybookContainer extends Component<Props> {
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
