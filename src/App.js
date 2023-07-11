import { useState } from "react";
import { FriendsList } from "./components/FriendsList";
import { FormAddFriend } from "./components/FormAddFriend";
import { Button } from "./components/Button";
import { FormSplitBill } from "./components/FormSplitBill";
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [seltectedFriend, setSelectedFriend] = useState(null);

  const handleShowAddFriend = () => {
    setShowAddFriend((show) => !show);
  };

  const handleAddFriend = (friend) => {
    console.log(friend);
    setFriends((friends) => [...friends, friend]);
    handleShowAddFriend();
  };

  const handleSelectFriend = (friend) => {
    setSelectedFriend(friend.id === seltectedFriend?.id ? null : friend);
    setShowAddFriend(false);
  };

  const handleSplitBill = (amount) => {
    setFriends((friends) =>
      friends.map((friend) => {
        if (friend.id === seltectedFriend.id) {
          return {
            ...friend,
            balance: friend.balance + amount,
          };
        }
        return friend;
      })
    );
    setSelectedFriend(null);
  };
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          selectedFriend={seltectedFriend}
          onSelectFriend={handleSelectFriend}
        />

        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      <div className="main">
        {seltectedFriend && (
          <FormSplitBill
            friend={seltectedFriend}
            onSplitBill={handleSplitBill}
          />
        )}
      </div>
    </div>
  );
}
