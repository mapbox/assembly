import documentationCss from 'documentation-css';
import React from 'react';
import { Contents } from './contents';
import { addStyle } from './add-style';

class Loader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      entries: null
    };
  }

  componentDidMount() {
    fetch(this.props.file)
      .then((response) => response.text())
      .then((content) => {
        addStyle(content);

        this.setState({
          loading: false,
          entries: documentationCss.extract([{
            contents: content,
            path: this.props.file
          }])
        });
      })
      .catch((err) => console.error(err));
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    return (
      <Contents entries={this.state.entries} />
    );
  }
}

Loader.propTypes = {
  file: React.PropTypes.string.isRequired
};

export { Loader };
