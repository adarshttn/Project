import "./Topbar.css";
import {FolderIcon,TagIcon,EmojiHappyIcon, XIcon,LocationMarkerIcon} from   "@heroicons/react/outline";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

export default function Share() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const desc = useRef();
  const [file, setFile] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.img = fileName;
      console.log(newPost);
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      await axios.post("/posts", newPost);
      window.location.reload();
    } catch (err) {}
  };

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            className="shareProfileImg"
            src={
              "https://randomuser.me/api/portraits/women/81.jpg"
            }
            alt=""
          />
          <input
            placeholder={"What's in your mind " + user.username + "?"}
            className="shareInput"
            ref={desc}
          />
        </div>
        <hr className="shareHr" />
        {file && (
          <div className="shareImgContainer">
            <img className="shareImg" src={URL.createObjectURL(file)} alt="" />
            < XIcon className="shareCancelImg h-8 w-8 " onClick={() => setFile(null)} />
          </div>
        )}
        <form className="shareBottom" onSubmit={submitHandler}>
          <div className="shareOptions">
            <label htmlFor="file" className="shareOption">
              <FolderIcon htmlColor="tomato" className="shareIcon h-9 w-9 fill-yellow-400" />
              <span className="shareOptionText">Photo or Video</span>
              <input
                style={{ display: "none" }}
                type="file"
                id="file"
                accept=".png,.jpeg,.jpg"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
            <div className="shareOption">
              <TagIcon htmlColor="blue" className="shareIcon h-7 w-7 fill-blue-600" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <LocationMarkerIcon htmlColor="green" className="shareIcon h-7 w-7 fill-green-600" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiHappyIcon htmlColor="goldenrod" className="shareIcon h-7 w-7 fill-pink-400" />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button className="shareButton" type="submit">
            Share
          </button>
        </form>
      </div>
    </div>
  );
}