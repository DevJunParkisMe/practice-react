import { useState } from 'react';

const CommunityUser = ({ username, bio }) => {
  return (
    <div>
      <p className='text-black'>Username: {username}</p>
      <p className='text-black'>Bio: {bio}</p>
    </div>
  );
};

const CommunityComponent = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [userDetailPosition, setUserDetailPosition] = useState({ x: 0, y: 0 });
  const users = [
    { id: 1, username: 'User1', bio: 'Bio for User1' },
    { id: 2, username: 'User2', bio: 'Bio for User2' },
    { id: 3, username: 'User3', bio: 'Bio for User3' },
    { id: 3, username: 'User4', bio: 'Bio for User4' },
    { id: 3, username: 'User5', bio: 'Bio for User5' },
    { id: 3, username: 'User6', bio: 'Bio for User6' },
    { id: 3, username: 'User7', bio: 'Bio for User7' },
    { id: 3, username: 'User8', bio: 'Bio for User8' },
    { id: 3, username: 'User9', bio: 'Bio for User9' },

    // Add more users as needed
  ];

  const handleUsernameClick = (user, e) => {
    if (e) {
        setSelectedUser(user);
        setUserDetailPosition({ x: e.clientX, y: e.clientY });
      }
  };

 
  return (
    <div>
      <h2>Community Members</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <button onClick={(e) => handleUsernameClick(user, e)}>{user.username}</button>
          </li>
        ))}
      </ul>

      {selectedUser && (
        <div className='text-white absolute p-4 rounded-md border border-blue-500'
        style={{ top: userDetailPosition.y + 'px', left: userDetailPosition.x + 'px' }}>
          <h3 className=''>User Information</h3>
          <CommunityUser/>
        </div>
      )}
    </div>
  );
};

export default CommunityComponent;