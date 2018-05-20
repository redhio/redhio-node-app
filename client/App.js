import React, { Component} from 'react';
import { Page } from '@redhio/polaris';
import { EmbeddedApp } from '@redhio/polaris/embedded';

import ApiConsole from './components/ApiConsole'

class App extends Component {
  render() {
    const { apiKey, shopOrigin } = window;

    return (
      <EmbeddedApp shopOrigin={shopOrigin} apiKey={apiKey}>
        <Page
          title="ML application"
          breadcrumbs={[{ content: 'Home', url: '/foo' }]}
          primaryAction={{ content: 'Add something' }}
        >
          <ApiConsole />
        </Page>
      </EmbeddedApp>
    );
  }
}

export default App;
