import React from 'react'
import Title from './Title'
import { assets } from '../assets/assets';

export const Testimonial = () => {
    const testimonials = [
        {
            name: "Emma Rodriguez",
            location: "Philadelphia, PA",
            image: assets.testimonial_image_1,
            testimonial: "The team at DSJ on Elmwood Ave is incredible. I rented an SUV for a family weekend trip; the vehicle was spotless, and the rates were much more honest than the big chains at the airport."
        },
        {
            name: "Gustave Smith",
            location: "University City, Philly",
            image: assets.testimonial_image_2,
            testimonial: "As a regular customer for tires, I decided to try their rental service. Quick process, no hidden fees, and the car was perfectly maintained. Ideal for my business trips around the city."
        },
        {
            name: "Michelle Johnson",
            location: "South Philadelphia, PA",
            image: assets.testimonial_image_1,
            testimonial: "I needed a replacement car while mine was being repaired at DSJ Automotive. The staff was super efficient, and the rental car was very clean and fuel-efficient. Highly recommend!"
        }
    ];
    return (
        <div className="py-28 px-6 md:px-16 lg:px-24 xl:px-44">
            <Title title="What Our Customer Say" subTitle="Discover why discerning travelers choose StayVenture for their luxury accommodations arround the world." />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-18">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:-translate-y-1 transition-all duration-500">

                        <div className="flex items-center gap-3">
                            <img className="w-12 h-12 rounded-full" 
                            src={testimonial.image} alt={testimonial.name} />
                            <div>
                                <p className="font-playfair text-xl">{testimonial.name}</p>
                                <p className="text-gray-500">{testimonial.location}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 mt-4">
                            {Array(5).fill(0).map((_, index) => (
                                <img key={index} src={assets.star_icon} alt='star-icon' />
                            ))}
                        </div>
                        <p className="text-gray-500 max-w-90 mt-4 font-light">"{testimonial.testimonial}"</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Testimonial