import { Button } from "./Button";

export function Friend({ friend, onSelectFriend, selectedFriend }) {
  const isSelected = selectedFriend && selectedFriend.id === friend.id;
  return (
    <li className={`friend ${isSelected ? "selected" : ""}`}>
      <img src={friend.image} alt={friend.name} />

      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          you owe {friend.name} ${Math.abs(friend.balance)} 💸
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you ${friend.balance} 💰
        </p>
      )}
      {friend.balance === 0 && (
        <p className="even-balance">you're even with {friend.name} 🎉</p>
      )}
      <Button
        onClick={() => {
          onSelectFriend(friend);
        }}
      >
        {isSelected ? "Cancel" : "Select"}
      </Button>
    </li>
  );
}
