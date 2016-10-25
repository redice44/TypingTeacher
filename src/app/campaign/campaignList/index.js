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
    // TODO: Actually get the campaigns from the user's account
    const campaignNum = 5;
    let campaigns = [];

    for (let i = 0; i < campaignNum; i++) {
      campaigns.push(
        <ListItem
          primaryText={`Campaign ${i}`}
          // TODO: Make these icon buttons
          leftIcon={<PlayIcon />}
          rightIcon={<MoreIcon />}
          onTouchTap={() => console.log(i)}
        />
      );
    }

    return (
      <div style={{width: '500px'}}>
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
              onTouchTap={ () => {
                this.context.router.push('/campaign/create');
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
