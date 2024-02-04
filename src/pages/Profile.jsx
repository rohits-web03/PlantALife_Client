import React, { useState, useEffect } from "react";
import Modal from "../components/Modal";
// import Web3 from "web3";
// const ABI=[
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "_initialSupply",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "nonpayable",
// 		"type": "constructor"
// 	},
// 	{
// 		"anonymous": false,
// 		"inputs": [
// 			{
// 				"indexed": true,
// 				"internalType": "address",
// 				"name": "owner",
// 				"type": "address"
// 			},
// 			{
// 				"indexed": true,
// 				"internalType": "address",
// 				"name": "spender",
// 				"type": "address"
// 			},
// 			{
// 				"indexed": false,
// 				"internalType": "uint256",
// 				"name": "value",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "Approval",
// 		"type": "event"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "_spender",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "_value",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "approve",
// 		"outputs": [
// 			{
// 				"internalType": "bool",
// 				"name": "success",
// 				"type": "bool"
// 			}
// 		],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "_to",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "_value",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "transfer",
// 		"outputs": [
// 			{
// 				"internalType": "bool",
// 				"name": "success",
// 				"type": "bool"
// 			}
// 		],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"anonymous": false,
// 		"inputs": [
// 			{
// 				"indexed": true,
// 				"internalType": "address",
// 				"name": "from",
// 				"type": "address"
// 			},
// 			{
// 				"indexed": true,
// 				"internalType": "address",
// 				"name": "to",
// 				"type": "address"
// 			},
// 			{
// 				"indexed": false,
// 				"internalType": "uint256",
// 				"name": "value",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "Transfer",
// 		"type": "event"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "_from",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "address",
// 				"name": "_to",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "_value",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "transferFrom",
// 		"outputs": [
// 			{
// 				"internalType": "bool",
// 				"name": "success",
// 				"type": "bool"
// 			}
// 		],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "address",
// 				"name": "",
// 				"type": "address"
// 			}
// 		],
// 		"name": "allowance",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "_account",
// 				"type": "address"
// 			}
// 		],
// 		"name": "balanceOf",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "",
// 				"type": "address"
// 			}
// 		],
// 		"name": "balances",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "decimals",
// 		"outputs": [
// 			{
// 				"internalType": "uint8",
// 				"name": "",
// 				"type": "uint8"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "name",
// 		"outputs": [
// 			{
// 				"internalType": "string",
// 				"name": "",
// 				"type": "string"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "symbol",
// 		"outputs": [
// 			{
// 				"internalType": "string",
// 				"name": "",
// 				"type": "string"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "totalSupply",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	}
// ]
// const web3=new Web3("https://sepolia.infura.io/v3/ef929683fa93443f830ffb6151177d78");
// const address="0x568500965B64A8d2eE8ffe1891B6fccba02bF3bD";
// const leafCoin=new web3.eth.Contract(ABI, address);
// // Get the current balance of the address
// leafCoin.methods.balanceOf("0xA7F5331760C33E3a5790311FD37B2C9FfA44CaE5").call()
//   .then(balance => {
//     // Convert balance from Wei to Ether
//     // const balanceInEther = web3.utils.fromWei(balance, "ether");
//     console.log("Current balance(leafcoin):", balance, "LFC");
//   })
//   .catch(err => {
//     console.error("Error getting balance:", err);
//     // Handle error if needed
//   });
// // await leafCoin.methods.transfer("0xBF7664e68C1f03F7337d29A3238BB5FE799f7d69", 1).send({ from: "0xA7F5331760C33E3a5790311FD37B2C9FfA44CaE5" });

