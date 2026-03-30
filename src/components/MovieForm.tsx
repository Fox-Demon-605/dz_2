import { useState } from "react";
import type { Movie } from "../types/Movie"

interface Props {
  onAdd: (movie: Movie) => void;
}

export function MovieForm({ onAdd }: Props){
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    onAdd({
      id: Date.now(),
      title,
      year: Number(year),
      description
    })

    // Clear form
    setTitle("");
    setYear("");
    setDescription("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        value={title} 
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Название"
      />
      <input 
        value={year} 
        onChange={(e) => setYear(e.target.value)}
        placeholder="Год"
        type="number"
      />
      <input 
        value={description} 
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Описание"
      />
      <button type="submit">Добавить</button>
    </form>
  );
}