import React from 'react';

import { List, ListItem } from 'material-ui/List';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import AddIcon from 'material-ui/svg-icons/content/add';
import PlayIcon from 'material-ui/svg-icons/av/play-circle-outline';
import MoreIcon from 'material-ui/svg-icons/navigation/more-horiz';

export default class CampaignList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('Campaign List Props', this.props);
    let campaigns;
    if (this.props.campaignList) {
      campaigns = this.props.campaignList.map((camp, i) => {
        return (
          <ListItem key={i}
            primaryText={camp.name ? camp.name : 'Untitled'}
            // TODO: Make these icon buttons
            leftIcon={<PlayIcon />}
            rightIcon={<MoreIcon />}
          />
        );
      });
    }

    return (
      <div>
        <Toolbar>
          <ToolbarGroup
          >
            <ToolbarTitle
              text='Campaign List'
            />
          </ToolbarGroup>
          <ToolbarGroup
            lastChild={true}
            style={{alignItems: 'center'}}
          >
            <IconButton
              tooltip='Create New Campaign'
              tooltipPosition='bottom-left'
              onTouchTap={ () => {
                //this.context.router.push('/campaign/create');
                this.props.updateCreating(!this.props.isCreating);
              }}
            >
              <AddIcon />
            </IconButton>
          </ToolbarGroup>
        </Toolbar>
        <List>
          {campaigns}
        </List>
      </div>
    );
  }
};

CampaignList.contextTypes = {
  router: React.PropTypes.object
};
