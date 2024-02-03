// const Profile = () => {
//   const [formData, setFormData] = useState({
//     location: "",
//     date: "",
//     plantSpecies: "",
//     plantedBy: "",
//     file: null,
//     coordinates: { latitude: null, longitude: null }
//   });

//   useEffect(() => {
//     const getCurrentPosition = () => {
//       return new Promise((resolve, reject) => {
//         if ('geolocation' in navigator) {
//           navigator.geolocation.getCurrentPosition(resolve, reject);
//         } else {
//           reject(new Error("Geolocation is not supported by this browser."));
//         }
//       });
//     };
//     const getAddressFromCoordinates = async (latitude, longitude) => {
//       try {
//         const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
//         const data = await response.json();
//         console.log(data.display_name)
//         if (data.address) {
//           // Construct address from available fields
//           // const { city, state, country } = data.address;
//           // return `${city}, ${state}, ${country}`;
//           return data.display_name;
//         } else {
//           return "Unknown";
//         }
//       } catch (error) {
//         console.error("Error fetching address:", error);
//         return "Unknown";
//       }
//     };
    
//     const fetchLocation = async () => {
//       try {
//         const position = await getCurrentPosition();
//         const { latitude, longitude } = position.coords;

//         // Get address from coordinates
//         const address = await getAddressFromCoordinates(latitude, longitude);

//         setFormData(prevState => ({
//           ...prevState,
//           location: address,
//           coordinates: { latitude, longitude }
//         }));
//       } catch (error) {
//         console.error("Error fetching location:", error);
//       }
//     };

//     fetchLocation();
//   }, []);

//   const openUploadModal = () => {
//     setUploadModal(true);
//   };

//   const closeUploadModal = () => {
//     setUploadModal(false);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleFileChange = (e) => {
//     setFormData({
//       ...formData,
//       file: e.target.files[0],
//     });
//   };

//   const handleSubmit = async () => {
//     try {
//       const { location, date, plantSpecies, plantedBy, file, coordinates } = formData;

//       const formDataUpload = new FormData();
//       formDataUpload.append("location", location);
//       formDataUpload.append("date", date);
//       formDataUpload.append("plantSpecies", plantSpecies);
//       formDataUpload.append("plantedBy", plantedBy);
//       formDataUpload.append("latitude", coordinates.latitude);
//       formDataUpload.append("longitude", coordinates.longitude);
//       formDataUpload.append("plantImage", file);

//       const response = await fetch("http://localhost:8000/api/v1/trees/new", {
//         method: "POST",
//         body: formDataUpload,
//       });

//       if (!response.ok) {
//         throw new Error("Failed to upload data");
//       }

//       // Reset form fields
//       setFormData({
//         location: "",
//         date: "",
//         plantSpecies: "",
//         plantedBy: "",
//         file: null,
//         coordinates: { latitude: null, longitude: null }
//       });

//       closeUploadModal();
//     } catch (error) {
//       console.error("Error:", error);
//       // Handle error if needed
//     }
//   };

//   const [uploadModal, setUploadModal] = useState(false);

//   return (
//     <>
//       <div className="flex flex-col justify-center items-center gap-4 h-screen bg-gray-100">
//         <h1 className="text-4xl font-bold text-center">Profile</h1>
//         <button
//           onClick={openUploadModal}
//           className="bg-blue-500 rounded-xl text-xl px-4 py-2"
//         >
//           Plant a Sapling
//         </button>
//       </div>
//       {/* Modal */}

//     </>
//   );
// };

// export default Profile;

import React, { useState, useEffect } from "react";
import Modal from "../components/Modal";

