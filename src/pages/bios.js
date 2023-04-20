import { useEffect, useState } from "react";
import { fetchBios } from '../api/biosapi'; // Importing an API function to fetch data
import { useParams } from "react-router-dom"; // Importing a function to retrieve URL parameters
import "../style/bios.css"; // Importing a CSS file for styling

function Bios() {
  const [biosData, setBiosData] = useState([]); // Initializing a state variable for bios data
  const [newDescription, setNewDescription] = useState(''); // Initializing a state variable for new bios description
  const { id } = useParams(); // Retrieving the "id" parameter from the URL

  useEffect(() => { // Using a hook to fetch bios data when the component mounts
    fetchBios()
      .then(data => {
        console.log(data); // Logging the data to the console
        setBiosData(data); // Setting the state variable to the fetched data
      })
      .catch(error => {
        console.error(error); // Logging any errors to the console
      });
  }, []);

  const handleFormSubmit = (event) => { // A function to handle the form submission
    event.preventDefault();
    const updatedBiosData = [...biosData];
    updatedBiosData[id].description += '\n' + newDescription; // Concatenating new text with existing text
    setBiosData(updatedBiosData); // Updating the state variable with the new data
    setNewDescription(''); // Clearing the new bios description state variable
  };

  const handleUpdateButtonClick = () => { // A function to handle the update button click
    const updatedBiosData = [...biosData];
    updatedBiosData[id].description = newDescription; // Replacing existing text with new text
    setBiosData(updatedBiosData); // Updating the state variable with the new data
    setNewDescription(''); // Clearing the new bios description state variable
  };

  const handleDeleteButtonClick = () => { // A function to handle the delete button click
    const updatedBiosData = [...biosData];
    updatedBiosData[id].description = '';
    setBiosData(updatedBiosData); // Updating the state variable with the new data
  };

  return (
    <div className='bios'>
      {/* Check if biosData has been fetched */}
      {biosData.length > 0 && (
        <>
          {/* Left half of the bios page */}
          <div className='left-half'>
            <h1>{biosData[id].firstname + " " + biosData[id].lastname}</h1>
            <a className='img-container'>
              <img className='bios-img' alt="bios-photo" src={biosData[id].imageUrl} />
            </a>
          </div>
          {/*  of the bios page */}
          <div className='right-half'>
            {/* Form for updating the description */}
            <form onSubmit={handleFormSubmit}>
              <label>
                Update description:
                <textarea value={newDescription} onChange={(event) => setNewDescription(event.target.value)} />
              </label>
              <button type="submit">Save</button>
              <button type="button" onClick={handleUpdateButtonClick}>Update</button>
            </form>
            {/* Controls for deleting the description */}
            <div className='description-controls'>
              <button className='delete-button' onClick={handleDeleteButtonClick}>Delete</button>
            </div>
            {/* Display the current description */}
            <blockquote className='bios-desc' >
              <p>
                {biosData[id].description}
              </p>
            </blockquote>
          </div>
        </>
      )}
    </div>
  );
}

export default Bios;
