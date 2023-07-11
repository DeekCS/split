import { useState } from "react";
import { Button } from "./Button";

export function FormSplitBill({ friend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState(true);
  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!bill || !paidByUser) return;

    onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
  };

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>
        Split a bill with
        <span className="friend-name"> {friend.name}</span>
      </h2>
      <label>Bill Amount</label>
      <input
        type="number"
        value={bill}
        onChange={(event) => setBill(Number(event.target.value))}
      />
      <label>Your expense</label>
      <input
        type="number"
        value={paidByUser}
        onChange={(event) =>
          setPaidByUser(
            Number(
              event.target.value > bill ? bill : Number(event.target.value)
            )
          )
        }
      />
      <label>{friend.name}'s expense</label>
      <input type="text" disabled value={paidByFriend} />
      <label>Who is paying the bill?</label>
      <select
        value={whoIsPaying}
        onChange={(event) => setWhoIsPaying(event.target.value)}
      >
        <option value="user">Me</option>
        <option value="friend">
          {friend.name} ({friend.balance})
        </option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
}
