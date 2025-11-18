import React, { useEffect, useState } from "react";
import { getDatabase, push, ref, set, onValue } from "firebase/database";
import { FiEdit3, FiTrash2 } from "react-icons/fi";

const Home = () => {
  const [inputData, setInputData] = useState("");
  const [result, setResult] = useState([]);
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("#ffffff");

  const db = getDatabase();

  const handleSubmit = function (e) {
    e.preventDefault();
    // keep existing behavior: save combined object
    // Title is intentionally left out of the composer (placeholder only)
    set(push(ref(db, "notesCollection/")), {
      title: title,
      data: inputData,
      noteColor: color,
    });
    // clear composer UI only
    setInputData("");
    setTitle("");
  };

  // CRUD Operation (unchanged)
  useEffect(() => {
    const userNotes = ref(db, "notesCollection/");
    onValue(userNotes, (snapshot) => {
      let convertArray = [];
      snapshot.forEach((item) => {
        convertArray.push(item.val());
        console.log(item.val());
      });

      setResult(convertArray);
    });
  }, []);

  return (
    <div className="home-root">
      {/* Note composer - inspired by Google Keep */}
      <form
        className="composer"
        style={{ background: color }}
        onSubmit={handleSubmit}
      >
        {/* input title */}
        <input
          className="compserTitle text-xl"
          type="text"
          placeholder="Title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {/* title input */}

        <textarea
          className="composer-body"
          placeholder="Take a note..."
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
          rows={3}
        />
        <div className="composer-actions">
          <div className="left-actions">
            {/* visual-only action icons (no functions) */}
            <button type="button" className="icon-btn" aria-label="remind">
              ⏰
            </button>
            <button
              type="button"
              className="icon-btn"
              aria-label="collaborator"
            >
              👥
            </button>

            {/* Color palette - visual only */}
            <div
              className="color-palette mt-2"
              role="list"
              aria-label="Color palette"
            >
              {[
                "#ffffff",
                "#fff59d",
                "#ffd54f",
                "#ffe0b2",
                "#c8e6c9",
                "#bbdefb",
                "#f8bbd0",
              ].map((c, idx) => (
                <button
                  key={idx}
                  type="button"
                  className="swatch"
                  style={{ background: c }}
                  aria-label={`Choose color ${idx + 1}`}
                  onClick={() => setColor(c)}
                />
              ))}
            </div>
          </div>
          <div className="right-actions">
            <button className="add-btn" type="submit">
              Add
            </button>
          </div>
        </div>
      </form>

      {/* Notes grid */}
      <div className="notes-grid">
        {result.map((item, i) => (
          <article
            className="note-card"
            style={{ background: item.noteColor }}
            key={i}
          >
            <div className="note-header">
              <h3 className="note-title">{item.title || "Untitled"}</h3>
              <div className="note-actions">
                <button
                  className="icon-btn"
                  type="button"
                  title="Edit (visual)"
                >
                  <FiEdit3 />
                </button>
                <button
                  className="icon-btn"
                  type="button"
                  title="Delete (visual)"
                >
                  <FiTrash2 />
                </button>
              </div>
            </div>
            <p className="note-body">{item.data}</p>
            <div className="note-footer">
              <div className="footer-left">
                <small className="note-date">just now</small>
              </div>
              <div className="footer-right">
                {/* footer actions removed - only edit/delete allowed in header */}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Home;
