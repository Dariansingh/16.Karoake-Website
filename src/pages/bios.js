import { useEffect, useState } from "react";
import { fetchBios } from '../api/biosapi';
import { useParams } from "react-router-dom";
import "../style/bios.css";

function Bios() {
  const [biosData, setBiosData] = useState([]);
  const [newDescription, setNewDescription] = useState('');
  const { id } = useParams();

  useEffect(() => {
    fetchBios()
      .then(data => {
        console.log(data);
        setBiosData(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const updatedBiosData = [...biosData];
    updatedBiosData[id].description += '\n' + newDescription; // concatenate new text with existing text
    setBiosData(updatedBiosData);
    setNewDescription('');
  };

  const handleDeleteButtonClick = () => {
    const updatedBiosData = [...biosData];
    updatedBiosData[id].description = '';
    setBiosData(updatedBiosData);
  };

  return (
    <div className='bios'>
      {biosData.length > 0 && (
        <>
          <div className='left-half'>
            <h1>{biosData[id].firstname + " " + biosData[id].lastname}</h1>
            <a className='img-container'>
              <img className='bios-img' alt="bios-photo" src={biosData[id].imageUrl} />
            </a>
          </div>
          <div className='right-half'>
            <form onSubmit={handleFormSubmit}>
              <label>
                Update description:
                <textarea value={newDescription} onChange={(event) => setNewDescription(event.target.value)} />
              </label>
              <button type="submit">Save</button>
            </form>
            <div className='description-controls'>
              <button className='delete-button' onClick={handleDeleteButtonClick}>Delete</button>
            </div>
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
