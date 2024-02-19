import React from 'react';
import { FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { events } from "../../../Database";

function Events() {
    return (
        <div>
            <div className="d-flex">
                <h4>Coming Up</h4>

                <Link to="#" id="view_calendar" className="mx-3">
                    <FaCalendarAlt className="mx-1" />
                    View Calendar
                </Link><br />
            </div>

            <ul>
                {events.map((event, index) => (
                    <li key={index}>
                        <Link to="#" className="link-style">
                            <div><FaCalendarAlt className="mx-1" /> {event.type}</div>
                            <div>{event.title}</div>
                            <div>{event.date} at {event.time}</div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Events;