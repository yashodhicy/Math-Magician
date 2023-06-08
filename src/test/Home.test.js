import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../Home';

describe('Home should render correctly', () => {
  it('should display sentence', () => {
    render(<Home />);
    expect(screen.getByText('Welcome to our math website, your ultimate destination for all things numbers, calculations, and mathematical inspiration. Whether you are in need of a reliable calculator for quick computations or seeking uplifting quotes to fuel your mathematical passion, we have you covered. Our interactive calculator empowers you to crunch numbers effortlessly, from simple arithmetic to complex equations. Perform calculations with ease and accuracy, saving you time and effort in your mathematical endeavors.')).toBeInTheDocument();
  });

  it('should display text', () => {
    render(<Home />);
    expect(screen.getByText('But our website offers more than just calculations. Immerse yourself in a world of mathematical wisdom with our curated collection of inspiring quotes. Delve into the minds of renowned mathematicians and visionaries who have shaped the field, finding motivation and insight within their profound words. Let their wisdom ignite your own mathematical journey, guiding you to new heights of understanding and creativity.')).toBeInTheDocument();
  });
});
