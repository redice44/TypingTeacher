import React from 'react';

import { List, ListItem } from 'material-ui/List';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import AddIcon from 'material-ui/svg-icons/content/add';
import PlayIcon from 'material-ui/svg-icons/av/play-circle-outline';
import MoreIcon from 'material-ui/svg-icons/navigation/more-horiz';

import CampaignSingle from '../single/singleCampaign';

export default class CampaignList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: true
    };

    //this.handleToggle = this.handleToggle.bind(this);
  }

  render() {
    console.log('Campaign List Props', this.props);
    let campaigns;
    if (this.props.campaignList) {
      campaigns = this.props.campaignList.map((camp, i) => {
        return (
          <ListItem key={i}
            primaryText={camp.name ? camp.name : 'Untitled'}
            initiallyOpen={false}
            primaryTogglesNestedList={true}
            nestedItems={[<CampaignSingle key={`${i}-${camp.name}`}campaign={camp} />]}
            // TODO: Make these icon buttons
            leftIcon={<PlayIcon />}
          />
        );
      });
    }
    /*
    onTouchTap={() => {
      console.log('clicking camp', camp._id);
      this.props.selectCampaign(camp);
    }}
    */
    return (
      <div>
        <List>
          <ListItem
            primaryText='Campaign List'
            initiallyOpen={true}
            //primaryTogglesNestedList={true}
            nestedItems={campaigns}
            leftIcon={
              <IconButton style={{padding: '0px'}}
              tooltip='Create Campaign'
              tooltipPosition='bottom-right'
              onTouchTap={ () => {
                //this.context.router.push('/campaign/create');
                this.props.updateCreating(!this.props.isCreating);
              }}
              >
                <AddIcon />
              </IconButton>
          }
          />
        </List>
      </div>
    );
  }
};

CampaignList.contextTypes = {
  router: React.PropTypes.object
};
