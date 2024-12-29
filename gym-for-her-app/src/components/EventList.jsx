// src/components/EventList.jsx
import React, { useEffect, useState } from 'react';

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch events from WordPress REST API
    fetch('https://thegymforher.com/wp-json/tribe/events/v1/events/')
      .then((response) => response.json())
      .then((data) => {
        setEvents(data.events);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching events:', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading events: {error.message}</div>;
  }

  return (
    <div>
      <h1>Upcoming Events</h1>
      {events.length > 0 ? (
        <ul>
          {events.map((event) => (
            <li key={event.id}>
              <h2>{event.title.rendered}</h2>
              <p>{new Date(event.start_date).toLocaleDateString()}</p>
              <p dangerouslySetInnerHTML={{ __html: event.content.rendered }} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No upcoming events.</p>
      )}
    </div>
  );
};

export default EventList;
