import { Pivot, PivotItem } from 'office-ui-fabric-react';
import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';

import { IQueryResponseProps } from '../../../types/query-response';
import { Monaco } from '../common';
import './query-response.scss';

class QueryResponse extends Component<IQueryResponseProps, {}> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    let body;
    let headers;
    // @ts-ignore
    const { intl: { messages } } = this.props;

    const { graphResponse } = this.props;
    if (graphResponse) {
      body = graphResponse.body;
      headers = graphResponse.headers;
    }

    return (
      <div className='query-response'>
        <Pivot className='pivot-response'>
          <PivotItem
            headerText={messages['Response Preview']}
          >
            <Monaco
              body={body}
            />
          </PivotItem>
          <PivotItem
            headerText={messages['Response Headers']}
          >
            <Monaco
              body={headers}
            />
          </PivotItem>
        </Pivot>
      </div>
    );
  }
}

function mapStateToProps(state: IQueryResponseProps) {
  return {
    graphResponse: state.graphResponse,
  };
}
// @ts-ignore
const WithIntl = injectIntl(QueryResponse);
export default connect(mapStateToProps)(WithIntl);
