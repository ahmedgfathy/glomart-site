"use client"
import Image from "next/image"
import { MapPin, Phone, Clock } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useState, useEffect } from 'react'

export default function ContactPage() {
  const [message, setMessage] = useState({
    name: '',
    preferredLocation: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMessage((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(message)
  }

  return (
    <div className="min-h-screen relative">
      <Image
        src="/images/contact-background.webp"
        alt="Luxury Property Background"
        layout="fill"
        objectFit="cover"
        priority
        className="z-0"
      />
      <div className="absolute inset-0 bg-black/60 z-10" />
      <div className="relative z-20 container mx-auto px-4 py-12 flex flex-col items-center min-h-screen justify-center">
        <h1 className="text-4xl font-bold text-white mb-8">Contact Us</h1>
        <div className="w-full max-w-4xl bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-2/3 p-8">
              <h2 className="text-2xl font-bold mb-2 text-text-color">Need Expert Advice?</h2>
              <p className="text-sm text-slate-600 mb-6">Fill out the form and one of our property consultants will contact you.</p>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={message.name}
                  onChange={handleChange}
                />
                <Select onValueChange={(value) => setMessage((prev) => ({ ...prev, preferredLocation: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Preferred Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="new-cairo">New Cairo</SelectItem>
                    <SelectItem value="6-october">6th of October</SelectItem>
                    <SelectItem value="maadi">Maadi</SelectItem>
                  </SelectContent>
                </Select>
                <div className="flex space-x-2">
                  <Input
                    name="phone"
                    className="flex-1"
                    placeholder="Phone Number"
                    type="tel"
                    value={message.phone}
                    onChange={handleChange}
                  />
                </div>
                <Textarea
                  name="message"
                  placeholder="Your message"
                  className="min-h-[100px]"
                  value={message.message}
                  onChange={handleChange}
                />
                <Button
                  className="w-full bg-[#1d3a5f] hover:bg-[#284875]"
                  type="submit"
                >
                  Submit
                </Button>
              </form>
            </div>
            <div className="md:w-1/3 bg-slate-50 p-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-slate-600 mt-1" />
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <p className="text-sm text-slate-600">47, North 90 Street, New Cairo, Egypt</p>
                    <p className="text-sm text-slate-600">Tower 2, Al Guezira Plaza, 6 of October, Egypt</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-slate-600 mt-1" />
                  <div>
                    <h3 className="font-semibold">Contacts</h3>
                    <p className="text-sm text-slate-600">0123456789</p>
                    <p className="text-sm text-slate-600">info@mai.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-slate-600 mt-1" />
                  <div>
                    <h3 className="font-semibold">Working Hours</h3>
                    <p className="text-sm text-slate-600">Sunday-Thursday</p>
                    <p className="text-sm text-slate-600">10:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
