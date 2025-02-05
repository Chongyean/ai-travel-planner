import { Button } from "@/components/ui/button";
import { SelectBudgetOptions, SelectTravelesList } from "@/constants/options";
import React from "react";
import { useState, useEffect } from'react'
import { Input } from "@/components/ui/input"




// import GooglePlacesAutocomplete from 'react-google-places-autocomplete'

function CreateTrip() {
  const [place, setPlace] = useState();

  const [formData, setFormData] = useState([]);

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]:value
    })
  }

  useEffect(() => {
    console.log(formData);
  },[formData])

  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10">
      <h2 className="font-bold text-3xl">
        Tell us your travel preferences 🏕️🌴
      </h2>
      <p className="mt-3 text-gray-500 text-xl">
        Just provide some basic information, and our trip palnner will generate
        a customized itinerary based on your preferences.
      </p>

      <div className="mt-20">
        <div>
          <h2 className="text-xl my-3 font-medium text-left">
            What is destination of choice?
          </h2>

          {/* This is optional we have api google map key */}

          {/* <GooglePlacesAutocomplete
            apiKey={import.meta.env.REACT_APP_GOOGLE_MAPS_API_KEY}
    selectProps={{
      place,
      onChange: (v) => {setPlace(v); handleInputChange('location')}
    }}
     /> */}

          {/* Remove this line if we have Google map api */}
          <Input
            type="text"
            placeholder="Enter your destination"
            className="w-full p-3 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <h2 className="text-xl my-3 font-medium text-left">
            What are your travel dates?
          </h2>
          {/* <Input placeholder={'Example : 10/05/2022'} type="date" /> */}
            
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Start date
              </label>
              <input
                type="date"
                name="startDate"
                id="startDate"
                value={formData.startDate}
                onChange={(e) => handleInputChange("startDate", e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            

          {/* <div className="flex">
            <input
              placeholder="Start date"
              type="date"
              className="w-full p-3 border border-gray-300 rounded-md mr-3"
            />
            <input
              placeholder="End date"
              type="date"
              className="w-full p-3 border border-gray-300 rounded-md mr-3"
            />
          </div> */}
        </div>

        <div className="text-left">
          <h2 className="text-xl my-3 font-medium">
            How many days are you planning?
          </h2>
          <input
            placeholder="Enter days"
            type="number"
            onChange={(e) => handleInputChange("noOfDays", e.target.value)}
          />
        </div>

        <div>
          <h2 className="text-xl my-3 font-medium ">What is Your Budget?</h2>
          <div className="grid grid-cols-3 gap-5 mt-5">
            {SelectBudgetOptions.map((item, index) => (
              <div
                key={index}
                onClick={() => handleInputChange("budget", item.title)}
                className={`p-4 border cursor-pointer rounded-lg hover:shadow-lg
                ${FormData?.budget == item.title && 'shadow-lg border-black'}
                `}>
                <h2 className="text-3xl">{item.icon}</h2>
                <h2 className="font-bold text-lg">{item.title}</h2>
                <h2 className="text-sm text-gray-500">{item.desc}</h2>
              </div>
            ))}
          </div>

          <div>
            <h2 className="text-xl my-3 font-medium ">
              Who do you plan on traveling with on your next adventure?
            </h2>
            <div className="grid grid-cols-3 gap-5 mt-5">
              {SelectTravelesList.map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleInputChange("traveler", item.people)}
                  className="p-4 border cursor-pointer rounded-lg hover:shadow-lg"
                >
                  <h2 className="text-3xl">{item.icon}</h2>
                  <h2 className="font-bold text-lg">{item.title}</h2>
                  <h2 className="text-sm text-gray-500">{item.desc}</h2>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="my-10 justify-end flex">
          <Button>Generate Trip</Button>
        </div>
      </div>
    </div>
  );
}

export default CreateTrip;
