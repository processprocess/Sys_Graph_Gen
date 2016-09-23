// This will render our dashboard component, this will be a dummy component that will just render some text. However this route will be protected from viewing by anyone not logged in.

import React, { Component } from 'react';

const Dashboard = () => {
  return (
    <div>
      <h1>the dashboard</h1>
    </div>
  );
}

export default Dashboard;