const ProfileSection = () => {
  const [uploadModal, setUploadModal] = useState(false);
  const [points] = useState(0);
    const [formData, setFormData] = useState({
    location: "",
    date: "",
    plantSpecies: "",
    plantedBy: "",
    file: null,
    coordinates: { latitude: null, longitude: null }
  });

  useEffect(() => {
    const getCurrentPosition = () => {
      return new Promise((resolve, reject) => {
        if ('geolocation' in navigator) {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        } else {
          reject(new Error("Geolocation is not supported by this browser."));
        }
      });
    };
    const getAddressFromCoordinates = async (latitude, longitude) => {
      try {
        const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
        const data = await response.json();
        console.log(data.display_name)
        if (data.address) {
          // Construct address from available fields
          // const { city, state, country } = data.address;
          // return `${city}, ${state}, ${country}`;
          return data.display_name;
        } else {
          return "Unknown";
        }
      } catch (error) {
        console.error("Error fetching address:", error);
        return "Unknown";
      }
    };
    
    const fetchLocation = async () => {
      try {
        const position = await getCurrentPosition();
        const { latitude, longitude } = position.coords;

        // Get address from coordinates
        const address = await getAddressFromCoordinates(latitude, longitude);

        setFormData(prevState => ({
          ...prevState,
          location: address,
          coordinates: { latitude, longitude }
        }));
      } catch (error) {
        console.error("Error fetching location:", error);
      }
    };

    fetchLocation();
  }, []);

  const openUploadModal = () => {
    setUploadModal(true);
  };

  const closeUploadModal = () => {
    setUploadModal(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      file: e.target.files[0],
    });
  };

  const handleSubmit = async () => {
    try {
      const { location, date, plantSpecies, plantedBy, file, coordinates } = formData;

      const formDataUpload = new FormData();
      formDataUpload.append("location", location);
      formDataUpload.append("date", date);
      formDataUpload.append("plantSpecies", plantSpecies);
      formDataUpload.append("plantedBy", plantedBy);
      formDataUpload.append("latitude", coordinates.latitude);
      formDataUpload.append("longitude", coordinates.longitude);
      formDataUpload.append("plantImage", file);

      const response = await fetch("http://localhost:8000/api/v1/trees/new", {
        method: "POST",
        body: formDataUpload,
      });

      if (!response.ok) {
        throw new Error("Failed to upload data");
      }

      // Reset form fields
      setFormData({
        location: "",
        date: "",
        plantSpecies: "",
        plantedBy: "",
        file: null,
        coordinates: { latitude: null, longitude: null }
      });

      closeUploadModal();
    } catch (error) {
      console.error("Error:", error);
      // Handle error if needed
    }
  };
  const [plantedTrees] = useState([
    { id: 1, name: 'Oak Tree', datePlanted: '2024-02-10' },
    { id: 2, name: 'Maple Tree', datePlanted: '2024-02-15' },
    { id: 3, name: 'Palm Tree', datePlanted: '2024-02-20' },
  ]);

  return (
    <>
    <div className="container mx-auto py-8 px-4">
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">User Profile</h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600">Name:</p>
            <p className="font-semibold">John Doe</p>
          </div>
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600">Email:</p>
            <p className="font-semibold">johndoe@example.com</p>
          </div>
          <div>
            <p className="text-gray-600">Metamask ID:</p>
            <div className="flex items-center">
              <input type="text" value="********" className="w-36 bg-gray-100 px-2 py-1 rounded-l-lg border border-gray-300 focus:outline-none focus:border-green-500" readOnly />
              <button onClick={() => navigator.clipboard.writeText("Your Metamask ID")} className="bg-green-500 text-white px-4 py-1 rounded-r-lg hover:bg-green-600 focus:outline-none">Copy</button>
            </div>
          </div>
          <div>
            <p className="text-gray-600">Points:</p>
            <p className="font-semibold">{points}</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Planted Trees</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {plantedTrees.map(tree => (
            <div key={tree.id} className="bg-green-100 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">{tree.name}</h3>
              <p className="text-sm text-gray-600">Planted on {tree.datePlanted}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out mr-4">Show Transactions</button>
        <button
           onClick={openUploadModal}
           className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out cursor-pointer"
         >
           Plant a Sapling
        </button>
        {/* <label htmlFor="file-upload" >Upload Files</label>
        <input id="file-upload" type="file" className="hidden" /> */}
      </div>
    </div>
      <Modal openModal={uploadModal} closeModal={closeUploadModal}>
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">Plant a Tree</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Planted By
        </label>
        <input
          type="text"
          name="plantedBy"
          value={formData.plantedBy}
          onChange={handleInputChange}
          className="mt-1 bg-slate-400 bg-opacity-80 p-2 block w-full border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Location
        </label>
        <textarea
          type="text"
          name="location"
          value={formData.location}
          onChange={handleInputChange}
          className="mt-1 bg-slate-400 p-2 block w-full border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4 flex justify-start gap-10 items-center">
        <div className="flex flex-col justify-center items-start">
          <label className="block text-sm font-medium text-gray-700">
            Latitude
          </label>
          <input
            type="text"
            name="plantSpecies"
            value={formData.coordinates.latitude}
            onChange={handleInputChange}
            className="mt-1 bg-slate-400 p-2 block w-full border-gray-300 rounded-md"
          />
        </div>
        <div className="flex flex-col justify-center items-start">
          <label className="block text-sm font-medium text-gray-700">
            Longitude
          </label>
          <input
            type="text"
            name="plantSpecies"
            value={formData.coordinates.longitude}
            onChange={handleInputChange}
            className="mt-1 bg-slate-400 p-2 block w-full border-gray-300 rounded-md"
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Plant Species
        </label>
        <input
          type="text"
          name="plantSpecies"
          value={formData.plantSpecies}
          onChange={handleInputChange}
          className="mt-1 bg-slate-400 p-2 block w-full border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Date
        </label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleInputChange}
          className="mt-1 bg-slate-400 p-2 block w-full border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Upload Image
        </label>
        <input
          type="file"
          name="plantImage"
          onChange={handleFileChange}
          className="mt-1 bg-slate-400 p-2 block w-full border-gray-300 rounded-md"
        />
      </div>
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Submit
      </button>
    </div>
  </Modal>
  </>
  );
};

export default ProfileSection;
