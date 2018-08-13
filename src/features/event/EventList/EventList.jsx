import React, { Component } from 'react';
import EventListItem from './EventListItem';

export class EventList extends Component {
  render() {
    return (
      <div>
        <h2>EventList</h2>
        <EventListItem />
        <EventListItem />
        <EventListItem />
      </div>
    )
  }
}

export default EventList
