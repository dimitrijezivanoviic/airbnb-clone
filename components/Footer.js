import React from "react";

function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-5 py-10 lg:px-32 lg:py-14 bg-gray-100 text-gray-600">
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">ABOUT</h5>
        <p>How Aribnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">COMMUNITY</h5>
        <p>Disaster relief housing</p>
        <p>Support Afghan refugees</p>
        <p>Celebrating diversity</p>
        <p>Airbnb Plus</p>
        <p>Combating discrimination</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">HOST</h5>
        <p>Try hosting</p>
        <p>Visit our community forum</p>
        <p>How to host responsibly</p>
        <p>Explore hosting resources</p>
        <p>AirCover: protection for Hosts</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">SUPPORT</h5>
        <p>Help Center</p>
        <p>Safety information</p>
        <p>Supporting people</p>
        <p>Cancellation options</p>
        <p>Report a neighborhood</p>
      </div>
    </div>
  );
}

export default Footer;