const ProfileSection = () => {
  const [uploadModal, setUploadModal] = useState(false);
  let user=localStorage.getItem('user');
  const [claim,setClaim]=useState(true);
  user=JSON.parse(user);
  const [formData, setFormData] = useState({
    location: "",
    date: "",
    plantSpecies: "",
    plantedBy: user._id,
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

  async function updateBalanceInDBAndLocalStorage(userID, amount) {
    try {
      // Make a POST request to the endpoint to update the balance
      const response = await fetch(`http://localhost:8000/api/v1/users/updateBalance?userID=${userID}&amount=${amount}`, {
        method: 'POST',
      });
  
      if (!response.ok) {
        throw new Error('Failed to update balance in database');
      }
  
      // Retrieve the updated user data from the response
      const userData = await response.json();
      
      // Update local storage with the new balance
      localStorage.setItem('user', JSON.stringify(userData.user));
  
      console.log('Balance updated successfully in both database and local storage:', userData.user.accBalance);
    } catch (error) {
      console.error('Error updating balance:', error);
      // Handle error if needed
    }
  }
  

  const openUploadModal = () => {
    setUploadModal(true);
  };

  const closeUploadModal = () => {
    setUploadModal(false);
  };

  async function handleTransfer(recipientAddress, amount) {
    try {
      // Call the transfer method of the LeafCoin contract
      const tx = await leafCoin.methods.transfer(recipientAddress, amount).send({ from: "0xA7F5331760C33E3a5790311FD37B2C9FfA44CaE5" });
  
      // Handle the successful transfer
      console.log("Transfer successful:", tx);
      
      // Fetch the endpoint to add a new transaction
      const queryParams = new URLSearchParams({
        recipientAddress: recipientAddress,
        amount: amount,
        date: new Date().toISOString() // Assuming the date is the current date
      });
      const response = await fetch(`http://localhost:8000/api/v1/transactions/new?${queryParams}`);
  
      if (!response.ok) {
        throw new Error('Failed to add transaction');
      }
  
      // Update balance in the database and local storage
      await updateBalanceInDBAndLocalStorage(yourUserID, amount);
      setClaim(false);
  
      // You may update the UI or perform other actions based on the result
    } catch (error) {
      // Handle the error
      console.error("Error transferring LeafCoins:", error);
      // You may display an error message to the user or perform other error handling
    }
  }
  
  

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
  
      // Extract image_url from the response
      const responseData = await response.json();
      console.log(responseData);
      const imageUrl = responseData.tree.treeImages[0]; // Assuming the URL is stored in the treeImages field
  
      // Fetch profile_pic_url from user.avatar
      const userProfileUrl = user.avatar; // Assuming user is available in scope
  
      // Make a POST request to "/verify"
      const verifyResponse = await fetch("https://plantalife-ml.onrender.com/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          image_url: imageUrl,
          profile_pic_url: userProfileUrl
        })
      });
      
      // Make sure to use await to properly resolve the Promise returned by verifyResponse.json()
      const ResponseData = await verifyResponse.json();
      
      // Now you can access the response object properties
      console.log(ResponseData.response);
      
  
      if (ResponseData.response) {
        console.log("True value")
        try {
          // Make POST request to update seeds in the database
          const response = await fetch(`http://localhost:8000/api/v1/users/updateSeeds/${user._id}`, {
            method: "POST",
          });
      
          if (!response.ok) {
            throw new Error("Failed to update seeds");
          }
      
          // Seeds updated successfully in the database
          console.log("Seeds updated successfully in the database");
      
          // Update seeds in local storage
          const updatedUser = { ...user, seeds: user.seeds + 10 }; // Assuming you increment seeds by 10
          localStorage.setItem("user", JSON.stringify(updatedUser));
          console.log("Seeds updated successfully in local storage");
          if(user.metamaskAddress>25){
            setClaim(true);
          }
          alert("Image Successfully Verified.\n10 Seeds have been credited to your account");
          window.location.reload();
        } catch (error) {
          console.error("Error updating seeds:", error);
          // Handle error if needed
        }
      } else{
        console.log("False value")
        alert("Image did not match!!");
      }
      
      
      console.log("Verification successful");
  
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
      <div className="bg-white shadow-lg rounded-lg p-2 md:p-6 mb-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex justify-center items-center gap-2 p-6">
              <img src={user.avatar} alt={user.name} className="w-36 h-36 rounded-full"/>
              <div className="flex flex-col justify-center items-start gap-2 text-lg">
                  <p><span className="font-semibold text-xl">Name: </span>{user.name}</p>
                  <p><span className="font-semibold text-xl">Email: </span>{user.email}</p>
              </div>
          </div>
          <div className="w-[50%] flex flex-col gap-4">
            <div>
              <p className="text-gray-600">Metamask ID:</p>
              <div className="flex items-center">
                <input type="text" value="******************************" className="w-full bg-gray-100 px-2 py-1 rounded-l-lg border border-gray-300 focus:outline-none focus:border-green-500" readOnly />
                <button onClick={() => navigator.clipboard.writeText("Your Metamask ID")} className="bg-green-500 text-white px-4 py-1 rounded-r-lg hover:bg-green-600 focus:outline-none">Copy</button>
              </div>
            </div>
            <div className="text-lg">
              <p><span className="font-semibold text-xl">Seeds:</span>{user.seeds}</p>
            </div>
            {user.seeds>=5?
            <button 
              disabled={!claim}
              onClick={()=>{handleTransfer(user.metamaskAddress,1)}}
              className="bg-blue-500 rounded-xl px-3 py-1 w-fit">
                Claim Rewards
              </button>:null}
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
