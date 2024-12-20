import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';

const Events = () => {
  const events = [
    {
      title: 'Community Health Camp',
      date: '2024-04-15',
      time: '9:00 AM - 4:00 PM',
      location: 'Community Center',
      description: 'Free health checkups and consultations for community members.',
      image: 'https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&q=80',
    },
    {
      title: 'Education Workshop',
      date: '2024-04-22',
      time: '10:00 AM - 2:00 PM',
      location: 'Local School',
      description: 'Interactive workshop focusing on digital literacy and career guidance.',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80',
    },
    {
      title: 'Community Clean-up Drive',
      date: '2024-04-29',
      time: '8:00 AM - 12:00 PM',
      location: 'City Park',
      description: 'Join us in making our community cleaner and greener.',
      image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80',
    },
  ];

  return (
    <section id="events" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
          Upcoming Events
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative h-48">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{new Date(event.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <p className="mt-4 text-gray-600">{event.description}</p>
                <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors duration-300">
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;