import React, { Component } from "react";
import { Segment, Item, Icon, List, Button } from "semantic-ui-react";

import EventListAtendee from './EventListAtendee'

export class EventListItem extends Component {

    

  render() {
    const {event, onEventOpen, deleteEvent} = this.props;
    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image size="tiny" circular src={event.hostPhotoURL} />
              <Item.Content>
                <Item.Header as="a">{event.title}</Item.Header>
                <Item.Description>
                  Hosted by <a>{event.hostedBy}</a>
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment>
          <span>
            <Icon name="clock" /> {event.date} |<Icon name="marker" /> {event.venue}
          </span>
        </Segment>
        <Segment secondary>
          <List horizontal>
          {
             event.attendees && event.attendees.map((attendee) => (
                <EventListAtendee key={attendee.id} attendee={attendee}/>
              ))
          }
            
            {/* <EventListAtendee />
            <EventListAtendee /> */}
          </List>
        </Segment>
        <Segment clearing>
        <span>D{event.description}</span>
          <Button as="a" color="red" floated="right" content="Delete" onClick={deleteEvent(event.id)}/>  
          <Button as="a" color="teal" floated="right" content="View" onClick={onEventOpen(event)}/>
          
        </Segment>
      </Segment.Group>
    );
  }
}

export default EventListItem;
