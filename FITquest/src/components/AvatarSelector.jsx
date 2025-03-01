import React, { useState, useEffect } from 'react';
import { Check } from 'lucide-react';

export const avatars = [
  {
    id: 1,
    name: 'Default',
    svg: (
      <svg viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="16" fill="#3B82F6" stroke="white" strokeWidth="2"/>
        <path d="M20 12a4 4 0 100 8 4 4 0 000-8zm-6 18c0-3.3 4-5 6-5s6 1.7 6 5" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    id: 2,
    name: 'Glasses',
    svg: (
      <svg viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="16" fill="#EC4899" stroke="white" strokeWidth="2"/>
        <path d="M14 18a3 3 0 100 6 3 3 0 000-6zm12 0a3 3 0 100 6 3 3 0 000-6z" stroke="white" strokeWidth="2"/>
        <path d="M17 21h6" stroke="white" strokeWidth="2"/>
        <path d="M20 28c2 0 4-1 4-3" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    id: 3,
    name: 'Hat',
    svg: (
      <svg viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="16" fill="#10B981" stroke="white" strokeWidth="2"/>
        <path d="M12 16h16M14 12s3-2 6-2 6 2 6 2" stroke="white" strokeWidth="2"/>
        <path d="M20 18a4 4 0 100 8 4 4 0 000-8z" stroke="white" strokeWidth="2"/>
      </svg>
    )
  },
  {
    id: 4,
    name: 'Cool',
    svg: (
      <svg viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="16" fill="#F59E0B" stroke="white" strokeWidth="2"/>
        <path d="M14 16h12" stroke="white" strokeWidth="2"/>
        <path d="M20 28c3 0 6-2 6-5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    id: 5,
    name: 'Smile',
    svg: (
      <svg viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="16" fill="#8B5CF6" stroke="white" strokeWidth="2"/>
        <circle cx="15" cy="17" r="2" fill="white"/>
        <circle cx="25" cy="17" r="2" fill="white"/>
        <path d="M14 24c2 2 6 3 12 0" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    id: 6,
    name: 'Cat',
    svg: (
      <svg viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="16" fill="#EF4444" stroke="white" strokeWidth="2"/>
        <path d="M13 14l3 4m11-4l-3 4" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="16" cy="20" r="1.5" fill="white"/>
        <circle cx="24" cy="20" r="1.5" fill="white"/>
        <path d="M20 23l-2 2 2 2 2-2z" fill="white"/>
      </svg>
    )
  },
  {
    id: 7,
    name: 'Ninja',
    svg: (
      <svg viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="16" fill="#4B5563" stroke="white" strokeWidth="2"/>
        <path d="M12 18h16" stroke="white" strokeWidth="2"/>
        <path d="M15 22l2-2 6 2" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    id: 8,
    name: 'Bear',
    svg: (
      <svg viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="16" fill="#7C3AED" stroke="white" strokeWidth="2"/>
        <circle cx="15" cy="16" r="2" fill="white"/>
        <circle cx="25" cy="16" r="2" fill="white"/>
        <circle cx="20" cy="22" r="3" fill="white"/>
        <path d="M13 13l-2-2m16 2l2-2" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    id: 9,
    name: 'Robot',
    svg: (
      <svg viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="16" fill="#059669" stroke="white" strokeWidth="2"/>
        <rect x="14" y="16" width="4" height="4" fill="white"/>
        <rect x="22" y="16" width="4" height="4" fill="white"/>
        <path d="M14 24h12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    id: 10,
    name: 'Star',
    svg: (
      <svg viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="16" fill="#D97706" stroke="white" strokeWidth="2"/>
        <path d="M20 12l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6z" fill="white"/>
      </svg>
    )
  }
];

const AvatarSelector = () => {
  useEffect(() => {
    const storedAvatar = localStorage.getItem('userAvatarId');
    if (storedAvatar) {
      setSelectedAvatar(parseInt(storedAvatar));
    }
  }, []);

  const [selectedAvatar, setSelectedAvatar] = useState(() => {
    return localStorage.getItem('userAvatarId') ? parseInt(localStorage.getItem('userAvatarId')) : 1;
  });
  const [saving, setSaving] = useState(false);

  const handleSelectAvatar = async (avatarId) => {
    setSelectedAvatar(avatarId);
    setSaving(true);
    
    try {
      // Save to your backend
      await fetch('http://localhost:5000/update-avatar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: localStorage.getItem('email'),
          avatarId
        }),
      });
      
      // Store in localStorage for immediate use
      localStorage.setItem('userAvatarId', avatarId);
    } catch (error) {
      console.error('Error saving avatar:', error);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="p-6 bg-gray-900/50 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Choose Your Avatar</h2>
      <div className="grid grid-cols-5 gap-4">
        {avatars.map((avatar) => (
          <button
            key={avatar.id}
            onClick={() => handleSelectAvatar(avatar.id)}
            className={`relative p-2 rounded-lg transition-all duration-200 ${
              selectedAvatar === avatar.id
                ? 'bg-blue-50 ring-2 ring-blue-500 text-black'
                : 'hover:bg-gray-50'
            }`}
          >
            <div className="w-16 h-16">
              {avatar.svg}
            </div>
            {selectedAvatar === avatar.id && (
              <div className="absolute top-1 right-1 bg-blue-500 rounded-full p-1">
                <Check className="w-3 h-3 text-white" />
              </div>
            )}
            <p className="text-xs text-center mt-1">{avatar.name}</p>
          </button>
        ))}
      </div>
      {saving && (
        <p className="text-sm text-blue-500 mt-4">Saving your selection...</p>
      )}
    </div>
  );
};

export default AvatarSelector;
