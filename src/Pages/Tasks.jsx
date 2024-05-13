
import React, { useState ,useEffect} from 'react';
import './TaskCard.css';
import { RiEdit2Line } from 'react-icons/ri';

function Tasks() {
  const defaultEntries = [
    { id:1,title: 'User Flow', description: 'Designing a dashboard involves of creating interface' , status: 'High'},
    { id:2, title: 'Website Design', description: 'Designing a dashboard involves of creating interface' , status: 'Medium'},
    { id:3, title: 'User Flow', description: 'Designing a dashboard involves of creating interface' , status: 'High'},
    { id:4, title: 'Website Design', description: 'Designing a dashboard involves of creating interface', status: 'High'},
    { id:5, title: 'User Flow', description: 'Designing a dashboard involves of creating interface' , status: 'Low',position: 'UI/UX'}
  ];
  useEffect(() => {
    setCards(defaultEntries);
  }, []);

  const [cards, setCards] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false); 
  const [editMode, setEditMode] = useState(null); 
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    status: 'High',
  
  });

  const [searchQuery, setSearchQuery] = useState('');
  



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title.trim() !== '' && formData.description.trim() !== '') {
      if (editMode !== null) {
        // If in edit mode, update the card
        const updatedCards = cards.map(card => {
          if (card.id === editMode) {
            return { ...card, title: formData.title, description: formData.description };
          }
          return card;
        });
        setCards(updatedCards);
        setEditMode(null); // Exit edit mode
      } else {
        // If not in edit mode, add a new card
        setCards(prevCards => [
          ...prevCards,
          { id: Date.now(), title: formData.title, description: formData.description }
        ]);
      }
      setFormData({ title: '', description: '' });
      setShowAddForm(false); 
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredCards = cards.filter((card) =>
    card.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = (id) => {
    setCards(prevCards => prevCards.filter(card => card.id !== id));
  };
  const enableEditMode = (id) => {
    const cardToEdit = cards.find(card => card.id === id);
    setFormData({ title: cardToEdit.title, description: cardToEdit.description });
    setEditMode(id);
    setShowAddForm(true); // Show the add form when editing
  };
 
  return (
    <div>
         <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search tasks..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="add-button" onClick={() => setShowAddForm(!showAddForm)}>
          Add Task
        </button>
      </div>

      {showAddForm && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Title"
          />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
          ></textarea>
       
          <select name="status" value={formData.status} onChange={handleChange}>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
         
          <button type="submit">{editMode !== null ? 'Update Card' : 'Add Card'}</button>
        </form>
      )}
     

     <div className="cards-container">
        {filteredCards.map((card, index) => (
          <div key={card.id} className="card">
           <p>{new Date(card.id).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
            <h2>{card.title}</h2>
            <p>{card.description}</p>
            <div>
              <button class="edit-button" onClick={() => enableEditMode(card.id)}>Edit</button>
              <button class="delete-button" onClick={() => handleDelete(card.id)}>Delete</button>
              <span className="status">{card.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tasks;
