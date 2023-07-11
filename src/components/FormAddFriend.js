import { useState } from "react";
import { Button } from "./Button";

export function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name) {
      alert("Please enter a name");
      return;
    }
    if (!image) {
      alert("Please enter an image URL");
      return;
    }
    const friend = {
      id: Date.now(),
      name,
      image: image,
      balance: 0,
    };
    onAddFriend(friend);
    setName("");
    setImage("");
  };

  return (
    <form className="form-add-friend">
      <label>Friend Name</label>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <label>Image URL</label>
      <input
        value={image}
        onChange={(event) => setImage(event.target.value)}
        type="text"
      />

      <Button onClick={handleSubmit}>Add</Button>
    </form>
  );
}
