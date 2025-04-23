/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import React, { useState } from "react";

const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

export default function BloodDonorPage() {
  const [donors, setDonors] = useState<any[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    age: "",
    bloodGroup: "",
    city: "",
    area: "",
  });
  const [searchData, setSearchData] = useState({
    bloodGroup: "All",
    area: "",
  });

  const handleAddDonor = () => {
    if (formData.name && formData.phone && formData.age && formData.bloodGroup && formData.city && formData.area) {
      setDonors([...donors, formData]);
      setFormData({ name: "", phone: "", age: "", bloodGroup: "", city: "", area: "" });
    }
  };

  const filteredDonors = donors.filter(d =>
    (searchData.bloodGroup === "All" || d.bloodGroup === searchData.bloodGroup) &&
    (searchData.area === "" || d.area.toLowerCase().includes(searchData.area.toLowerCase()))
  );

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <h1 className="text-center text-2xl font-bold text-red-600">ROKTO DAAN</h1>

      <div className="border rounded-lg p-4 space-y-4">
        <h2 className="text-xl font-semibold text-red-600">Add Donor Details</h2>
        <input className="w-full border p-2 rounded" placeholder="Name" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
        <input className="w-full border p-2 rounded" placeholder="Phone Number" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} />
        <input className="w-full border p-2 rounded" placeholder="Age" value={formData.age} onChange={e => setFormData({ ...formData, age: e.target.value })} />
        <select className="w-full border p-2 rounded" value={formData.bloodGroup} onChange={e => setFormData({ ...formData, bloodGroup: e.target.value })}>
          <option value="">Select Blood Group</option>
          {bloodGroups.map(group => (
            <option key={group} value={group}>{group}</option>
          ))}
        </select>
        <input className="w-full border p-2 rounded" placeholder="City" value={formData.city} onChange={e => setFormData({ ...formData, city: e.target.value })} />
        <input className="w-full border p-2 rounded" placeholder="Area" value={formData.area} onChange={e => setFormData({ ...formData, area: e.target.value })} />
        <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={handleAddDonor}>Add Donor</button>
      </div>

      <div className="border rounded-lg p-4 space-y-4">
        <h2 className="text-xl font-semibold text-red-600">Search Donors</h2>
        <div className="flex flex-col md:flex-row gap-4">
          <select className="border p-2 rounded w-full md:w-auto" value={searchData.bloodGroup} onChange={e => setSearchData({ ...searchData, bloodGroup: e.target.value })}>
            <option value="All">All</option>
            {bloodGroups.map(group => (
              <option key={group} value={group}>{group}</option>
            ))}
          </select>
          <input className="border p-2 rounded w-full md:w-auto" placeholder="Enter area" value={searchData.area} onChange={e => setSearchData({ ...searchData, area: e.target.value })} />
          <button className="bg-red-500 text-white px-4 py-2 rounded">Search</button>
        </div>
      </div>

      <div className="border rounded-lg p-4 space-y-4">
        <h2 className="text-xl font-semibold text-red-600">Available Blood Donors</h2>
        <table className="w-full border text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-2 py-1">Name</th>
              <th className="border px-2 py-1">Phone</th>
              <th className="border px-2 py-1">Age</th>
              <th className="border px-2 py-1">Blood Group</th>
              <th className="border px-2 py-1">City</th>
              <th className="border px-2 py-1">Area</th>
            </tr>
          </thead>
          <tbody>
            {filteredDonors.map((donor, index) => (
              <tr key={index}>
                <td className="border px-2 py-1">{donor.name}</td>
                <td className="border px-2 py-1">{donor.phone}</td>
                <td className="border px-2 py-1">{donor.age}</td>
                <td className="border px-2 py-1">{donor.bloodGroup}</td>
                <td className="border px-2 py-1">{donor.city}</td>
                <td className="border px-2 py-1">{donor.area}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="text-center">
        <button className="bg-gray-700 text-white px-4 py-2 rounded">Logout</button>
      </div>
    </div>
  );
}
